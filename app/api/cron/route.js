import { NextResponse } from "next/server";
import { sendMail } from "./mail";
const nodemailer = require("nodemailer");

export async function GET(request) {
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

    // send mail
    const info = await transporter.sendMail(mailData);

    console.log("Email Sent : ", info);

    const response = NextResponse.json({
      ok: true,
      success: Math.random(),
      result: info,
    });

    // Add cache-control headers to prevent caching
    response.headers.set("Cache-Control", "no-store, must-revalidate");

    return response;
  } catch (error) {
    console.error("Error occurred:", error);

    const response = NextResponse.json({
      state: "NNNNOOOOOO",
      test: "test",
      content: error.message,
    });

    // Add cache-control headers to prevent caching
    response.headers.set("Cache-Control", "no-store, must-revalidate");

    return response;
  }
}
