using System;
using System.Collections.Generic;
using System.Text;

namespace EventBusRabbitMQ.Dtos
{
  public class MailSentDto : BaseQueueItemDto
  {
    public string message { get; set; }
  }
}
