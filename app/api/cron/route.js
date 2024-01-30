// route.js

import { NextResponse } from "next/server";
import { sendEmail } from "./mail";

function generateRandomSuccess() {
  return Math.random();
}

export async function GET() {
  try {
    const v = generateRandomSuccess();
    const info = await sendEmail(v);

    return NextResponse.json(
      {
        ok: true,
        success: v,
        result: info,
      },
      { status: 202 }
    );
  } catch (error) {
    console.error("Error occurred:", error);

    // Return an error response
    return NextResponse.json({
      state: "NNNNOOOOOO",
      test: "test",
      content: error.message,
    });
  }
}
