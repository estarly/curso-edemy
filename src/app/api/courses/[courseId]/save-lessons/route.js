import { NextResponse } from "next/server";
import prisma from "../../../../../../libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";

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

		// Verificar que el curso exista y pertenezca al usuario
		const course = await prisma.course.findUnique({
			where: { id: parseInt(courseId) },
		});

		if (!course) {
			return NextResponse.json(
				{
					message: "Curso no encontrado.",
				},
				{ status: 404 }
			);
		}

		if (course.userId !== currentUser.id && currentUser.role !== "ADMIN") {
			return NextResponse.json(
				{
					message: "No tienes permiso para agregar lecciones a este curso.",
				},
				{ status: 403 }
			);
		}

		const body = await request.json();
		const { title, file_url, video_url, url, platform, meeting_id, password, host, duration, participants, assetTypeId, description } = body;

		// Validar datos según el tipo de asset
		if (!title) {
			return NextResponse.json(
				{
					message: "El título de la lección es obligatorio.",
				},
				{ status: 400 }
			);
		}

		if (!assetTypeId) {
			return NextResponse.json(
				{
					message: "El tipo de asset es obligatorio.",
				},
				{ status: 400 }
			);
		}

		// Configurar config_asset según el tipo
		let config_asset = null;

		switch (parseInt(assetTypeId)) {
			case 1: // Video
				if (!video_url && !file_url) {
					return NextResponse.json(
						{
							message: "La URL del video es obligatoria.",
						},
						{ status: 400 }
					);
				}
				config_asset = {
					val: video_url || file_url,
					type: "video"
				};
				break;

			case 2: // Audio
				if (!video_url && !file_url) {
					return NextResponse.json(
						{
							message: "La URL del audio es obligatoria.",
						},
						{ status: 400 }
					);
				}
				config_asset = {
					val: video_url || file_url,
					type: "audio"
				};
				break;

			case 3: // Documento
				if (!video_url && !file_url) {
					return NextResponse.json(
						{
							message: "La URL del documento es obligatoria.",
						},
						{ status: 400 }
					);
				}
				config_asset = {
					val: video_url || file_url,
					type: "document"
				};
				break;

			case 4: // Link Externo
				if (!url) {
					return NextResponse.json(
						{
							message: "La URL es obligatoria para links externos.",
						},
						{ status: 400 }
					);
				}
				// Validar formato URL
				try {
					new URL(url);
				} catch (e) {
					return NextResponse.json(
						{
							message: "La URL proporcionada no es válida.",
						},
						{ status: 400 }
					);
				}
				config_asset = {
					val: url,
					type: "link"
				};
				break;

			case 5: // YouTube
				if (!url) {
					return NextResponse.json(
						{
							message: "La URL de YouTube es obligatoria.",
						},
						{ status: 400 }
					);
				}
				// Validar que sea URL de YouTube
				if (!url.includes('youtube.com') && !url.includes('youtu.be')) {
					return NextResponse.json(
						{
							message: "La URL debe ser de YouTube.",
						},
						{ status: 400 }
					);
				}
				config_asset = {
					val: url,
					type: "youtube"
				};
				break;

			case 6: // Online
				if (!url) {
					return NextResponse.json(
						{
							message: "La URL es obligatoria para sesiones online.",
						},
						{ status: 400 }
					);
				}
				if (!platform) {
					return NextResponse.json(
						{
							message: "La plataforma es obligatoria para sesiones online.",
						},
						{ status: 400 }
					);
				}
				// Validar formato URL
				try {
					new URL(url);
				} catch (e) {
					return NextResponse.json(
						{
							message: "La URL proporcionada no es válida.",
						},
						{ status: 400 }
					);
				}
				config_asset = {
					val: url,
					type: "online",
					platform: platform,
					meeting_id: meeting_id || "",
					password: password || "",
					credits: {
						host: host || "",
						duration: duration || "",
						participants: participants || ""
					}
				};
				break;

			default:
				return NextResponse.json(
					{
						message: "Tipo de asset no válido.",
					},
					{ status: 400 }
				);
		}

		// Crear la lección en la base de datos
		const asset = await prisma.asset.create({
			data: {
				title,
				description: description || "",
				file_url: "", // Dejamos file_url vacío como solicitaste
				courseId: parseInt(courseId),
				assetTypeId: parseInt(assetTypeId),
				config_asset: config_asset
			},
		});

		// Incrementar el contador de lecciones del curso
		/*await prisma.course.update({
			where: { id: parseInt(courseId) },
			data: {
				lessons: {
					increment: 1
				}
			}
		});*/

		return NextResponse.json(
			{ 
				message: "Lección añadida correctamente.",
				asset
			},
			{ status: 201 }
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
