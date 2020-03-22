using EventBusRabbitMQ;
using EventBusRabbitMQ.Dtos;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using RabbitMQ.Client;
using System;
using System.IO;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;

namespace ImageProcessor
{
  public class Program
  {
    static void Main(string[] args)
    {
      CreateHostedBuilder(args).Build().Run();

    }

    private static IHostBuilder CreateHostedBuilder(string[] args)
    {
      return Host.CreateDefaultBuilder(args)
        .ConfigureAppConfiguration((hostContext, configApp) =>
        {
          configApp.AddJsonFile("appsettings.json", optional: true);
          configApp.AddJsonFile(
             $"appsettings.{hostContext.HostingEnvironment.EnvironmentName}.json",
             optional: true);
        })
        .ConfigureServices((hostContext, services) =>
        {
          var configuration = services.BuildServiceProvider().GetRequiredService<IConfiguration>();
          services.AddTransient<IImageProcessingService, ImageProcessingService>();
          services.AddHostedService<Worker>();
          services.AddEventBusRabbitMQ(configuration);
        });

    }
  }
}
