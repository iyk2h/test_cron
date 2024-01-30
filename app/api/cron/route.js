// route.js

import { NextResponse } from "next/server";
import { sendEmail } from "./mail";

function generateRandomSuccess() {
  return Math.random();
}

async function sendEmailAndReturnResponse() {
  try {
    const v = generateRandomSuccess();
    const info = await sendEmail(v);

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

export function GET() {
  return sendEmailAndReturnResponse();
}
