import { NextResponse } from "next/server";
import prisma from "@libs/prismadb";	
import { getCurrentUser } from "@/actions/getCurrentUser";
import { slugify } from "@/utils/slugify";
import { imageUploadService } from "@/services/imageUpload";
import { processFormDataWithFile } from "@/utils/fileProcessing";

export async function POST(request) {
	try {
		const currentUser = await getCurrentUser();
		if (!currentUser) {
			return NextResponse.json(
				{
					message: "Usuario no autorizado.",
				},
				{ status: 401 }
			);
		}

		// Procesamos el FormData para extraer la imagen y los datos del curso
		const { body, file: imageFile } = await processFormDataWithFile(request);
		
		console.log("Datos recibidos:", body);
		const {
			category,
			title,
			description,
			regular_price,
			before_price,
			lessons,
			duration,
			access_time,
			requirements,
			what_you_will_learn,
			who_is_this_course_for,
		} = body;

		// Verificamos campos obligatorios
		if (!title) {
			return NextResponse.json(
				{
					message: "El título del curso es obligatorio.",
				},
				{ status: 400 }
			);
		}

		if (!imageFile) {
			return NextResponse.json(
				{
					message: "La imagen del curso es obligatoria.",
				},
				{ status: 400 }
			);
		}

		// Generamos el slug a partir del título
		let slug = slugify(title);
		const slugExist = await prisma.course.findFirst({
			where: {
				slug: slug,
			},
		});

		if (slugExist) {
			slug = `${slug}-${Math.floor(
				Math.random() * (999 - 100 + 1) + 100
			)}`;
		}

		// Subimos la imagen a nuestro servicio de almacenamiento
		let imageUrl;
		
		try {
			const timestamp = new Date().getTime();
			const sanitizedTitle = title.toLowerCase().replace(/\s+/g, '-');
			const fileName = `course-${sanitizedTitle}-${timestamp}`;

			const uploadResult = await imageUploadService.uploadImage(imageFile, {
				path: 'upload_course/courses',
				fileName: fileName
			});

			if (!uploadResult.success) {
				throw new Error(uploadResult.error || 'Error al subir la imagen');
			}

			imageUrl = uploadResult.url;
		} catch (uploadError) {
			console.error('Error al subir la imagen:', uploadError);
			return NextResponse.json(
				{ message: 'Error al subir la imagen: ' + uploadError.message },
				{ status: 500 }
			);
		}

		// Crear el curso en la base de datos con la URL de la imagen
		const course = await prisma.course.create({
			data: {
				title,
				slug,
				categoryId: parseInt(category),
				description,
				regular_price: regular_price ? parseFloat(regular_price) : 0,
				before_price: before_price ? parseFloat(before_price) : 0,
				lessons:  '0',
				//duration:  '0',
				image: imageUrl, // Usamos la URL de la imagen subida
				access_time: access_time || "Lifetime",
				requirements,
				what_you_will_learn,
				who_is_this_course_for,
				userId: currentUser.id,
			},
		});

		return NextResponse.json(
			{
				message: "Curso enviado. Será aprobado próximamente.",
				course,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json(
			{
				message: "Ocurrió un error: " + error.message,
			},
			{ status: 500 }
		);
	}
}
