"use client";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import ProgressBar from "../Shared/ProgressBar";

const ASSET_TYPES = {
  VIDEO: 1,
  AUDIO: 2,
  DOCUMENT: 3
};

const VIDEO_CONSTRAINTS = {
  MAX_DURATION_SECONDS: 300,
  MAX_DURATION_MINUTES: 5,
  ALLOWED_TYPES: ['video/mp4']
};

const TIMEOUTS = {
  VIDEO_LOAD_MS: 10000
};

const MESSAGES = {
  VIDEO_LOAD_ERROR: "Error al cargar el video",
  VIDEO_TIMEOUT_ERROR: "Timeout al cargar el video",
  VIDEO_VALIDATION_ERROR: "Error al validar la duración del video",
  VIDEO_TYPE_ERROR: "Solo se permiten archivos de video MP4",
  VIDEO_DURATION_EXCEEDED: `El video no puede exceder los ${VIDEO_CONSTRAINTS.MAX_DURATION_MINUTES} minutos. Duración actual: {duration}`,
  VIDEO_DURATION_LIMIT: `Máximo ${VIDEO_CONSTRAINTS.MAX_DURATION_MINUTES} minutos de duración - Solo MP4`,
  FILE_REMOVED: "Archivo eliminado",
  UPLOAD_PROGRESS: "Subiendo archivo...",
  UPLOAD_COMPLETE: "Archivo subido exitosamente",
  UPLOAD_ERROR: "Error al subir el archivo"
};

const FILE_TYPES = {
  VIDEO: 'Video',
  AUDIO: 'Audio',
  DOCUMENT: 'Documento'
};

const MediaUpload = ({ onFileSelect, isLoading: externalLoading = false, assetType, clearFile=false, uploadProgress = null, isUploading = false }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const isLoading = externalLoading;

  const formatearDuracion = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const segs = Math.floor(segundos % 60);
    return `${minutos}:${segs.toString().padStart(2, '0')}`;
  };

  const obtenerDuracionVideo = (archivo) => {
    return new Promise((resolve, reject) => {
      const video = document.createElement('video');
      video.preload = 'metadata';

      video.onloadedmetadata = function() {
        window.URL.revokeObjectURL(video.src);
        resolve(video.duration);
      };

      video.onerror = function() {
        window.URL.revokeObjectURL(video.src);
        reject(MESSAGES.VIDEO_LOAD_ERROR);
      };

      setTimeout(() => {
        window.URL.revokeObjectURL(video.src);
        reject(MESSAGES.VIDEO_TIMEOUT_ERROR);
      }, TIMEOUTS.VIDEO_LOAD_MS);

      video.src = URL.createObjectURL(archivo);
    });
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      if (assetType === ASSET_TYPES.VIDEO && file.type.startsWith('video/')) {
        if (!VIDEO_CONSTRAINTS.ALLOWED_TYPES.includes(file.type)) {
          toast.error(MESSAGES.VIDEO_TYPE_ERROR);
          event.target.value = '';
          return;
        }

        try {
          const duracion = await obtenerDuracionVideo(file);
          if (duracion > VIDEO_CONSTRAINTS.MAX_DURATION_SECONDS) {
            const duracionFormateada = formatearDuracion(duracion);
            const errorMessage = MESSAGES.VIDEO_DURATION_EXCEEDED.replace('{duration}', duracionFormateada);
            toast.error(errorMessage);
            event.target.value = '';
            return;
          }
        } catch (error) {
          toast.error(MESSAGES.VIDEO_VALIDATION_ERROR);
          event.target.value = '';
          return;
        }
      }

      setSelectedFile(file);
      if (onFileSelect) {
        onFileSelect(file);
      }
      const fileType = assetType === ASSET_TYPES.VIDEO ? FILE_TYPES.VIDEO :
        assetType === ASSET_TYPES.AUDIO ? FILE_TYPES.AUDIO : FILE_TYPES.DOCUMENT;
      toast.success(`${fileType} seleccionado correctamente`);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (onFileSelect) {
      onFileSelect(null);
    }
    toast.success(MESSAGES.FILE_REMOVED);
  };

  useEffect(() => {
    if (clearFile) {
      setSelectedFile(null);
      onFileSelect(null)
    }
  }, [clearFile]);

  const renderFileInfo = (file, iconClass, fileType) => (
    <div className="p-3 border rounded bg-light">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <i className={`${iconClass} me-2`}></i>
          {file.name}
        </div>
        <button
          type="button"
          className="btn btn-sm btn-outline-danger"
          onClick={removeFile}
          disabled={isUploading}
        >
          Eliminar
        </button>
      </div>
      
      {/* Mostrar barra de progreso si está subiendo */}
      {isUploading && uploadProgress !== null && (
        <div className="mt-3">
          <ProgressBar 
            progress={uploadProgress} 
            status={MESSAGES.UPLOAD_PROGRESS}
          />
        </div>
      )}
    </div>
  );

  return (
    <div className="media-upload-container">
      <div className="row">
        {assetType === ASSET_TYPES.VIDEO && (
          <div className="mt-3">
            <h5>Subir Video</h5>
            {!selectedFile ? (
              <div className="p-4 border rounded text-center bg-light">
                <label className="btn btn-primary" style={{ cursor: 'pointer' }}>
                  <input
                    type="file"
                    accept="video/mp4"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    disabled={isLoading || isUploading}
                  />
                  Seleccionar archivo de video
                </label>
                <small className="d-block text-muted mt-2">{MESSAGES.VIDEO_DURATION_LIMIT}</small>
              </div>
            ) : (
              renderFileInfo(selectedFile, "bi bi-file-earmark-play", FILE_TYPES.VIDEO)
            )}
          </div>
        )}

        {assetType === ASSET_TYPES.AUDIO && (
          <div className="mt-3">
            <h5>Subir Audio</h5>
            {!selectedFile ? (
              <div className="p-4 border rounded text-center bg-light">
                <label className="btn btn-primary" style={{ cursor: 'pointer' }}>
                  <input
                    type="file"
                    accept="audio/*"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    disabled={isLoading || isUploading}
                  />
                  Seleccionar archivo de audio
                </label>
              </div>
            ) : (
              renderFileInfo(selectedFile, "bi bi-file-earmark-music", FILE_TYPES.AUDIO)
            )}
          </div>
        )}

        {assetType === ASSET_TYPES.DOCUMENT && (
          <div className="mt-3">
            <h5>Subir Documento</h5>
            {!selectedFile ? (
              <div className="p-4 border rounded text-center bg-light">
                <label className="btn btn-primary" style={{ cursor: 'pointer' }}>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.txt,.rtf"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    disabled={isLoading || isUploading}
                  />
                  Seleccionar documento
                </label>
              </div>
            ) : (
              renderFileInfo(selectedFile, "bi bi-file-earmark-pdf", FILE_TYPES.DOCUMENT)
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export { MediaUpload };