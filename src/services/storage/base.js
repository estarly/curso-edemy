export class StorageService {
  async upload(file, options = {}) {
    throw new Error('El método upload debe ser implementado por clases hijas');
  }

  async delete(fileUrl) {
    throw new Error('El método delete debe ser implementado por clases hijas');
  }

  async getUrl(fileName) {
    throw new Error('El método getUrl debe ser implementado por clases hijas');
  }
}
