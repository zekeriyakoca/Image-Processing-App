using Microsoft.Extensions.Configuration;
using SendGrid;
using SendGrid.Helpers.Mail;
using System.Threading.Tasks;

namespace Mail
{
  public class SendGridMailService : IMailService
  {
    public IConfiguration configuration { get; }

    public SendGridMailService(IConfiguration configuration)
    {
      this.configuration = configuration;
    }
    public async Task<bool> SendMessage(string apiKey, string fromMail, string fromName, string toList, string subject, string body, string replyTo = "", string replyToName = "")
    {
      return await Execute(apiKey, fromMail, fromName, toList, subject, body, replyTo, replyToName);
    }
    public async Task<bool> SendMessage(string fromMail, string fromName, string toList, string subject, string body, string replyTo = "", string replyToName = "")
    {
      return await Execute(configuration[$"Mail:SendGrid:apiKey"], fromMail, fromName, toList, subject, body, replyTo, replyToName);
    }

    private async Task<bool> Execute(string apiKey, string fromMail, string fromName, string toList, string subject, string body, string replyTo = "", string replyToName = "")
    {
      bool returnValue = false;
      try
      {
        var client = new SendGridClient(apiKey);
        var msg = new SendGridMessage()
        {
          From = new EmailAddress(fromMail, fromName),
          Subject = subject,
          PlainTextContent = body,
          HtmlContent = body,
          ReplyTo = new EmailAddress(replyTo, replyToName)
        };
        if (replyTo == "")
          msg.ReplyTo = new EmailAddress(fromMail, fromName);

        var receivers = toList.Split(',');
        foreach (var item in receivers)
        {
          msg.AddTo(new EmailAddress(item));
        }

        var response = await client.SendEmailAsync(msg);
        if (response.StatusCode == System.Net.HttpStatusCode.Accepted)
          returnValue = true;
      }
      catch
      {
        returnValue = false;
      }
      return returnValue;
    }
  }
}
