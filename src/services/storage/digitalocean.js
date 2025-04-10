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
    const {
      path = 'images',
      fileName = `${uuidv4()}-${file.originalname?.replace(/\s/g, '-')}`,
      acl = 'public-read',
      contentType = file.mimetype
    } = options;

    const fullPath = path ? `${path}/${fileName}` : fileName;

    const params = {
      Bucket: this.bucket,
      Key: fullPath,
      Body: file.buffer,
      ACL: acl,
      ContentType: contentType,
    };

    try {
      const result = await this.s3.upload(params).promise();
      return {
        success: true,
        url: result.Location,
        key: result.Key
      };
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