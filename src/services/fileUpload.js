import { getStorageService } from './storage';

export class FileUploadService {
  constructor(provider) {
    this.storageService = getStorageService(provider);
  }

  async uploadFile(file, options = {}) {
    if (!file) throw new Error('No se proporcionó ningún archivo');

    if (!file.mimetype) throw new Error('El archivo debe tener un tipo MIME válido');

    if (!file.mimetype.startsWith('image/') &&
      !file.mimetype.startsWith('audio/') &&
      !file.mimetype.startsWith('video/') &&
      !file.mimetype.startsWith('application/') &&
      !file.mimetype.startsWith('text/')) {
      throw new Error('El archivo debe ser una imagen, un audio, un video o un documento');
    }

    let path;
    if (file.mimetype.startsWith('image/')) {
      path = 'images';
    } else if (file.mimetype.startsWith('audio/')) {
      path = 'audios';
    } else if (file.mimetype.startsWith('video/')) {
      path = 'videos';
    } else if (file.mimetype.startsWith('application/') || file.mimetype.startsWith('text/')) {
      path = 'documents';
    }

    const fileOptions = { path, ...options };
    return this.storageService.upload(file, fileOptions);
  }

  async deleteFile(url) {
    try {
      const result =   this.storageService.delete(url);

      return { success: true, result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}

export const fileUploadService = new FileUploadService();