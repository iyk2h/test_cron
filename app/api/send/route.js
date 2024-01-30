"use server";

import { NextResponse } from "next/server";

export async function GET(request) {
  console.log("gggggget :::::: static ? ");
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
