import React from "react";
import { NextRequest, NextResponse } from "next/server";

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

  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });

  return NextResponse.json({id: 1, name: body.name}, {status: 201});
}
