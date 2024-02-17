import { NextRequest, NextResponse } from "next/server";

// We can use this middleware to cock block users
export function middleware(request: NextRequest){

// With this the user will be redirected back to request.url/new-page when he tries to access data without session.
    return NextResponse.redirect(new URL('/new-page', request.url));

}

// If we want to cock block certain paths.
// This config object is one of the things Next js is structured to out look for.
export const config = {
// This option can be a path
    // matcher: '' 
// or an array of paths
    // matcher:['/users']        
    // matcher: ['/users/:id*']  // with the wildcard * means zero or more parameters
    matcher: ['/users/:id+']  // If you use + means one or more
    // matcher: ['/users/:id?']     // ?: zero or one 
}                            