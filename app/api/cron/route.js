import { NextResponse } from "next/server";
import { sendMail } from "./mail";

export async function GET() {
  await sendMail();
  return NextResponse.json({ ok: true, test: "test", content: "contnet" });
}
