import { getStorageService } from './storage';
  
export class ImageUploadService {
  constructor(provider) {
    try {
      this.storageService = getStorageService(provider);
    } catch (error) {
      console.error('Error al inicializar el servicio de almacenamiento:', error);
      this.storageService = null;
    }
  }

  async uploadImage(file, options = {}) {
    if (!file) throw new Error('No se proporcionó ningún archivo');
    
    if (!file.mimetype || !file.mimetype.startsWith('image/')) {
      throw new Error('El archivo debe ser una imagen');
    }

    if (!this.storageService) {
      return {
        success: false,
        error: 'Servicio de almacenamiento no disponible. Verifica la configuración.'
      };
    }

    const imageOptions = { path: 'images', ...options };
    return this.storageService.upload(file, imageOptions);
  }

  async deleteImage(key) {
    if (!this.storageService) {
      return {
        success: false,
        error: 'Servicio de almacenamiento no disponible. Verifica la configuración.'
      };
    }

    try {
      console.log('Intentando eliminar imagen con clave:', key);
      
      const result = await this.storageService.delete(key);
          
      return { success: true, result };
    } catch (error) {
      console.error('Error detallado al eliminar imagen:', error);
      return { success: false, error: error.message };
    }
  }
}

export const imageUploadService = new ImageUploadService();