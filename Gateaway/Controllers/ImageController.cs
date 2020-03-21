using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Gateaway.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ImageController : ControllerBase
  {
    private readonly ILogger<ImageController> _logger;

    public ImageController(ILogger<ImageController> logger)
    {
      _logger = logger;
    }
    [HttpGet]
    [Route("test")]
    public IActionResult test() {
      return Ok();
    }

    [HttpPost, DisableRequestSizeLimit]
    [Route("process")]
    public IActionResult Process() {
      
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