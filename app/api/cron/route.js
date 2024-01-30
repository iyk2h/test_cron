// route.js

import { NextResponse, NextApiResponse } from "next";
import { sendEmail } from "./mail";

export async function GET() {
  const v = new Date().toISOString();

  // Use Promise.then to handle the asynchronous operation
  try {
    const info = await sendEmail(v);
    const response = NextApiResponse.status(200).json({
      success: v,
      result: info,
    });
    response.headers.set("Cache-Control", "no-store, must-revalidate");
    response.headers.append("Pragma", "no-cache");
    response.headers.append("Expires", "0");
    return response;
  } catch (error) {
    console.error("Error occurred:", error);
    return NextApiResponse.status(404).json({
      state: "NNNNOOOOOO",
      test: "test",
      content: error.message,
    });
  }
}
