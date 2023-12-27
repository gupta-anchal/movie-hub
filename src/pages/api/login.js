import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import bcrypt from 'bcrypt';

export default NextAuth({
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        // Your custom logic to validate the user
        const { email, password } = credentials;

        // Replace with your actual user validation logic (e.g., connecting to a database)
        const isValidUser = true; // Replace with your validation logic

        if (!isValidUser) {
          return Promise.resolve(null);
        }

        // Verify the password using bcrypt (you should hash passwords during registration)
        const isPasswordValid = await bcrypt.compare(password, hashedPassword);

        if (!isPasswordValid) {
          return Promise.resolve(null);
        }

        // The user object you return here will be added to the session
        return Promise.resolve({ email });
      },
    }),
  ],
  callbacks: {
    async jwt(token, user) {
      // If a user is found, add it to the token
      if (user) {
        token.id = user.email; // You can customize the token payload
      }
      return token;
    },
    async session(session, token) {
      // Add user data to the session
      session.user = token;
      return session;
    },
  },
});
