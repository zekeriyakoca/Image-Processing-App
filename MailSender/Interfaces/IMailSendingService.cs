using System.Drawing;
using System.Threading.Tasks;

namespace MailSender
{
  public interface IMailSendingWorkerService
  {
    Task<bool> SendMail(string mailToSend, string imageUrl);
  }
}