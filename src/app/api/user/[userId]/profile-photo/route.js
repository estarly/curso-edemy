import { NextResponse } from "next/server";
import prisma from "@libs/prismadb";	
import { getCurrentUser } from "@/actions/getCurrentUser";
import { imageUploadService } from "@/services/imageUpload";
import { processFormDataWithFile } from "@/utils/fileProcessing";

export async function POST(request, { params }) {
	const { userId } = params;
	
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

		const { body, file: imageFile } = await processFormDataWithFile(request);

		if (!imageFile) {
			return NextResponse.json(
				{
					message: "La imagen es requerida!",
				},
				{ status: 404 }
			);
		}

		// Obtenemos la URL de la imagen anterior
		const user = await prisma.user.findUnique({
			where: { id: parseInt(userId) },
			select: { image: true }
		});

		const oldImageUrl = user?.image;
		let imageUrl = null;

		try {
			const timestamp = new Date().getTime();
			const fileName = `profile-${userId}-${timestamp}`;

			const uploadResult = await imageUploadService.uploadImage(imageFile, {
				path: 'upload_course/profile',
				fileName: fileName
			});

			if (!uploadResult.success) {
				throw new Error(uploadResult.error || 'Error al subir la imagen');
			}

			imageUrl = uploadResult.url;
			
			// Actualizamos el perfil del usuario con la nueva imagen
			await prisma.user.update({
				where: { id: parseInt(userId) },
				data: {
					image: imageUrl,
				},
			});

			// Si había una imagen anterior, la eliminamos de S3
			if (oldImageUrl) {
				try {
					
						// Depurar el resultado de la eliminación
						const deleteResult = await imageUploadService.deleteImage(oldImageUrl);
						console.log('Resultado de eliminación:', deleteResult);
						
				} catch (deleteError) {
					// No hacemos fallar la actualización si hay error al eliminar
					console.error(oldImageUrl,'Error al eliminar imagen anterior:', deleteError);
				}
			}

			return NextResponse.json(
				{
					message: "Imagen de perfil subida correctamente.",
					imageUrl
				},
				{ status: 200 }
			);
		} catch (uploadError) {
			console.error('Error al subir la imagen:', uploadError);
			return NextResponse.json(
				{ message: 'Error al subir la imagen: ' + uploadError.message },
				{ status: 500 }
			);
		}
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json(
			{
				message: "Ocurrió un error al procesar la solicitud.",
			},
			{ status: 500 }
		);
	}
}

// Función para extraer la clave S3/Spaces de la URL
function extractS3KeyFromUrl(url) {
	try {
		if (!url) return null;
		
		// Para URLs de DigitalOcean Spaces: space-share.nyc3.digitaloceanspaces.com/upload_course/profile/filename
		if (url.includes('digitaloceanspaces.com')) {
			const urlWithoutProtocol = url.replace(/^https?:\/\//, '');
			const parts = urlWithoutProtocol.split('/');
			return parts.slice(1).join('/'); // Retorna: upload_course/profile/filename
		}
		
		// Mantener el código existente para URLs de AWS S3...
		const urlWithoutProtocol = url.replace(/^https?:\/\//, '');
		
		// Si la URL contiene amazonaws.com, extraemos la parte después del nombre del bucket
		if (urlWithoutProtocol.includes('amazonaws.com')) {
			// Formato: bucket-name.s3.region.amazonaws.com/path/to/file.jpg
			if (urlWithoutProtocol.includes('.s3.')) {
				const parts = urlWithoutProtocol.split('/');
				return parts.slice(1).join('/'); // path/to/file.jpg
			}
			
			// Formato: s3.region.amazonaws.com/bucket-name/path/to/file.jpg
			else if (urlWithoutProtocol.startsWith('s3.')) {
				const parts = urlWithoutProtocol.split('/');
				return parts.slice(2).join('/'); // path/to/file.jpg (excluyendo bucket-name)
			}
		}
		
		// Si es una URL personalizada o para patrones específicos
		if (url.includes('upload_course/profile')) {
			const match = url.match(/upload_course\/profile\/[^?#]+/);
			return match ? match[0] : null;
		}
		
		return null;
	} catch (e) {
		console.error('Error al extraer la clave S3/Spaces:', e);
		return null;
	}
}
