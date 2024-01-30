// route.js

import { NextResponse } from "next/server";
import { sendEmail } from "./mail";

function generateRandomSuccess() {
  return Math.random();
}

export function GET() {
  try {
    const v = generateRandomSuccess();
    // The email sending logic is now in the sendEmail function
    const info = sendEmail(v)
      .then((info) => {
        // Do something with the result
        console.log(info);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });

    const response = NextResponse.json(
      {
        ok: true,
        success: v,
        result: info,
      },
      { status: 202 },
      { message: info }
    );

    return response;
  } catch (error) {
    console.error("Error occurred:", error);

    const response = NextResponse.json({
      state: "NNNNOOOOOO",
      test: "test",
      content: error.message,
    });

    return response;
  }
}
