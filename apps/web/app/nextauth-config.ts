/* eslint-disable turbo/no-undeclared-env-vars */
import { getServerSession, NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { cache } from "react";
export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
} satisfies NextAuthOptions;

export const auth = cache(() => getServerSession(authOptions));
