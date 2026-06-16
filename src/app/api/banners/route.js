import { NextResponse } from "next/server";
import prisma from "@libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { bannerUploadService } from "@/services/bannerUpload";
import { processFormDataWithFile } from "@/utils/fileProcessing";
import {
	parseBannerDates,
	validateBannerImageDimensions,
	isVideoUrl,
} from "@/utils/bannerUtils";

export async function POST(request) {
	try {
		const currentUser = await getCurrentUser();
		if (!currentUser) {
			return NextResponse.json({ message: "Usuario no autorizado." }, { status: 401 });
		}

		if (currentUser.role !== "ADMIN") {
			return NextResponse.json(
				{ message: "Solo los administradores pueden crear banners." },
				{ status: 403 }
			);
		}

		const { body, file: mediaFile } = await processFormDataWithFile(request);

		const { url, status, order, date_start, date_end, imageUrl } = body;

		let imageValue = imageUrl || body.image || null;

		if (mediaFile) {
			if (mediaFile.mimetype.startsWith("image/")) {
				const validation = validateBannerImageDimensions(mediaFile.buffer);
				if (!validation.valid) {
					return NextResponse.json({ message: validation.message }, { status: 400 });
				}
			}

			try {
				const timestamp = new Date().getTime();
				const extension = mediaFile.originalname.split(".").pop() || "png";
				const fileName = `banner-${timestamp}.${extension}`;

				const uploadResult = await bannerUploadService.uploadBannerMedia(mediaFile, {
					fileName,
				});

				if (!uploadResult.success) {
					throw new Error(uploadResult.error || "Error al subir el archivo");
				}

				imageValue = uploadResult.url;
			} catch (uploadError) {
				console.error("Error al subir el banner:", uploadError);
				return NextResponse.json(
					{ message: "Error al subir el archivo: " + uploadError.message },
					{ status: 500 }
				);
			}
		}

		if (!imageValue) {
			return NextResponse.json(
				{ message: "La imagen o video del banner es obligatorio." },
				{ status: 400 }
			);
		}

		if (!isVideoUrl(imageValue) && imageValue.startsWith("http")) {
			// URLs externas se aceptan sin validar dimensiones en servidor
		}

		let parsedDates;
		try {
			parsedDates = parseBannerDates(
				date_start === "" ? null : date_start,
				date_end === "" ? null : date_end
			);
		} catch (dateError) {
			return NextResponse.json({ message: dateError.message }, { status: 400 });
		}

		const banner = await prisma.banner.create({
			data: {
				url: url || null,
				image: imageValue,
				status: status === undefined ? 1 : parseInt(status, 10),
				order: order === undefined ? 0 : parseInt(order, 10),
				date_start: parsedDates.date_start,
				date_end: parsedDates.date_end,
			},
		});

		return NextResponse.json(
			{ message: "Banner creado exitosamente.", banner },
			{ status: 201 }
		);
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json(
			{ message: "Ocurrió un error al crear el banner: " + error.message },
			{ status: 500 }
		);
	}
}
