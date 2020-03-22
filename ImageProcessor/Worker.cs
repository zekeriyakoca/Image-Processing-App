using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using EventBusRabbitMQ.Dtos;
using EventBusRabbitMQ.Interfaces;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace ImageProcessor
{
  public class Worker : BackgroundService
  {
    private readonly ILogger<Worker> logger;

    public Worker(ILogger<Worker> logger, IEventBus eventBus, IImageProcessingService imageProcessingService)
    {
      this.logger = logger;
      EventBus = eventBus;
      ImageProcessingService = imageProcessingService;
    }

    public IEventBus EventBus { get; }
    public IImageProcessingService ImageProcessingService { get; }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {

      EventBus.Subscribe(QueueNameEnum.ImageToCompress, async (sender, eventArgs) =>
      {
        var eventName = eventArgs.RoutingKey;
        var message = Encoding.UTF8.GetString(eventArgs.Body);

        try
        {
          if (message.ToLowerInvariant().Contains("throw-fake-exception"))
          {
            throw new InvalidOperationException($"Fake exception requested: \"{message}\"");
          }
          ImageProcessingService.ProcessImage();
        }
        catch (Exception ex)
        {
          logger.LogWarning(ex, "----- ERROR Processing message \"{Message}\"", message);
        }

        // Even on exception we take the message off the queue.
        // in a REAL WORLD app this should be handled with a Dead Letter Exchange (DLX). 
        // For more information see: https://www.rabbitmq.com/dlx.html
        EventBus.SendAck(eventArgs);
      });

    }
  }
}
