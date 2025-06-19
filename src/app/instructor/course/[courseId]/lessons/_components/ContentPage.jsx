'use client'
import {useState, useEffect} from "react";
import axios from "axios";
import toast from "react-hot-toast";

import CourseLessons from "@/components/Instructor/CourseLessons";
import AssetItem from "./AssetItem";

const ContentPage = ({ course, params, assets: initialAssets, assignmentsTypes }) => {
  const [currentAsset, setCurrentAsset] = useState(null);
  const [assets, setAssets] = useState(initialAssets);
  const [isFixingHeaders, setIsFixingHeaders] = useState(false);

  const onEdit = (asset) => {
    setCurrentAsset(asset);
  }

  const onCancelEdit = () => {
    setCurrentAsset(null);
  }

  const onAssetUpdated = () => {
    setCurrentAsset(null);
    // Recargar los assets después de una actualización
    reloadAssets();
  }
  
  const onAssetNew = () => {
    reloadAssets();
  }

  const reloadAssets = async () => {
    try {
      const response = await axios.get(`/api/courses/${params.courseId}/lessons`);
      setAssets(response.data.assets || []);
    } catch (error) {
      console.error('Error reloading assets:', error);
    }
  }

  // Verificar y corregir URLs automáticamente al cargar
  useEffect(() => {
    const checkAndFixUrls = async () => {
      try {
        // Verificar si hay videos con URLs incorrectas
        const videosWithIncorrectUrls = assets.filter(asset => 
          asset.assetTypeId === 1 && 
          asset.config_asset?.val && 
          !asset.config_asset.val.startsWith('http')
        );

        if (videosWithIncorrectUrls.length > 0) {
          console.log('Encontrados videos con URLs incorrectas, corrigiendo...');
          const response = await axios.post(`/api/courses/${params.courseId}/lessons/fix-video-urls`);
          console.log('URLs corregidas:', response.data.results);
          
          // Recargar los assets con las URLs corregidas
          await reloadAssets();
        }
      } catch (error) {
        console.error('Error al verificar URLs:', error);
      }
    };

    checkAndFixUrls();
  }, []);

  const fixVideoHeaders = async () => {
    setIsFixingHeaders(true);
    try {
      const response = await axios.post(`/api/courses/${params.courseId}/lessons/fix-video-headers`);
      toast.success("Headers CORS corregidos exitosamente");
      console.log("Resultados:", response.data.results);
      
      // Recargar los assets
      await reloadAssets();
    } catch (error) {
      toast.error("Error al corregir headers: " + error.response?.data?.message);
    } finally {
      setIsFixingHeaders(false);
    }
  }

  return (
    <>
      <CourseLessons
        params={params}
        currentAsset={currentAsset}
        onCancelEdit={onCancelEdit}
        onAssetUpdated={onAssetUpdated}
        onAssetNew={onAssetNew}
      />
      <hr />
      
      {/* Botón temporal para corregir headers CORS */}
      <div className="mb-3 d-none">
        <button
          className="btn btn-danger btn-sm"
          onClick={fixVideoHeaders}
          disabled={isFixingHeaders}
        >
          {isFixingHeaders ? (
            <>
              <span className="spinner-border spinner-border-sm me-2"></span>
              Corrigiendo Headers CORS...
            </>
          ) : (
            <>
              <i className="bx bx-shield-x me-2"></i>
              Corregir Headers CORS (Error de localhost)
            </>
          )}
        </button>
        <small className="text-muted ms-2">
          (Solo si los videos no se reproducen por error CORS)
        </small>
      </div>
      
      <div className="row row-gap-4">
        {assets.map((asset) => (
          <AssetItem
            key={asset.id}
            courseId={params.courseId}
            asset={asset}
            assignmentsTypes={assignmentsTypes}
            onEdit={onEdit}
          />
        ))}
      </div>
    </>
  );
};

export default ContentPage;
