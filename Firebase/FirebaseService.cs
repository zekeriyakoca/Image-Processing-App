using Firebase;
using Firebase.Storage;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
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
      this.client = client ?? throw new ArgumentNullException(nameof(client));
      client.BaseAddress = new Uri(config["Firebase:BaseUrl"].ToString());
      client.DefaultRequestHeaders.Add("Accept", "application/json");
      this.FireStorageBucketName = config["Firebase:BucketName"] != null ? config["Firebase:BucketName"].ToString() : "Default";
    }
    #region Firestorage Operations

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
      using (var stream = new MemoryStream())
      {
        var imageFormat = ImageFormat.Jpeg;
        if (fileName.EndsWith(".png"))
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
    #endregion

    #region Firebase Realtime Database Operations

    public async Task<bool> PutObject(object data, string path)
    {
      try
      {
        var result = await client.PutAsync(path, new StringContent(JsonConvert.SerializeObject(data)));
        result.EnsureSuccessStatusCode();
        return true;
      }
      catch
      {
        return false;
      }

    }
    //TODO : Implement other CRUD and Search Operations for Firebase RealtimeDatabase

    #endregion


  }

}
