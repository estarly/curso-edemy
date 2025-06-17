"use client";
import { useState, useRef, useEffect } from 'react';

const VideoPlayer = ({ src, title, className = "" }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [videoInfo, setVideoInfo] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!src) {
      setError('No se proporcionó una fuente de video');
      setIsLoading(false);
      return;
    }
    
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const handleLoadStart = () => {
      setIsLoading(true);
      setError(null);
      setVideoInfo(null);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
      setError(null);
    };

    const handleCanPlayThrough = () => {
      setIsLoading(false);
      setError(null);
    };

    const handleLoadedData = () => {
      setIsLoading(false);
      setError(null);
    };

    const handleLoadedMetadata = () => {
      setVideoInfo({
        duration: video.duration,
        readyState: video.readyState,
        networkState: video.networkState
      });
    };

    const handleError = (e) => {
      let errorMessage = 'Error al cargar el video';
      
      if (video.error) {
        switch (video.error.code) {
          case 1:
            errorMessage = 'Error: La reproducción fue abortada';
            break;
          case 2:
            errorMessage = 'Error: Error de red - Verifica la URL del video';
            break;
          case 3:
            errorMessage = 'Error: El video no se puede decodificar';
            break;
          case 4:
            errorMessage = 'Error: El formato no es compatible';
            break;
          default:
            errorMessage = `Error: ${video.error.message || 'Error desconocido'}`;
        }
      }
      
      setError(errorMessage);
      setIsLoading(false);
    };

    // Agregar event listeners
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('canplaythrough', handleCanPlayThrough);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('error', handleError);

    // Intentar cargar el video
    video.load();

    // Cleanup
    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('error', handleError);
    };
  }, [src]);

  if (error) {
    return (
      <div className={`video-error ${className}`}>
        <div className="alert alert-danger">
          <h6>Error al cargar el video</h6>
          <p>{error}</p>
          <p><strong>URL:</strong> {src}</p>
          <button 
            className="btn btn-outline-danger btn-sm"
            onClick={() => {
              setError(null);
              setIsLoading(true);
              if (videoRef.current) {
                videoRef.current.load();
              }
            }}
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`video-player-container ${className}`}>
      <video
        ref={videoRef}
        className="video-player"
        controls
        preload="metadata"
        crossOrigin="anonymous"
        style={{ width: '100%', maxWidth: '100%' }}
      >
        <source src={src} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      

      {videoInfo && (
        <div className="video-info mt-2 p-2 bg-light rounded">
          <small className="text-muted">
            <strong>Duración:</strong> {Math.round(videoInfo.duration)}s | 
            <strong> Estado:</strong> {videoInfo.readyState === 4 ? 'Listo' : 'Cargando'} | 
            <strong> Red:</strong> {videoInfo.networkState === 2 ? 'Conectado' : 'Desconectado'}
          </small>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer; 