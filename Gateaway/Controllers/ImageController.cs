using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Cache.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Gateaway.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ImageController : ControllerBase
  {
    private readonly ILogger<ImageController> Logger;
    private readonly ICacheService CacheService;

    public ImageController(ILogger<ImageController> logger, ICacheService cacheService)
    {
      Logger = logger;
      CacheService = cacheService;
    }


    [HttpPost, DisableRequestSizeLimit]
    [Route("process")]
    public async Task<IActionResult> Process() {
      
      try
      {
        var file = Request.Form.Files[0];
        var folderName = Path.Combine("Resources", "Images");
        var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

        if (file.Length > 0)
        {
          var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
          var fullPath = Path.Combine(pathToSave, fileName);
          var dbPath = Path.Combine(folderName, fileName);

          using (var stream = new FileStream(fullPath, FileMode.Create))
          {
            file.CopyTo(stream);

            var md5 = MD5.Create();
            string hashValue = Convert.ToBase64String(md5.ComputeHash(stream));

            var value = await this.CacheService.GetValue<string>(hashValue);
            if (string.IsNullOrWhiteSpace(value))
               await this.CacheService.SetValue(hashValue, dbPath);

          }
          return Ok(new { dbPath });
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