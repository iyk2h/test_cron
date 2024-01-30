// route.js

"use server";

import { NextResponse } from "next/server";
import { sendEmail } from "./mail";

export async function GET() {
  const v = new Date().toISOString();

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
