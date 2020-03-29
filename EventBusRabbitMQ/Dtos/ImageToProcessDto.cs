using System;
using System.Collections.Generic;
using System.Text;

namespace EventBusRabbitMQ.Dtos
{
  public class ImageToProcessDto : BaseQueueItemDto
  {
    public string Base64Image { get; set; }
    public string CacheKey { get; set; }
    public string ImageFileName { get; set; }
    public string MailAddressToSend { get; set; }
    public string CleanKey
    {
      get
      {
        return Id.ToString().Replace("-", "");
      }
    }
  }
}
