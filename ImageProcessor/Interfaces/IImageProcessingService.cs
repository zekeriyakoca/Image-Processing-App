using System.Drawing;
using System.Threading.Tasks;

namespace ImageProcessor
{
  public interface IImageProcessService
  {
    Image GetImageFromBase64(string base64Image);
    Task<Bitmap> GetImageFromUrl(string url);
    Bitmap MergeTwoImages(Image logoOld, Image mainImage);
    Image ResizeImageKeepingAspectRatio(Image source, int width, int height);
    Bitmap CreateImageWithLogo(Image logoRaw, Image titleRaw, Image mainImage, int frameWidth = 1080, int frameHeight = 1080);
  }
}