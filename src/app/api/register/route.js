import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@libs/prismadb";	

export async function POST(request) {
	try {
		const body = await request.json();
		const { name, email, password,type_user } = body;

		if (name == "") {
			return NextResponse.json(
				{
					message: "Nombre es requerido!",
				},
				{ status: 404 }
			);
		} else if (email == "") {
			return NextResponse.json(
				{
					message: "Correo electrónico es requerido!",
				},
				{ status: 404 }
			);
		} else if (password == "") {
			return NextResponse.json(
				{
					message: "Contraseña es requerida!",
				},
				{ status: 404 }
			);
		}

		const existingUser = await prisma.user.findUnique({
			where: { email: email },
		});

		if (existingUser && existingUser.length > 0) {
			return NextResponse.json({ message: "Correo electrónico ya existe!" });
		}

		const hashedPassword = await bcrypt.hash(password, 12);
		console.log(type_user,'type_user');
		const user = await prisma.user.create({
			data: {
				name,
				email,
				hashedPassword,
				role: type_user,
				status: 1,
			},
		});

		return NextResponse.json(user);
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json(
			{
				message: "Ocurrió un error.",
			},
			{ status: 500 }
		);
	}
}
