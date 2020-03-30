using System;
using System.Drawing;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using EventBusRabbitMQ.Dtos;
using EventBusRabbitMQ;
using Firebase;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace ImageProcessor
{
  public class Worker : BackgroundService
  {
    private readonly ILogger<Worker> logger;

    public Worker(ILogger<Worker> logger, IEventBus eventBus, IImageProcessService imageProcessingService, IFirebaseService firebaseService, IConfiguration configuration)
    {
      this.logger = logger;
      EventBus = eventBus;
      ImageProcessingService = imageProcessingService;
      FirebaseService = firebaseService;
      Configuration = configuration;
    }

    public IEventBus EventBus { get; }
    public IImageProcessService ImageProcessingService { get; }
    public IFirebaseService FirebaseService { get; }
    public IConfiguration Configuration { get; }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
      EventBus.Subscribe(QueueNameEnum.ImageToCompress, async (sender, eventArgs) =>
      {
        var eventName = eventArgs.RoutingKey;
        ImageToProcessDto queueModel = JsonConvert.DeserializeObject<ImageToProcessDto>(Encoding.UTF8.GetString(eventArgs.Body));
        if (queueModel == null || string.IsNullOrWhiteSpace(queueModel.Base64Image))
        {
          logger.LogWarning($"Unable to read image from Queue : {queueModel.ImageFileName}");
        }
        Image image = ImageProcessingService.GetImageFromBase64(queueModel.Base64Image);

        try
        {
          Image processedImage = await ProcessImage(image);

          string imageUrl = await CreateImageRecords(queueModel, processedImage);

          SendMailToUser(queueModel, imageUrl);
        }
        catch (Exception ex)
        {
          logger.LogWarning(ex, "----- ERROR Processing image");
        }

        // Even on exception we take the message off the queue.
        // in a REAL WORLD app this should be handled with a Dead Letter Exchange (DLX). 
        // For more information see: https://www.rabbitmq.com/dlx.html
        EventBus.SendAck(eventArgs);
      });

    }

    private void SendMailToUser(ImageToProcessDto queueModel, string imageUrl)
    {
      var imageReadyToMail = new ImageReadyToMailDto() { Id = queueModel.Id, ImageUrl = imageUrl, MailAddressToSend = queueModel.MailAddressToSend, CacheKey = queueModel.CacheKey };
      EventBus.Publish(imageReadyToMail, QueueNameEnum.ImageReadyToMail, true);
    }

    private async Task<string> CreateImageRecords(ImageToProcessDto queueModel, Image processedImage)
    {
      var imageUrl = await FirebaseService.PutImage(new Bitmap(processedImage), $"{queueModel.ImageFileName}-{DateTime.Now}", "Processed");

      var result = await FirebaseService.PutObject(new { url = imageUrl }, $"images/{queueModel.CleanKey}.json");
      if (!result)
        throw new Exception($"Unable to save imageUrl to Realtime Database. image id(cleanKey) :{queueModel.CleanKey}");
      return imageUrl;
    }

    private async Task<Image> ProcessImage(Image image)
    {
      var processedImage = ImageProcessingService.ResizeImageKeepingAspectRatio(image, 1080, 1080);
      var logoImage = await ImageProcessingService.GetImageFromUrl(Configuration["LogoUrl"].ToString());
      processedImage = ImageProcessingService.MergeTwoImages(logoImage, processedImage);
      return processedImage;
    }
  }
}
