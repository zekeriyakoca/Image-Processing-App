using Firebase.Interfaces;
using Firebase.Storage;
using Microsoft.Extensions.Configuration;
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;

namespace Firebase
{
  public class FirebaseService : IFirebaseService
  {
    public HttpClient client { get; }

    private string FireStorageBucketName { get; set; }

    public FirebaseService(HttpClient client, IConfiguration config)
    {
      this.client = client;
      client.BaseAddress = new Uri(config["Firebase:BaseUrl"].ToString());
      client.DefaultRequestHeaders.Add("Accept", "application/json");
      this.FireStorageBucketName = config["Firebase:BucketName"] != null ? config["Firebase:BucketName"].ToString() : "Default";
    }

    public async Task<string> GetImage(string fileName, string folderName = "all")
    {
      var task = new FirebaseStorage(FireStorageBucketName)
          .Child(folderName.ToLower())
          .Child(fileName.ToLower())
          .GetDownloadUrlAsync();
      var downloadUrl = await task;
      return downloadUrl;
    }

    public async Task<string> PutImage(Bitmap image, string fileName, string folderName = "all")
    {
      var stream = new MemoryStream();
      var imageFormat = ImageFormat.Jpeg;
      if (fileName.Contains(".png"))
        imageFormat = ImageFormat.Png;
      image.Save(stream, imageFormat);
      stream.Position = 0;
      // Construct FirebaseStorage, path to where you want to upload the file and Put it there
      var task = new FirebaseStorage(FireStorageBucketName)
          .Child(folderName.ToLower())
          .Child(fileName.ToLower())
          .PutAsync(stream);

      // Track progress of the upload
      task.Progress.ProgressChanged += (s, e) => Console.WriteLine($"Progress: {e.Percentage} %");

      // await the task to wait until upload completes and get the download url
      var downloadUrl = await task; 
      return downloadUrl;
    }


  }

}
