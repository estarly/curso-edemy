import { DigitalOceanStorageService } from './digitalocean';

export const getStorageService = (provider = process.env.STORAGE_PROVIDER || 'digitalocean') => {
  try {
    switch (provider.toLowerCase()) {
      case 'digitalocean':
        return new DigitalOceanStorageService();
      default:
        console.warn(`Proveedor de almacenamiento no soportado: ${provider}. Usando Digital Ocean como fallback.`);
        return new DigitalOceanStorageService();
    }
  } catch (error) {
    console.error('Error al inicializar el servicio de almacenamiento:', error);
    throw new Error(`No se pudo inicializar el servicio de almacenamiento: ${error.message}`);
  }
};
