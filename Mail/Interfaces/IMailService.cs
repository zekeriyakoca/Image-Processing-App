using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Mail
{
  public interface IMailService
  {
    Task<bool> SendMessage(string apiKey, string fromMail, string fromName, string toList, string subject, string body, string replyTo = "", string replyToName = "");

    Task<bool> SendMessage(string fromMail, string fromName, string toList, string subject, string body, string replyTo = "", string replyToName = "");

  }
}
