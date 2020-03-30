using System;
using System.Collections.Generic;
using System.Drawing;
using System.Text;
using System.Threading.Tasks;

namespace Firebase
{
  public interface IFirebaseService
  {
    Task<string> PutImage(Bitmap image, string fileName, string folderName = "all");
    Task<string> GetImage(string fileName, string folderName = "all");
    Task<bool> PutObject(object data, string path);
  }
}
