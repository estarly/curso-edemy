import { getStorageService } from "./storage";

const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
const ALLOWED_VIDEO_TYPES = ["video/mp4", "video/webm"];

export class BannerUploadService {
	constructor(provider) {
		try {
			this.storageService = getStorageService(provider);
		} catch (error) {
			console.error("Error al inicializar el servicio de banners:", error);
			this.storageService = null;
		}
	}

	isAllowedFile(file) {
		return (
			ALLOWED_IMAGE_TYPES.includes(file.mimetype) ||
			ALLOWED_VIDEO_TYPES.includes(file.mimetype)
		);
	}

	async uploadBannerMedia(file, options = {}) {
		if (!file) throw new Error("No se proporcionó ningún archivo");

		if (!this.isAllowedFile(file)) {
			throw new Error("Formato no permitido. Use JPG, PNG, WEBP o MP4.");
		}

		if (!this.storageService) {
			return {
				success: false,
				error: "Servicio de almacenamiento no disponible.",
			};
		}

		const mediaOptions = { path: "upload_course/banners", ...options };
		return this.storageService.upload(file, mediaOptions);
	}

	async deleteBannerMedia(key) {
		if (!this.storageService) {
			return { success: false, error: "Servicio de almacenamiento no disponible." };
		}

		try {
			const result = await this.storageService.delete(key);
			return { success: true, result };
		} catch (error) {
			return { success: false, error: error.message };
		}
	}
}

export const bannerUploadService = new BannerUploadService();
