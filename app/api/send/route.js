import { NextResponse } from "next/server";

export async function GET() {
  const randomValue = Math.random();

  const response = NextResponse.json({ random: randomValue });

  // Ensure response is not cached
  response.headers.set("Cache-Control", "no-store, must-revalidate");
  response.headers.append("Pragma", "no-cache");
  response.headers.append("Expires", "0");

  return response;
}
