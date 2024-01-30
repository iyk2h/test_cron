import { NextResponse } from "next/server";

export async function GET() {
  const randomValue = Math.random();

  const response = NextResponse.json({ random: randomValue });

  // Append a unique query parameter to the URL to force cache miss
  const currentDate = new Date();
  const cacheBuster = currentDate.getTime();
  const updatedUrl = `${response.url}?cache=${cacheBuster}`;

  // Set the updated URL
  response.headers.set("Cache-Control", "no-store, must-revalidate");
  response.headers.append("Pragma", "no-cache");
  response.headers.append("Expires", "0");
  response.headers.set("Location", updatedUrl);

  return response;
}
