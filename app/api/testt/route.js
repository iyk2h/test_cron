"use server";

import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function GET(request) {
  const { email_service, user, pass } = process.env;

  const transporter = nodemailer.createTransport({
    pool: true,
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: email_service,
    auth: {
      user: user,
      pass: pass,
    },
  });

  try {
    // verify connection configuration
    await new Promise((resolve, reject) => {
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

    const info = await new Promise((resolve, reject) => {
      // send mail
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

    const response = NextResponse.json({
      ok: true,
      success: Math.random(),
      result: info,
    });

    // Ensure response is not cached
    response.headers.set("Cache-Control", "no-store, must-revalidate");
    response.headers.append("Pragma", "no-cache");
    response.headers.append("Expires", "0");

    return response;
  } catch (error) {
    console.error("Error occurred:", error);

    const response = NextResponse.json({
      state: "NNNNOOOOOO",
      test: "test",
      content: error.message,
    });

    // Ensure response is not cached
    response.headers.set("Cache-Control", "no-store, must-revalidate");

    return response;
  }
}
