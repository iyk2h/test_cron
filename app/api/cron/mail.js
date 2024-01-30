// mail.js

import nodemailer from "nodemailer";

export async function sendEmail() {
  const { email_service, user, pass } = process.env;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: user,
      pass: pass,
    },
  });

  const mailData = {
    from: {
      name: `LagLess`,
      address: user,
    },
    to: "yee0230@gmail.com",
    subject: `form message`,
    text: `test message ${Math.random()}`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log("Email Sent : ", info);
        resolve(info);
      }
    });
  });

  // const sgMail = require("@sendgrid/mail");
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // const msg = {
  //   from: user, // Change to your recipient
  //   to: "yee0230@gmail.com", // Change to your verified sender
  //   subject: "Sending with SendGrid is Fun",
  //   text: "and easy to do anywhere, even with Node.js",
  //   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  // };

  // try {
  //   const result = await new Promise(async (resolve, reject) => {
  //     await sgMail.send(msg);
  //   });
  //   console.log("sent");
  //   return NextResponse.json({ ok: result });
  // } catch (error) {
  //   console.error("Error occurred:", error);
  //   return NextResponse.json({
  //     ok: "error",
  //   });
  // }
}
