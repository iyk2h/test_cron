// route.js

import { NextResponse } from "next/server";
import { sendEmail } from "./mail";

export async function GET(request) {
  try {
    // The email sending logic is now in the sendEmail function
    const info = await sendEmail();

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
    response.headers.append("Pragma", "no-cache");
    response.headers.append("Expires", "0");

    return response;
  }
}
