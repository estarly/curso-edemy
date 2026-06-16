import sizeOf from "image-size";

export const BANNER_WIDTH = 832;
export const BANNER_HEIGHT = 456;
export const BANNER_ASPECT_RATIO = BANNER_WIDTH / BANNER_HEIGHT;
export const BANNER_ASPECT_TOLERANCE = 0.03;

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".ogg", ".mov", ".avi"];

export function isVideoUrl(url) {
	if (!url) return false;
	const lowerUrl = url.toLowerCase();
	return VIDEO_EXTENSIONS.some((ext) => lowerUrl.includes(ext));
}

export function validateBannerImageDimensions(buffer) {
	const dimensions = sizeOf(buffer);
	const ratio = dimensions.width / dimensions.height;

	if (Math.abs(ratio - BANNER_ASPECT_RATIO) > BANNER_ASPECT_TOLERANCE) {
		return {
			valid: false,
			message: `La imagen debe tener relación de aspecto ${BANNER_WIDTH}x${BANNER_HEIGHT}px (aprox. ${BANNER_WIDTH}/${BANNER_HEIGHT}).`,
		};
	}

	return { valid: true, dimensions };
}

export function parseOptionalDate(value) {
	if (!value || value === "null" || value === "undefined") {
		return null;
	}

	const parsed = new Date(value);

	if (Number.isNaN(parsed.getTime())) {
		throw new Error("Fecha inválida.");
	}

	return parsed;
}

export function parseBannerDates(dateStart, dateEnd) {
	const date_start = parseOptionalDate(dateStart);
	const date_end = parseOptionalDate(dateEnd);

	if (date_start && date_end && date_start > date_end) {
		throw new Error("La fecha de inicio no puede ser posterior a la fecha de fin.");
	}

	return { date_start, date_end };
}

export function getActiveBannerWhere(now = new Date()) {
	return {
		status: 1,
		AND: [
			{
				OR: [{ date_start: null }, { date_start: { lte: now } }],
			},
			{
				OR: [{ date_end: null }, { date_end: { gte: now } }],
			},
		],
	};
}

export function formatDateForInput(value) {
	if (!value) return "";

	const date = value instanceof Date ? value : new Date(value);

	if (Number.isNaN(date.getTime())) return "";

	const offset = date.getTimezoneOffset();
	const local = new Date(date.getTime() - offset * 60 * 1000);

	return local.toISOString().slice(0, 16);
}
