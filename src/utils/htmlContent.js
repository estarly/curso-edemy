// Devuelve true solo si el HTML tiene contenido visible.
// Ignora <p></p>, <br>, &nbsp;, espacios y el marcador "NULL".
export function hasHtmlContent(html) {
	if (!html || html === "NULL") return false;

	const text = html
		.replace(/<[^>]*>/g, "")
		.replace(/&nbsp;/gi, " ")
		.replace(/\s+/g, " ")
		.trim();

	return text.length > 0;
}
