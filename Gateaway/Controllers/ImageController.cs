using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Cache.Interfaces;
using EventBusRabbitMQ.Dtos;
using EventBusRabbitMQ.Interfaces;
using Microsoft.AspNetCore.Http;
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
      Logger = logger;
      CacheService = cacheService;
      EventBus = eventBus;
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
            var value = await this.CacheService.GetValue<string>(hashValue);

            if (string.IsNullOrWhiteSpace(value))
            {
              EventBus.Publish(queueModel, QueueNameEnum.ImageToCompress);
              //Cache set will be done in MailSender Worker
              //await this.CacheService.SetValue(hashValue, dbPath);
              return Ok(JsonConvert.SerializeObject(queueModel.CleanKey));
            }
            return Ok(JsonConvert.SerializeObject(value));
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