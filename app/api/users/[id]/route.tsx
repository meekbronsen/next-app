import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";


interface Props {
  params: { id: number };
}

export function GET(request: NextRequest, { params }: Props) {
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: "Michael" });
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();

  //schema.parse -- this one throws an error incase of invalid body
  // but safeParse doesn't yell, it returns an object with the errors.
  const validation = schema.safeParse(body)


  if (!validation.success)
    return NextResponse.json({ error: validation.error.errors }, { status: 400 });

    
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id, name: body.name });
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({});
}
