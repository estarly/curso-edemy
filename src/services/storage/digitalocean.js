import AWS from 'aws-sdk';
import { StorageService } from './base';
import { v4 as uuidv4 } from 'uuid';

export class DigitalOceanStorageService extends StorageService {
  constructor() {
    super();
    const spacesEndpoint = new AWS.Endpoint(process.env.DO_SPACES_ENDPOINT);
    this.s3 = new AWS.S3({
      endpoint: spacesEndpoint,
      accessKeyId: process.env.DO_SPACES_ACCESS_KEY,
      secretAccessKey: process.env.DO_SPACES_SECRET_KEY,
      region: process.env.DO_SPACES_REGION
    });
    this.bucket = process.env.DO_SPACES_BUCKET;
  }

  async upload(file, options = {}) {
    console.log('=== DIGITALOCEAN UPLOAD START ===');
    console.log('File info:', {
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: file.size
    });
    console.log('Options:', options);

    const {
      path = 'images',
      fileName = `${uuidv4()}-${file.originalname?.replace(/\s/g, '-')}`,
      acl = 'public-read',
      contentType = 'image/png',
      onProgress
    } = options;

    const fullPath = path ? `${path}/${fileName}` : fileName;
    console.log('Full path:', fullPath);

    // Configurar headers adicionales para videos
    const additionalHeaders = {};
    
    if (contentType.startsWith('video/')) {
      additionalHeaders['Content-Disposition'] = 'inline';
      additionalHeaders['Cache-Control'] = 'public, max-age=31536000';
      additionalHeaders['Access-Control-Allow-Origin'] = '*';
      additionalHeaders['Access-Control-Allow-Methods'] = 'GET, HEAD, OPTIONS';
      additionalHeaders['Access-Control-Allow-Headers'] = 'Range, Accept, Accept-Encoding, Accept-Language, Cache-Control, Connection, Host, If-Modified-Since, If-None-Match, If-Range, Origin, Referer, User-Agent';
      additionalHeaders['Access-Control-Expose-Headers'] = 'Accept-Ranges, Content-Length, Content-Range, Content-Type';
      additionalHeaders['Access-Control-Max-Age'] = '86400';
    } else if (contentType.startsWith('audio/')) {
      additionalHeaders['Content-Disposition'] = 'inline';
      additionalHeaders['Cache-Control'] = 'public, max-age=31536000';
      additionalHeaders['Access-Control-Allow-Origin'] = '*';
      additionalHeaders['Access-Control-Allow-Methods'] = 'GET, HEAD, OPTIONS';
      additionalHeaders['Access-Control-Allow-Headers'] = 'Range, Accept, Accept-Encoding, Accept-Language, Cache-Control, Connection, Host, If-Modified-Since, If-None-Match, If-Range, Origin, Referer, User-Agent';
      additionalHeaders['Access-Control-Expose-Headers'] = 'Accept-Ranges, Content-Length, Content-Range, Content-Type';
      additionalHeaders['Access-Control-Max-Age'] = '86400';
    }

    console.log('Additional headers:', additionalHeaders);

    const params = {
      Bucket: this.bucket,
      Key: fullPath,
      Body: file.buffer,
      ACL: acl,
      ContentType: contentType,
      ...additionalHeaders
    };

    console.log('Upload params:', {
      Bucket: params.Bucket,
      Key: params.Key,
      ACL: params.ACL,
      ContentType: params.ContentType,
      BodySize: params.Body.length
    });

    try {
      if (onProgress && typeof onProgress === 'function') {
        console.log('Using progress callback');
        return new Promise((resolve, reject) => {
          const upload = this.s3.upload(params);
          
          upload.on('httpUploadProgress', (progress) => {
            const percentage = Math.round((progress.loaded / progress.total) * 100);
            console.log('Upload progress:', percentage + '%', progress);
            onProgress(percentage, progress);
          });

          upload.send((err, result) => {
            if (err) {
              console.error('Error al subir a Digital Ocean:', err);
              reject({
                success: false,
                error: err.message
              });
            } else {
              console.log('Upload successful:', result);
              // Asegurar que la URL tenga el protocolo https://
              const url = result.Location.startsWith('http') ? result.Location : `https://${result.Location}`;
              resolve({
                success: true,
                url: url,
                key: result.Key
              });
            }
          });
        });
      } else {
        console.log('Using promise upload');
        const result = await this.s3.upload(params).promise();
        console.log('Upload successful:', result);
        // Asegurar que la URL tenga el protocolo https://
        const url = result.Location.startsWith('http') ? result.Location : `https://${result.Location}`;
        return {
          success: true,
          url: url,
          key: result.Key
        };
      }
    } catch (error) {
      console.error('Error al subir a Digital Ocean:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  async delete(fileUrl) {
    const urlParts = fileUrl.split('/');
    const key = urlParts.slice(3).join('/');

    const params = {
      Bucket: this.bucket,
      Key: key
    };

    try {
      await this.s3.deleteObject(params).promise();
      return {
        success: true
      };
    } catch (error) {
      console.error('Error al eliminar de Digital Ocean:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  async getUrl(fileName) {
    return `https://${this.bucket}.${process.env.DO_SPACES_ENDPOINT}/${fileName}`;
  }
}