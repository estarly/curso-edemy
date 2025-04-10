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

  async deleteImage(imageUrl) {
    return this.storageService.delete(imageUrl);
  }
}

export const imageUploadService = new ImageUploadService();