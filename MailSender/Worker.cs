using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Cache.Interfaces;
using EventBusRabbitMQ.Dtos;
using EventBusRabbitMQ.Interfaces;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace MailSender
{
  public class Worker : BackgroundService
  {
    private readonly ILogger<Worker> logger;
    public readonly IEventBus EventBus;
    public readonly IMailSendingWorkerService MailSendingService;
    public readonly ICacheService CacheService;

    public Worker(ILogger<Worker> logger, IEventBus eventBus, IMailSendingWorkerService mailSendingService, ICacheService cacheService)
    {
      this.logger = logger;
      EventBus = eventBus;
      MailSendingService = mailSendingService;
      CacheService = cacheService;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
      EventBus.Subscribe(QueueNameEnum.ImageReadyToMail, async (sender, eventArgs) =>
      {
        ImageReadyToMailDto queueModel = JsonConvert.DeserializeObject<ImageReadyToMailDto>(Encoding.UTF8.GetString(eventArgs.Body));
        if (queueModel == null || string.IsNullOrWhiteSpace(queueModel.MailAddressToSend))
        {
          logger.LogWarning($"Unable to read mail address from Queue.");
        }

        try
        {
          var result = await MailSendingService.SendMail(queueModel.MailAddressToSend, queueModel.ImageUrl);
          if (!result) {
            logger.LogError($"Unable to send mail to {queueModel.MailAddressToSend} for the image on url: {queueModel.ImageUrl}.");
            //Proceeding...
          }

          //Save Image Url To Cache. This will be used in gateaway API to shortcut the process if an image already proccessed and exist in cache.
          await this.CacheService.SetValue(queueModel.CacheKey, queueModel.ImageUrl);

          var mailSent = new MailSentDto() { Id = queueModel.Id, message = "Mail successfully sent." };
          EventBus.Publish(mailSent, QueueNameEnum.MailSent, true);

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
  }
}
