import { getStorageService } from './storage';
  
export class ImageUploadService {
  constructor(provider) {
    this.storageService = getStorageService(provider);
  }

  async uploadImage(file, options = {}) {
    if (!file) throw new Error('No se proporcionó ningún archivo');
    
    if (!file.mimetype || !file.mimetype.startsWith('image/'))throw new Error('El archivo debe ser una imagen')

    const imageOptions = { path: 'images', ...options };
    return this.storageService.upload(file, imageOptions);
  }

  async deleteImage(key) {
    try {
      console.log('Intentando eliminar imagen con clave:', key);
      
      const result =   this.storageService.delete(key);
          
      return { success: true, result };
    } catch (error) {
      console.error('Error detallado al eliminar imagen:', error);
      return { success: false, error: error.message };
    }
  }
}

export const imageUploadService = new ImageUploadService();