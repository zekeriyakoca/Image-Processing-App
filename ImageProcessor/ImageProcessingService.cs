using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Text;

namespace ImageProcessor
{
  public class ImageProcessingService : IImageProcessingService
  {
    public ImageProcessingService(ILogger<ImageProcessingService> logger)
    {
      Logger = logger;
    }

    public ILogger<ImageProcessingService> Logger { get; }

    public void ProcessImage()
    {
      Logger.LogError("test - image processing");
    }
  }
}
