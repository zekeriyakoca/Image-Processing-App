using System;
using System.Collections.Generic;
using System.Text;

namespace EventBusRabbitMQ.Dtos
{
  public class ImageReadyToMailDto : BaseQueueItemDto
  {
    public string ImageUrl { get; set; }
    public string MailAddressToSend { get; set; }
  }
}
