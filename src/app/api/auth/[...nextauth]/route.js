import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import prisma from "@libs/prismadb";
import { normalizeEmail } from "@libs/normalizeEmail";

export const authHandler = NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		//GithubProvider({
		//	clientId: process.env.GITHUB_ID,
		//	clientSecret: process.env.GITHUB_SECRET,
		//}),
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
				//console.log('credentials', credentials);
				if (!credentials?.email || !credentials?.password) {
					throw new Error("Credenciales incorrectas");
				}

				const email = normalizeEmail(credentials.email);

				const user = await prisma.user.findUnique({
					where: {
						email,
					},
				});
				//console.log("findUnique:user", user);
				if (!user || !user?.hashedPassword) {
					throw new Error("Credenciales incorrectas");
				}
				//console.log("user", user);
				const isCorrectPassword = await bcrypt.compare(
					credentials.password,
					user.hashedPassword
				);

				if (!isCorrectPassword) {
					throw new Error("Contraseña incorrectas");
				}

				const normalizedEmail = normalizeEmail(user.email);
				if (user.email !== normalizedEmail) {
					await prisma.user.update({
						where: { id: user.id },
						data: { email: normalizedEmail },
					});
					user.email = normalizedEmail;
				}

				return user;
			},
		}),
	],
	callbacks: {
		async redirect({ url, baseUrl }) {
			if (url.startsWith("/")) {
				return `${baseUrl}${url}`;
			}

			if (url.startsWith(baseUrl)) {
				return url;
			}

			return baseUrl;
		},
	},
	pages: {
		signIn: "/auth",
		error: "/auth",
	},
	debug: process.env.NODE_ENV === "development",
	events: {
		async createUser({ user }) {
			const normalizedEmail = normalizeEmail(user.email);
			if (normalizedEmail && normalizedEmail !== user.email) {
				await prisma.user.update({
					where: { id: user.id },
					data: { email: normalizedEmail },
				});
			}
		},
	},
	session: {
		strategy: "jwt",
	},
	secret: process.env.NEXTAUTH_SECRET,
});

export { authHandler as GET, authHandler as POST };
