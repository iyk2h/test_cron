"use server";

import { NextResponse } from "next/server";
// const nodemailer = require("nodemailer");

export async function GET(request) {
  // const { email_service, user, pass } = process.env;

  // const transporter = nodemailer.createTransport({
  //   host: "smtp.sendgrid.net",
  //   port: 587,
  //   secure: false,
  //   auth: {
  //     user: "apikey",
  //     pass: pass,
  //   },
  // });

  // try {
  //   // verify connection configuration
  //   await new Promise((resolve, reject) => {
  //     transporter.verify(function (error, success) {
  //       if (error) {
  //         console.log(error);
  //         reject(error);
  //       } else {
  //         console.log("Server is ready to take our messages");
  //         resolve(success);
  //       }
  //     });
  //   });

  //   const mailData = {
  //     from: {
  //       name: `LagLess`,
  //       address: user,
  //     },
  //     to: "yee0230@gmail.com",
  //     subject: `form message`,
  //     text: `test message ${Math.random()}`,
  //   };

  //   const info = await new Promise((resolve, reject) => {
  //     // send mail
  //     transporter.sendMail(mailData, (err, info) => {
  //       if (err) {
  //         console.error(err);
  //         reject(err);
  //       } else {
  //         console.log("Email Sent : ", info);
  //         resolve(info);
  //       }
  //     });
  //   });

  //   const response = NextResponse.json({
  //     ok: true,
  //     success: Math.random(),
  //     result: info,
  //   });

  //   // Ensure response is not cached
  //   response.headers.set("Cache-Control", "no-store, must-revalidate");
  //   response.headers.append("Pragma", "no-cache");
  //   response.headers.append("Expires", "0");

  //   return response;
  // } catch (error) {
  //   console.error("Error occurred:", error);

  //   const response = NextResponse.json({
  //     state: "NNNNOOOOOO",
  //     test: "test",
  //     content: error.message,
  //   });

  //   // Ensure response is not cached
  //   response.headers.set("Cache-Control", "no-store, must-revalidate");

  //   return response;
  // }
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const { email_service, user, pass } = process.env;
  const msg = {
    from: user, // Change to your recipient
    to: "yee0230@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  let mmmm = "";
  await sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
      mmmm = "sent";
    })
    .catch((error) => {
      console.error(error);
      mmmm = "errror ";
      return NextResponse.json({ ok: "error" });
    });
  return NextResponse.json({ ok: mmmm });
}
