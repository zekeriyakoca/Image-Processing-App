
using EventBusRabbitMQ;
using EventBusRabbitMQ.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using RabbitMQ.Client;

namespace Microsoft.Extensions.DependencyInjection
{
  public static class ServiceCollectionExtensions
  {
    public static void AddEventBusRabbitMQ(this IServiceCollection services, IConfiguration Configuration)
    {

      services.AddSingleton<IRabbitMQPersistentConnection>(sp =>
      {
        var logger = sp.GetRequiredService<ILogger<DefaultRabbitMQPersistentConnection>>();

        var factory = new ConnectionFactory()
        {
          HostName = Configuration["RabbitMQ:EventBusConnection"],
          DispatchConsumersAsync = true
        };

        if (!string.IsNullOrEmpty(Configuration["RabbitMQ:EventBusUserName"]))
        {
          factory.UserName = Configuration["RabbitMQ:EventBusUserName"];
        }

        if (!string.IsNullOrEmpty(Configuration["RabbitMQ:EventBusPassword"]))
        {
          factory.Password = Configuration["RabbitMQ:EventBusPassword"];
        }

        var retryCount = 5;
        if (!string.IsNullOrEmpty(Configuration["RabbitMQ:EventBusRetryCount"]))
        {
          retryCount = int.Parse(Configuration["RabbitMQ:EventBusRetryCount"]);
        }

        return new DefaultRabbitMQPersistentConnection(factory, logger, retryCount);
      });

      services.AddSingleton<IEventBus, RabbitMQBus>(sp =>
      {
        var subscriptionClientName = Configuration["RabbitMQ:SubscriptionClientName"];

        var rabbitMQPersistentConnection = sp.GetRequiredService<IRabbitMQPersistentConnection>();
        var logger = sp.GetRequiredService<ILogger<RabbitMQBus>>();

        var retryCount = 5;
        if (!string.IsNullOrEmpty(Configuration["RabbitMQ:EventBusRetryCount"]))
        {
          retryCount = int.Parse(Configuration["RabbitMQ:EventBusRetryCount"]);
        }

        return new RabbitMQBus(rabbitMQPersistentConnection, logger, subscriptionClientName, retryCount);
      });


    }
  }
}

