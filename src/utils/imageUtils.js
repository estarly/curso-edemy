/**
 * Extrae la clave S3 (ruta del archivo) de una URL de DigitalOcean Spaces
 * @param {string} url - URL completa de la imagen
 * @returns {string|null} - La clave S3 extraída o null si no se pudo extraer
 */
export function extractS3KeyFromUrl(url) {
    if (!url) return null;
    
    try {
        // Para URLs de DigitalOcean Spaces
        // Formato típico: https://space-share.nyc3.digitaloceanspaces.com/upload_course/profile/profile-1-1747314860574
        const spacesUrlPattern = /https?:\/\/[^\/]+\.digitaloceanspaces\.com\/(.+)/;
        const match = url.match(spacesUrlPattern);
        
        if (match && match[1]) {
            return match[1]; // Devuelve la parte después del dominio
        }
        
        // Si no coincide con el patrón de DigitalOcean, intenta extraer la última parte de la URL
        const parts = url.split('/');
        if (parts.length > 1) {
            // Verificamos si la URL contiene un path que incluye 'upload_course'
            const uploadShareIndex = parts.findIndex(part => part === 'upload_course');
            if (uploadShareIndex !== -1) {
                return parts.slice(uploadShareIndex).join('/');
            }
        }
        
        console.warn('No se pudo extraer la clave S3 de la URL:', url);
        return null;
    } catch (error) {
        console.error('Error al extraer la clave S3 de la URL:', error);
        return null;
    }
}