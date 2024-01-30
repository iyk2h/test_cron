// route.js

import { NextResponse } from "next/server";
import { sendEmail } from "./mail";

function generateRandomSuccess() {
  return Math.random();
}

export async function GET() {
  const v = generateRandomSuccess();

  // Use Promise.then to handle the asynchronous operation
  try {
    const info = await sendEmail(v);
    const response = NextResponse.json(
      {
        ok: true,
        success: v,
        result: info,
      },
      { status: 202 }
    );
    response.headers.set("Cache-Control", "no-store, must-revalidate");
    response.headers.append("Pragma", "no-cache");
    response.headers.append("Expires", "0");
    return response;
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({
      state: "NNNNOOOOOO",
      test: "test",
      content: error.message,
    });
  }
}
