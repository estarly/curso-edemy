import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export const useFileUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const uploadFile = async (url, formData, options = {}) => {
    setIsUploading(true);
    setUploadProgress(0);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percentCompleted);
        },
        ...options
      };

      const response = await axios.post(url, formData, config);
      
      setIsUploading(false);
      setUploadProgress(0);
      
      return response.data;
    } catch (error) {
      setIsUploading(false);
      setUploadProgress(0);
      throw error;
    }
  };

  const updateFile = async (url, formData, options = {}) => {
    setIsUploading(true);
    setUploadProgress(0);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percentCompleted);
        },
        ...options
      };

      const response = await axios.put(url, formData, config);
      
      setIsUploading(false);
      setUploadProgress(0);
      
      return response.data;
    } catch (error) {
      setIsUploading(false);
      setUploadProgress(0);
      throw error;
    }
  };

  return {
    isUploading,
    uploadProgress,
    uploadFile,
    updateFile
  };
}; 