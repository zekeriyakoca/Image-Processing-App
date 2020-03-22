using System;
using System.Collections.Generic;
using System.Text;

namespace EventBusRabbitMQ.Dtos
{
  public class BaseQueueItem
  {
    public BaseQueueItem()
    {
      Id = new Guid();
      CreationDate = DateTime.UtcNow;
    }
    public BaseQueueItem(Guid id, DateTime createDate)
    {
      Id = id;
      CreationDate = createDate;
    }
    public Guid Id { get; set; }
    public DateTime CreationDate { get; set; }
  }
}
