"use client";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const MediaUpload = ({ onFileSelect, isLoading: externalLoading = false, assetType, clearFile=false }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const isLoading = externalLoading;

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      if (onFileSelect) {
        onFileSelect(file);
      }
      const fileType = assetType === 1 ? 'Video' : assetType === 2 ? 'Audio' : 'Documento';
      toast.success(`${fileType} seleccionado correctamente`);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (onFileSelect) {
      onFileSelect(null);
    }
    toast.success("Archivo eliminado");
  };

  useEffect(() => {
    if (clearFile) {
      setSelectedFile(null);
      onFileSelect(null)
    }
  }, [clearFile]);
    
  return (
    <div className="media-upload-container">
      <div className="row">
        {assetType === 1 && (
          <div className="mt-3">
            <h5>Subir Video</h5>
            {!selectedFile ? (
              <div className="p-4 border rounded text-center bg-light">
                <label className="btn btn-primary" style={{ cursor: 'pointer' }}>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    disabled={isLoading}
                  />
                  Seleccionar archivo de video
                </label>
              </div>
            ) : (
              <div className="p-3 border rounded bg-light">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <i className="bi bi-file-earmark-play me-2"></i>
                    {selectedFile.name}
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                    onClick={removeFile}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {assetType === 2 && (
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
                    disabled={isLoading}
                  />
                  Seleccionar archivo de audio
                </label>
              </div>
            ) : (
              <div className="p-3 border rounded bg-light">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <i className="bi bi-file-earmark-music me-2"></i>
                    {selectedFile.name}
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                    onClick={removeFile}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {assetType === 3 && (
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
                    disabled={isLoading}
                  />
                  Seleccionar documento
                </label>
              </div>
            ) : (
              <div className="p-3 border rounded bg-light">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <i className="bi bi-file-earmark-pdf me-2"></i>
                    {selectedFile.name}
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                    onClick={removeFile}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export { MediaUpload };