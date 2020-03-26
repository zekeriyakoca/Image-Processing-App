using System;
using System.Collections.Generic;
using System.Text;

namespace EventBusRabbitMQ.Dtos
{
  public class QueueNameEnum
  {
    private QueueNameEnum(string @value)
    {
      this.Value = value;
    }
    public string Value { get; set; }

    public static QueueNameEnum ImageToCompress { get { return new QueueNameEnum(nameof(ImageToCompress)); } }
    public static QueueNameEnum ImageReadyToMail { get { return new QueueNameEnum(nameof(ImageReadyToMail)); } }
    public static QueueNameEnum MailSent { get { return new QueueNameEnum(nameof(MailSent)); } }
  }
}
