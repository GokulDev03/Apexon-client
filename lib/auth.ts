import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      id: "email-otp",
      name: "Email OTP",
      credentials: {
        email: { label: "Email", type: "email" },
        otp: { label: "OTP", type: "text" },
      },
      async authorize(credentials) {
        const email = credentials?.email as string;
        const otp = credentials?.otp as string;

        if (!email) return null;

        // TEMPORARY: static OTP for testing
        if (otp !== "123456") return null;

        let user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
          user = await prisma.user.create({
            data: { email },
          });
        }

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
 callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // On sign-in, fetch fresh user data including role
        token.role = (user as any).role ?? "user";
      } else if (token.sub) {
        // On subsequent requests, refresh role from DB (in case it changed)
        const dbUser = await prisma.user.findUnique({
          where: { id: token.sub },
          select: { role: true },
        });
        token.role = dbUser?.role ?? "user";
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
        (session.user as any).role = token.role ?? "user";
      }
      return session;
    },
  },
});