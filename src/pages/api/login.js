import NextAuth from 'next-auth';
import { Providers } from 'next-auth';
import bcrypt from 'bcrypt';

export default NextAuth({
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        // Your custom logic to validate the user
        const { email, password } = credentials;

        // Replace with your actual user validation logic (e.g., connecting to a database)
        const validUser = {
          email: 'admin@example.com', // Static/manual user email
          hashedPassword: '$2b$10$2R/LaLvqdFXgGOCU4.nng.LDjTLMiBz.QqF5C0chVt5VVzq6Q1N5G', // Example hashed password for 'admin'
        };

        // Check if the provided email matches the valid user
        if (email !== validUser.email) {
          return Promise.resolve(null);
        }

        // Verify the password using bcrypt
        const isPasswordValid = await bcrypt.compare(password, validUser.hashedPassword);

        if (!isPasswordValid) {
          return Promise.resolve(null);
        }

        // The user object you return here will be added to the session
        return Promise.resolve({ email: validUser.email });
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
