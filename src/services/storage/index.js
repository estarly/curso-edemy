import { DigitalOceanStorageService } from './digitalocean';

export const getStorageService = (provider = process.env.STORAGE_PROVIDER || 'digitalocean') => {
  switch (provider.toLowerCase()) {
    case 'digitalocean':
      return new DigitalOceanStorageService();
    default:
      throw new Error(`Proveedor de almacenamiento no soportado: ${provider}`);
  }
};
