using Mail.Interfaces;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MailSender
{
  public class MailSendingWorkerService : IMailSendingWorkerService
  {
    public MailSendingWorkerService(IConfiguration configuration, IMailService mailService)
    {
      this.configuration = configuration;
      MailService = mailService;
    }

    public IConfiguration configuration { get; }
    public IMailService MailService { get; }

    public async Task<bool> SendMail(string mailToSend, string imageUrl)
    {
      var apiKey = configuration[$"Mail:SendGrid:ApiKey"];
      var fromMail = configuration[$"Mail:FromMail"];
      var fromName = configuration[$"Mail:FromName"];
      var subject = "Your image is ready to download";
      var toList = mailToSend;
      StringBuilder body = new StringBuilder();
      body.Append("You can download your image from the following link : ");
      body.Append(imageUrl);

      try
      {
        var isSuccess = await MailService.SendMessage(apiKey, fromMail, fromName, toList, subject, body.ToString(), "", "");
        return isSuccess;
      }
      catch 
      {
        return false;
      }

    }

  }
}
