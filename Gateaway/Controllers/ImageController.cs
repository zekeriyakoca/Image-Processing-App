using System;
using System.IO;
using System.Net.Http.Headers;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Cache.Services;
using EventBusRabbitMQ;
using EventBusRabbitMQ.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace Gateaway.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ImageController : ControllerBase
  {
    private readonly ILogger<ImageController> Logger;
    private readonly ICacheService CacheService;

    public ImageController(ILogger<ImageController> logger, ICacheService cacheService, IEventBus eventBus)
    {
      Logger = logger ?? throw new ArgumentNullException(nameof(logger));
      CacheService = cacheService ?? throw new ArgumentNullException(nameof(cacheService));
      EventBus = eventBus ?? throw new ArgumentNullException(nameof(eventBus));
    }

    public IEventBus EventBus { get; }

    [HttpPost, DisableRequestSizeLimit]
    [Route("process")]
    public async Task<IActionResult> Process()
    {
      try
      {
        var file = Request.Form.Files[0];

        if (file.Length > 0)
        {
          var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');

          using (var stream = new MemoryStream())
          {
            file.CopyTo(stream);
            stream.Position = 0;
            var byteArray = stream.ToArray();
            var imageBase64 = Convert.ToBase64String(byteArray);
            string hashValue = Convert.ToBase64String(MD5.Create().ComputeHash(byteArray));
            var testMailAddress = "zekeriyakocairi@gmail.com"; 

            ImageToProcessDto queueModel = new ImageToProcessDto() { Base64Image = imageBase64, ImageFileName = fileName, MailAddressToSend = testMailAddress, CacheKey = hashValue };
            var imageUrlPreviouslyProcessed = await this.CacheService.GetValue<string>(hashValue);

            if (string.IsNullOrWhiteSpace(imageUrlPreviouslyProcessed))
            {
              EventBus.Publish(queueModel, QueueNameEnum.ImageToCompress);
              return Ok(JsonConvert.SerializeObject(queueModel.CleanKey));
            }
            return Ok(JsonConvert.SerializeObject(imageUrlPreviouslyProcessed));
          }
        }
        else
        {
          return BadRequest();
        }
      }
      catch (Exception ex)
      {
        return StatusCode(500, $"Internal server error: {ex}");
      }
    }
  }
}