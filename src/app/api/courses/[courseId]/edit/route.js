import { NextResponse } from "next/server";
import prisma from "../../../../../../libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { slugify } from "@/utils/slugify";
import { imageUploadService } from "@/services/imageUpload";
import { processFormDataWithFile } from "@/utils/fileProcessing";

export async function POST(request, { params }) {
	const { courseId } = params;
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

		// Verificamos que el curso exista y pertenezca al usuario
		const existingCourse = await prisma.course.findUnique({
			where: { id: parseInt(courseId) },
		});

		if (!existingCourse) {
			return NextResponse.json(
				{
					message: "Curso no encontrado.",
				},
				{ status: 404 }
			);
		}

		if (existingCourse.userId !== currentUser.id && currentUser.role !== "ADMIN") {
			return NextResponse.json(
				{
					message: "No tienes permiso para editar este curso.",
				},
				{ status: 403 }
			);
		}

		// Procesamos el FormData para extraer la imagen y los datos del curso
		const { body, file: imageFile } = await processFormDataWithFile(request);
		
		console.log("Datos recibidos para edición:", body);
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

		// Generamos un nuevo slug solo si el título ha cambiado
		let slug = existingCourse.slug;
		if (title !== existingCourse.title) {
			slug = slugify(title);
			const slugExist = await prisma.course.findFirst({
				where: {
					slug: slug,
					id: { not: parseInt(courseId) } // Excluir el curso actual
				},
			});

			if (slugExist) {
				slug = `${slug}-${Math.floor(
					Math.random() * (999 - 100 + 1) + 100
				)}`;
			}
		}

		// Preparamos los datos para actualizar
		const updateData = {
			title,
			slug,
			categoryId: parseInt(category),
			description,
			regular_price: regular_price ? parseFloat(regular_price) : 0,
			before_price: before_price ? parseFloat(before_price) : 0,
			lessons: lessons || '0',
			duration: duration || '0',
			access_time: access_time || "Lifetime",
			requirements,
			what_you_will_learn,
			who_is_this_course_for,
		};

		// Si hay una nueva imagen, procesarla y actualizarla
		if (imageFile) {
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

				updateData.image = uploadResult.url;
			} catch (uploadError) {
				console.error('Error al subir la imagen:', uploadError);
				return NextResponse.json(
					{ message: 'Error al subir la imagen: ' + uploadError.message },
					{ status: 500 }
				);
			}
		}

		// Actualizar el curso en la base de datos
		const updatedCourse = await prisma.course.update({
			where: { id: parseInt(courseId) },
			data: updateData,
		});

		return NextResponse.json(
			{
				message: "Curso actualizado exitosamente.",
				course: updatedCourse,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json(
			{
				message: "Ocurrió un error al actualizar el curso: " + error.message,
			},
			{ status: 500 }
		);
	}
}
