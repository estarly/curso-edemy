import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import prisma from "../../../../../libs/prismadb";

export const authHandler = NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		CredentialsProvider({
			name: "credentials",
			credentials: {
				email: { label: "email", type: "text" },
				password: { label: "password", type: "password" },
			},
			async authorize(credentials) {
				console.log('credentials',credentials);
				if (!credentials?.email || !credentials?.password) {
					throw new Error("Invalid credentials xf");
				}

				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email,
					},
				});
				console.log("findUnique:user", user);
				if (!user || !user?.hashedPassword) {
					throw new Error("Invalid credentials");
				}
				console.log("user", user);
				const isCorrectPassword = await bcrypt.compare(
					credentials.password,
					user.hashedPassword
				);

				if (!isCorrectPassword) {
					throw new Error("Invalid credentials");
				}

				return user;
			},
		}),
	],
	// callbacks: {
	// 	async signIn(user, account, profile) {
	// 		return Promise.resolve("/");
	// 	},
	// },
	pages: {
		signIn: "/auth",
		error: "/auth",
	},
	debug: process.env.NODE_ENV === "development",
	session: {
		strategy: "jwt",
	},
	secret: process.env.NEXTAUTH_SECRET,
});

export { authHandler as GET, authHandler as POST };
