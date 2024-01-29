import { NextResponse } from "next/server";
import { sendMail } from "./mail";
const nodemailer = require("nodemailer");

export async function GET() {
  // await sendMail();

  const { email_service, user, pass } = process.env;

  const transporter = nodemailer.createTransport({
    // host: "test-cron-eta.vercel.app",
    host: "smtp.gmail.com",
    port: 465,
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

  const success = await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData).then((info, err) => {
      if (info.response.includes("250")) {
        resolve(true);
      }
      reject(err);
    });
  });

  if (!success) {
    return NextResponse.json({
      state: "NNNNOOOOOO",
      test: "test",
      content: "contnet",
    });
  } else {
    const response = new NextResponse();
    response.setHeader("Cache-Control", "no-cache");
    response.json({ ok: true, test: "test", content: "content" });
    return response;
  }
}
