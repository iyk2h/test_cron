import { NextResponse } from "next/server";

export function GET(request) {
  return NextResponse.json(
    {
      body: request.body,
      path: request.nextUrl.pathname,
      query: request.nextUrl.search,
      cookies: request.cookies.getAll(),
      v: Math.random(),
    },
    {
      status: 200,
    }
  );
}
