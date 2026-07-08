import { NextResponse } from "next/server";
import prisma from "@libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { bannerUploadService } from "@/services/bannerUpload";
import { processFormDataWithFile } from "@/utils/fileProcessing";
import { parseBannerDates } from "@/utils/bannerUtils";

export async function PUT(request, { params }) {
	try {
		const currentUser = await getCurrentUser();
		if (!currentUser) {
			return NextResponse.json({ message: "Usuario no autorizado." }, { status: 401 });
		}

		if (currentUser.role !== "ADMIN") {
			return NextResponse.json(
				{ message: "Solo los administradores pueden editar banners." },
				{ status: 403 }
			);
		}

		const { bannerId } = params;

		if (!bannerId || isNaN(parseInt(bannerId, 10))) {
			return NextResponse.json({ message: "ID de banner inválido." }, { status: 400 });
		}

		const { body, file: mediaFile } = await processFormDataWithFile(request);

		const { url, image, status, order, date_start, date_end, imageUrl } = body;

		const bannerExists = await prisma.banner.findUnique({
			where: { id: parseInt(bannerId, 10) },
		});

		if (!bannerExists) {
			return NextResponse.json({ message: "Banner no encontrado." }, { status: 404 });
		}

		let imageValue = imageUrl || image || bannerExists.image;

		if (mediaFile) {
			try {
				const timestamp = new Date().getTime();
				const extension = mediaFile.originalname.split(".").pop() || "png";
				const fileName = `banner-${bannerId}-${timestamp}.${extension}`;

				const uploadResult = await bannerUploadService.uploadBannerMedia(mediaFile, {
					fileName,
				});

				if (!uploadResult.success) {
					throw new Error(uploadResult.error || "Error al subir el archivo");
				}

				imageValue = uploadResult.url;

				if (bannerExists.image && bannerExists.image.includes("digitaloceanspaces.com")) {
					try {
						await bannerUploadService.deleteBannerMedia(bannerExists.image);
					} catch (deleteError) {
						console.error("Error al eliminar el archivo anterior:", deleteError);
					}
				}
			} catch (uploadError) {
				console.error("Error al subir el banner:", uploadError);
				return NextResponse.json(
					{ message: "Error al subir el archivo: " + uploadError.message },
					{ status: 500 }
				);
			}
		}

		let parsedDates;
		try {
			const startValue =
				date_start !== undefined
					? date_start === ""
						? null
						: date_start
					: bannerExists.date_start;
			const endValue =
				date_end !== undefined
					? date_end === ""
						? null
						: date_end
					: bannerExists.date_end;

			parsedDates = parseBannerDates(startValue, endValue);
		} catch (dateError) {
			return NextResponse.json({ message: dateError.message }, { status: 400 });
		}

		const updatedBanner = await prisma.banner.update({
			where: { id: parseInt(bannerId, 10) },
			data: {
				url: url === undefined ? bannerExists.url : url || null,
				image: imageValue,
				status: status === undefined ? bannerExists.status : parseInt(status, 10),
				order: order === undefined ? bannerExists.order : parseInt(order, 10),
				date_start: parsedDates.date_start,
				date_end: parsedDates.date_end,
			},
		});

		return NextResponse.json(
			{ message: "Banner actualizado exitosamente.", banner: updatedBanner },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json(
			{ message: "Ocurrió un error al actualizar el banner: " + error.message },
			{ status: 500 }
		);
	}
}

export async function DELETE(request, { params }) {
	try {
		const currentUser = await getCurrentUser();
		if (!currentUser) {
			return NextResponse.json({ message: "Usuario no autorizado." }, { status: 401 });
		}

		if (currentUser.role !== "ADMIN") {
			return NextResponse.json(
				{ message: "Solo los administradores pueden eliminar banners." },
				{ status: 403 }
			);
		}

		const { bannerId } = params;

		if (!bannerId || isNaN(parseInt(bannerId, 10))) {
			return NextResponse.json({ message: "ID de banner inválido." }, { status: 400 });
		}

		const banner = await prisma.banner.findUnique({
			where: { id: parseInt(bannerId, 10) },
		});

		if (!banner) {
			return NextResponse.json({ message: "Banner no encontrado." }, { status: 404 });
		}

		await prisma.banner.update({
			where: { id: parseInt(bannerId, 10) },
			data: { status: 2 },
		});

		return NextResponse.json({ message: "Banner eliminado exitosamente." }, { status: 200 });
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json(
			{ message: "Ocurrió un error al eliminar el banner." },
			{ status: 500 }
		);
	}
}
