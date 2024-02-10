import React from "react";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

// This will cache the response. next time we hit this endpoint we are gonna see cached data.
// export function GET() {

// To prevent caching we add the request object
export function GET(request: NextRequest) {
  //Next js is gonna cache this response
  return NextResponse.json([
    { id: 1, name: "Michael" },
    { id: 2, name: "Mosh" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body)

  if (!validation.success)
    return NextResponse.json({ error: validation.error.errors }, { status: 400 });

  return NextResponse.json({id: 1, name: body.name}, {status: 201});
}
