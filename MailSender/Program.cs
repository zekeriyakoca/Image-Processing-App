using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Mail;
using Mail.Interfaces;
using Cache.Interfaces;

namespace MailSender
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

          services.AddTransient<IMailSendingWorkerService, MailSendingWorkerService>();
          services.AddTransient<IMailService, SendGridMailService>();

          services.AddCache(Cache.Dtos.CachingServiceEnum.Redis);
          services.AddEventBusRabbitMQ(configuration);

          services.AddHostedService<Worker>();
        });

    }
  }
}
