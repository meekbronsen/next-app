import NextAuth from "next-auth/next";

// create a handler function
const handler = NextAuth({});  // call next auth and give it a configuration object

export { handler as GET, handler as POST  } // exporting the handler function from this module