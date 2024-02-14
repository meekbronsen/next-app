import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"; // add a provider

// create a handler function
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ]
});  // call next auth and give it a configuration object

export { handler as GET, handler as POST  } // exporting the handler function from this module