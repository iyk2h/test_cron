// mail.js
"use server";
const { DateTime } = require("luxon");

import { createTransport } from "nodemailer";

export async function sendEmail(v) {
  const { NEXT_PUBLIC_EMAIL_SERVICE, NEXT_PUBLIC_USER, NEXT_PUBLIC_PASS } =
    process.env;

  const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: NEXT_PUBLIC_USER,
      pass: NEXT_PUBLIC_PASS,
    },
  });

  const curDate = DateTime.local();

  const mailData = {
    from: {
      name: `LagLess`,
      address: NEXT_PUBLIC_USER,
    },
    to: "yee0230@gmail.com",
    subject: `${v} form message`,
    text: `test message ${Math.random()} 
    ....
    cur date : ${curDate.toISO()}
    ...
    search start date : ${curDate
      .plus({ days: 1 })
      .toUTC(0)
      .startOf("day")
      .toISO()}
    ...
    search end date : ${curDate
      .plus({ days: 1 })
      .toUTC(0)
      .startOf("day")
      .endOf("day")
      .toISO()}
    `,
  };

  return await transporter
    .sendMail(mailData)
    .then((info) => {
      console.log("sent: ", info);
      return info; // 이 부분이 추가되어야 합니다.
    })
    .catch((error) => {
      console.error("Error occurred:", error);
      throw error; // 이 부분이 추가되어야 합니다.
    });

  // const sgMail = require("@sendgrid/mail");
  // sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
  // const msg = {
  //   from: NEXT_PUBLIC_USER, // Change to your recipient
  //   to: "yee0230@gmail.com", // Change to your verified sender
  //   subject: `${v} Sending with SendGrid is Fun`,
  //   text: "and easy to do anywhere, even with Node.js",
  //   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  // };

  // return sgMail
  //   .send(msg)
  //   .then((info) => {
  //     console.log("sent: ", info);
  //     return info; // 이 부분이 추가되어야 합니다.
  //   })
  //   .catch((error) => {
  //     console.error("Error occurred:", error);
  //     throw error; // 이 부분이 추가되어야 합니다.
  //   });
}
