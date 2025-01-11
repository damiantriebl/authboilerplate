import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
// Your own logic for dealing with plaintext password strings; be careful!
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const user = { id: "1", name: "Damian Triebl", email: "damiantriebl@gmail.com" };
        const pass = "1234"
        if (credentials.email !== user.email || credentials.password !== pass) {
          // If you return null or false then the credentials will be rejected
          throw new Error("Invalid credentials.")
          // You can also Reject this callback with an Error or with a URL:
          // throw new Error('error message') // Redirect to error page
          // throw '/path/to/redirect'        // Redirect to a URL
        }

        console.log("User logged in",)

 
        // return user object with their profile data
        return Promise.resolve(user)
      },
    }),
  ],
})