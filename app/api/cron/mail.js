const nodemailer = require("nodemailer");

export async function sendMail() {
  const { email_service, user, pass } = process.env;

  const transporter = nodemailer.createTransport({
    // host: "test-cron-eta.vercel.app",
    port: 465,
    service: email_service,
    auth: {
      user: user,
      pass: pass,
    },
    secure: true,
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const mailData = {
    from: {
      name: `LagLess`,
      address: user,
    },
    to: "yee0230@gmail.com",
    subject: `form message`,
    text: "test message",
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
}
