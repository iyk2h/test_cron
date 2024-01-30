// route.js

import { NextResponse } from "next/server";
import { sendEmail } from "./mail";

function generateRandomSuccess() {
  return Math.random();
}

export function GET() {
  const v = generateRandomSuccess();

  // Use Promise.then to handle the asynchronous operation
  return sendEmail(v)
    .then((info) => {
      return NextResponse.json(
        {
          ok: true,
          success: v,
          result: info,
        },
        { status: 202 }
      );
    })
    .catch((error) => {
      console.error("Error occurred:", error);

      // Return an error response
      return NextResponse.json({
        state: "NNNNOOOOOO",
        test: "test",
        content: error.message,
      });
    });
}
