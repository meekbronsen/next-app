import { NextRequest, NextResponse } from "next/server";

interface Props {
    params: { id: number };
}

export function GET(request: NextRequest, { params }: Props) {
  // Fetch data from the database
  
  // If user not found, return 404 error
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

    // Assume we have found the user
    return NextResponse.json({id: 1, name: 'Michael'})
}
