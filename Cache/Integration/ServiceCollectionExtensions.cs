﻿using Cache.Dtos;
using Cache;
using Cache.Services;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace Microsoft.Extensions.DependencyInjection
{
  public static class ServiceCollectionExtensions
  {
    public static void AddCache(this IServiceCollection services, CachingServiceEnum serviceType)
    {
      switch (serviceType)
      {
        case CachingServiceEnum.Redis:
          services.AddSingleton<ICacheService, RedisCacheService>();
          break;
        default:
          break;
      }

    }
  }
}
