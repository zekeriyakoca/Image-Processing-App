using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace ImageProcessor
{

  public class ImageProcessService : IImageProcessService
  {
    public ImageProcessService(ILogger<ImageProcessService> logger)
    {
      Logger = logger ?? throw new ArgumentNullException(nameof(logger));
    }

    public ILogger<ImageProcessService> Logger { get; }

    public Bitmap MergeTwoImages(Image logoOld, Image mainImage)
    {
      if (logoOld == null)
      {
        throw new ArgumentNullException("firstImage");
      }

      if (mainImage == null)
      {
        throw new ArgumentNullException("secondImage");
      }
      //logoResize
      var logoHeight = 120;
      var marginBottom = 40;

      var newWidth = (int)((logoOld.Width * logoHeight) / logoOld.Height);
      var logo = new Bitmap(logoOld, newWidth, logoHeight);
      int logoX = (mainImage.Width - logo.Width) / 2; //center-align;
      int logoY = (mainImage.Height - marginBottom - logo.Height); //  margin-bottom : 20px;


      Bitmap outputImage = new Bitmap(mainImage);

      using (Graphics graphics = Graphics.FromImage(outputImage))
      {

        graphics.DrawImage(logo, new Point(logoX, logoY));

      }

      return outputImage;
    }
    public Image ResizeImageKeepingAspectRatio(Image source, int width, int height)
    {
      Image result = null;

      try
      {
        if (source.Width != width || source.Height != height)
        {
          // Resize image
          float sourceRatio = (float)source.Width / source.Height;

          using (var target = new Bitmap(width, height))
          {
            using (var g = System.Drawing.Graphics.FromImage(target))
            {
              g.CompositingQuality = CompositingQuality.HighQuality;
              g.InterpolationMode = InterpolationMode.HighQualityBicubic;
              g.SmoothingMode = SmoothingMode.HighQuality;

              // Scaling
              float scaling;
              float scalingY = (float)source.Height / height;
              float scalingX = (float)source.Width / width;
              if (scalingX < scalingY) scaling = scalingX; else scaling = scalingY;

              int newWidth = (int)(source.Width / scaling);
              int newHeight = (int)(source.Height / scaling);

              // Correct float to int rounding
              if (newWidth < width) newWidth = width;
              if (newHeight < height) newHeight = height;

              // See if image needs to be cropped
              int shiftX = 0;
              int shiftY = 0;

              if (newWidth > width)
              {
                shiftX = (newWidth - width) / 2;
              }

              if (newHeight > height)
              {
                shiftY = (newHeight - height) / 2;
              }

              // Draw image
              g.DrawImage(source, -shiftX, -shiftY, newWidth, newHeight);
            }

            result = (Image)target.Clone();
          }
        }
        else
        {
          // Image size matched the given size
          result = (Image)source.Clone();
        }
      }
      catch (Exception)
      {
        result = null;
      }

      return result;
    }
    public Bitmap CreateImageWithLogo(Image logoRaw, Image titleRaw, Image mainImageRaw, int frameWidth = 1080, int frameHeight = 1080)
    {
      if (logoRaw == null)
      {
        throw new ArgumentNullException("Logo");
      }

      if (titleRaw == null)
      {
        throw new ArgumentNullException("Title");
      }

      if (mainImageRaw == null)
      {
        throw new ArgumentNullException("mainImage");
      }

      //Creating outputFrame white background
      Bitmap outputImage = CreateBackgroundImage(frameWidth, frameHeight, Color.White);

      using (Graphics backgroundImage = Graphics.FromImage(outputImage))
      {
        //Quality Configuration
        backgroundImage.CompositingQuality = CompositingQuality.HighQuality;
        backgroundImage.InterpolationMode = InterpolationMode.HighQualityBicubic;
        backgroundImage.SmoothingMode = SmoothingMode.HighQuality;

        //Drawing Main Image
        var marginBottom = 70;
        DrawImageCovering(backgroundImage, mainImageRaw, marginBottom);

        //logoResize
        marginBottom = 40;
        var marginright = 100;
        var coverHeight = 90;

        var coverWidth = (int)((logoRaw.Width * coverHeight) / logoRaw.Height);
        var cover = new Bitmap(logoRaw, coverWidth, coverHeight);
        int coverX = (outputImage.Width - cover.Width) - marginright; //margin right;
        int coverY = (outputImage.Height - marginBottom - cover.Height); //  margin-bottom : 20px;

        //Drawing Logo
        backgroundImage.DrawImage(cover, coverX, coverY);


        //Title Resize
        coverHeight = 30;
        var marginLeft = 100;
        marginBottom = marginBottom + 10;

        coverWidth = (int)((titleRaw.Width * coverHeight) / titleRaw.Height);
        cover = new Bitmap(titleRaw, coverWidth, coverHeight);
        coverX = marginLeft; //margin left;
        coverY = (outputImage.Height - marginBottom - cover.Height);

        //Drawing Title
        backgroundImage.DrawImage(cover, new Point(coverX, coverY));
      }

      return outputImage;
    }

    public async Task<Bitmap> GetImageFromUrl(string url)
    {
      using (var client = new HttpClient())
      {
        try
        {
          client.DefaultRequestHeaders.Add("User-Agent", "C# console program");
          client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("*/*"));
          client.DefaultRequestHeaders.Add("Connection", "keep-alive");

          var response = await client.GetAsync(url);
          if (response != null && response.StatusCode == HttpStatusCode.OK)
          {
            using (var stream = await response.Content.ReadAsStreamAsync())
            {
              var memStream = new MemoryStream();
              await stream.CopyToAsync(memStream);
              memStream.Position = 0;
              var image = new Bitmap(memStream);
              return image;
            }
          }
        }
        catch (Exception ex)
        {
          return null;
        }
      }
      return null;
    }

    public Image GetImageFromBase64(string imageBase64String)
    {
      byte[] imageBytes = Convert.FromBase64String(imageBase64String);
      Image image;
      using (var memoryStream = new MemoryStream(imageBytes))
      {
        image = Image.FromStream(memoryStream);
      }
      return image;
    }

    #region private methods 

    private void DrawImageCovering(Graphics graphics, Image mainImageRaw, int marginBottom)
    {
      var width = mainImageRaw.Width;
      var height = mainImageRaw.Height - marginBottom - 20;
      graphics.CompositingQuality = CompositingQuality.HighQuality;
      graphics.InterpolationMode = InterpolationMode.HighQualityBicubic;
      graphics.SmoothingMode = SmoothingMode.HighQuality;

      // Scaling
      float scaling;
      float scalingY = (float)mainImageRaw.Height / height;
      float scalingX = (float)mainImageRaw.Width / width;
      if (scalingX < scalingY) scaling = scalingX; else scaling = scalingY;

      int newWidth = (int)(mainImageRaw.Width / scaling);
      int newHeight = (int)(mainImageRaw.Height / scaling);

      // Correct float to int rounding
      if (newWidth < width) newWidth = width;
      if (newHeight < height) newHeight = height;

      // See if image needs to be cropped
      int shiftX = 0;
      int shiftY = 0;

      if (newWidth > width)
      {
        newHeight = height * width / newWidth;
        newWidth = width;
        shiftY = (newHeight - height) / 2;
      }

      if (newHeight > height)
      {
        newWidth = height * width / newHeight;
        newHeight = height;
        shiftX = (newWidth - width) / 2;
      }

      // Draw image
      graphics.DrawImage(mainImageRaw, -shiftX, -shiftY, newWidth, newHeight);
    }

    private Bitmap CreateBackgroundImage(int frameWidth, int frameHeight, Color bgColor)
    {
      Bitmap outputImage = new Bitmap(frameWidth, frameHeight);
      using (Graphics g = Graphics.FromImage(outputImage)) { g.Clear(bgColor); }

      return outputImage;
    }

  
   
    #endregion
  }
}
