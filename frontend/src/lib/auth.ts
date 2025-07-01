import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Resend from "next-auth/providers/resend"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
 
export const { handlers, signIn, signOut, auth } = NextAuth({

  adapter: PrismaAdapter(prisma),  

  providers: [ Google, GitHub, Resend({
    from: "Promptverse <no-reply@promptverse.shreehari.dev>",
  }) ],

  pages: {
    signIn: "/login",
  },

  session: {
    strategy: "jwt",
  },
})