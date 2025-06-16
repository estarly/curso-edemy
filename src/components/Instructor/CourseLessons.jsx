"use client";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import dynamic from "next/dynamic";
import {
	useForm,
	Controller,
} from "react-hook-form";
import VideoUpload from "../FormHelpers/VideoUpload";
import AudioUpload from "../FormHelpers/AudioUpload";
import DocumentUpload from "../FormHelpers/DocumentUpload";
import AssetSelect from "../FormHelpers/AssetSelect";
import {MediaUpload} from "@/components/Instructor/MediaUpload";
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
	ssr: false,
	loading: () => null,
});
import Input from "../FormHelpers/Input";

const ASSET_TYPES = {
  VIDEO: 1,
  AUDIO: 2,
  DOCUMENT: 3,
  LINK: 4,
  YOUTUBE: 5,
  ONLINE: 6
};

const CourseLessons = ({ params, currentAsset, onCancelEdit, onAssetUpdated }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const router = useRouter();
  const isEditMode = !!currentAsset;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      video_url: "",
      file_url: "",
      url: "",
      platform: "",
      meeting_id: "",
      password: "",
      host: "",
      duration: "",
      participants: "",
      description: "",
      asset: null,
    },
  });

  useEffect(() => {
    if (currentAsset) {
      const assetTypeOptions = [
        { value: ASSET_TYPES.VIDEO, label: "Video" },
        { value: ASSET_TYPES.AUDIO, label: "Audio" },
        { value: ASSET_TYPES.DOCUMENT, label: "Documento" },
        { value: ASSET_TYPES.LINK, label: "Link Externo" },
        { value: ASSET_TYPES.YOUTUBE, label: "YouTube" },
        //{ value: ASSET_TYPES.ONLINE, label: "Online Session" }
      ];

      const selectedAssetType = assetTypeOptions.find(option => option.value === currentAsset.assetTypeId);

      setValue("title", currentAsset.title || "");
      setValue("description", currentAsset.description || "");
      setValue("asset", selectedAssetType);

      if (currentAsset.config_asset) {
        const config = currentAsset.config_asset;

        switch (currentAsset.assetTypeId) {
          case ASSET_TYPES.LINK:
          case ASSET_TYPES.YOUTUBE:
            setValue("url", config.val || "");
            break;

          case ASSET_TYPES.ONLINE:
            setValue("url", config.val || "");
            setValue("platform", config.platform || "");
            setValue("meeting_id", config.meeting_id || "");
            setValue("password", config.password || "");
            if (config.credits) {
              setValue("host", config.credits.host || "");
              setValue("duration", config.credits.duration || "");
              setValue("participants", config.credits.participants || "");
            }
            break;
        }
      }
    } else {
      reset();
      setSelectedFile(null);
    }
  }, [currentAsset, setValue, reset]);

  const onSubmit = async (data) => {
    const asset = data.asset;

    if (!data.title.trim()) {
      toast.error("El título es obligatorio");
      return;
    }

    if (!asset) {
      toast.error("Debes seleccionar un tipo de asset");
      return;
    }

    if (!isEditMode) {
      switch (asset.value) {
        case ASSET_TYPES.VIDEO:
        case ASSET_TYPES.AUDIO:
        case ASSET_TYPES.DOCUMENT:
          if (!selectedFile) {
            const fileType = asset.value === ASSET_TYPES.VIDEO ? 'un video' : asset.value === ASSET_TYPES.AUDIO ? 'un archivo de audio' : 'un documento';
            toast.error(`Por favor sube ${fileType}`);
            return;
          }
          break;

        case ASSET_TYPES.LINK:
          if (!data.url) {
            toast.error("La URL es obligatoria");
            return;
          }
          if (!isValidUrl(data.url)) {
            toast.error("Por favor ingresa una URL válida");
            return;
          }
          break;

        case ASSET_TYPES.YOUTUBE:
          if (!data.url) {
            toast.error("La URL de YouTube es obligatoria");
            return;
          }
          if (!isYoutubeUrl(data.url)) {
            toast.error("Por favor ingresa una URL de YouTube válida");
            return;
          }
          break;

        case ASSET_TYPES.ONLINE:
          if (!data.url) {
            toast.error("La URL es obligatoria");
            return;
          }
          if (!data.platform) {
            toast.error("La plataforma es obligatoria");
            return;
          }
          if (!isValidUrl(data.url)) {
            toast.error("Por favor ingresa una URL válida");
            return;
          }
          break;
      }
    } else {
      switch (asset.value) {
        case ASSET_TYPES.LINK:
          if (!data.url) {
            toast.error("La URL es obligatoria");
            return;
          }
          if (!isValidUrl(data.url)) {
            toast.error("Por favor ingresa una URL válida");
            return;
          }
          break;

        case ASSET_TYPES.YOUTUBE:
          if (!data.url) {
            toast.error("La URL de YouTube es obligatoria");
            return;
          }
          if (!isYoutubeUrl(data.url)) {
            toast.error("Por favor ingresa una URL de YouTube válida");
            return;
          }
          break;

        case ASSET_TYPES.ONLINE:
          if (!data.url) {
            toast.error("La URL es obligatoria");
            return;
          }
          if (!data.platform) {
            toast.error("La plataforma es obligatoria");
            return;
          }
          if (!isValidUrl(data.url)) {
            toast.error("Por favor ingresa una URL válida");
            return;
          }
          break;
      }
    }

    setIsLoading(true);

    try {
      let requestData;
      let config = {};
      let url;

      if (isEditMode) {
        url = `/api/courses/${params.courseId}/lessons/${currentAsset.id}`;

        if (selectedFile && (asset.value === ASSET_TYPES.VIDEO || asset.value === ASSET_TYPES.AUDIO || asset.value === ASSET_TYPES.DOCUMENT)) {
          const formData = new FormData();
          formData.append('file', selectedFile);
          formData.append('title', data.title);
          formData.append('description', data.description || '');
          formData.append('assetTypeId', asset.value);

          requestData = formData;
          config.headers = {
            'Content-Type': 'multipart/form-data',
          };
        } else {
          requestData = {
            title: data.title,
            description: data.description,
            assetTypeId: asset.value,
          };

          switch (asset.value) {
            case ASSET_TYPES.LINK:
            case ASSET_TYPES.YOUTUBE:
              requestData.url = data.url;
              break;

            case ASSET_TYPES.ONLINE:
              requestData.url = data.url;
              requestData.platform = data.platform;
              requestData.meeting_id = data.meeting_id;
              requestData.password = data.password;
              requestData.host = data.host;
              requestData.duration = data.duration;
              requestData.participants = data.participants;
              break;
          }
        }

        const response = await axios.put(url, requestData, config);
        toast.success(response.data.message || "Asset actualizado exitosamente");
        onAssetUpdated();
      } else {
        url = `/api/courses/${params.courseId}/lessons`;

        if (selectedFile && (asset.value === ASSET_TYPES.VIDEO || asset.value === ASSET_TYPES.AUDIO || asset.value === ASSET_TYPES.DOCUMENT)) {
          const formData = new FormData();
          formData.append('file', selectedFile);
          formData.append('title', data.title);
          formData.append('description', data.description || '');
          formData.append('assetTypeId', asset.value);

          requestData = formData;
          config.headers = {
            'Content-Type': 'multipart/form-data',
          };
        } else {
          requestData = {
            title: data.title,
            description: data.description,
            assetTypeId: asset.value,
          };

          switch (asset.value) {
            case ASSET_TYPES.LINK:
            case ASSET_TYPES.YOUTUBE:
              requestData.url = data.url;
              break;

            case ASSET_TYPES.ONLINE:
              requestData.url = data.url;
              requestData.platform = data.platform;
              requestData.meeting_id = data.meeting_id;
              requestData.password = data.password;
              requestData.host = data.host;
              requestData.duration = data.duration;
              requestData.participants = data.participants;
              break;
          }
        }

        const response = await axios.post(url, requestData, config);
        toast.success(response.data.message || "Lección añadida exitosamente");
        reset();
        setSelectedFile(null);
      }

      router.refresh();

    } catch (error) {
      console.error("Error:", error);
      toast.error(error.response?.data?.message || "¡Algo salió mal!");
    } finally {
      setIsLoading(false);
    }
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isYoutubeUrl = (url) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  const handleCancel = () => {
    reset();
    setSelectedFile(null);
    onCancelEdit();
  };

  const video_url = watch("video_url");
  const asset = watch("asset");

  const setCustomValue = (id, value) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  return (
    <>
      {isEditMode && (
        <div className="alert alert-info mb-3">
          <i className="bx bx-edit me-2"></i>
          Editando: <strong>{currentAsset.title}</strong>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-md-4">
                <AssetSelect
                  style={{
                    zIndex: 1,
                  }}
                  label="Tipo de asset"
                  value={asset?.value}
                  onChange={(value) => setCustomValue("asset", value)}
                  disabled={isEditMode}
                />
                {isEditMode && (
                  <small className="text-muted">
                    El tipo de asset no se puede modificar
                  </small>
                )}
              </div>
              <div className="col-md-4">
                <Input
                  label="Título"
                  id="title"
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  required
                />
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label className="form-label fw-semibold">
                    Descripción
                  </label>
                  <Controller
                    name="description"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <RichTextEditor
                        controls={[
                          ["bold", "italic", "underline", "link"],
                          ["unorderedList", "h1", "h2", "h3"],
                          [
                            "alignLeft",
                            "alignCenter",
                            "alignRight",
                          ],
                        ]}
                        value={field.value}
                        onChange={(value) => field.onChange(value)}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
            <br /><br />
            {(asset?.value === ASSET_TYPES.VIDEO || asset?.value === ASSET_TYPES.AUDIO || asset?.value === ASSET_TYPES.DOCUMENT) && (
              <div className="mt-3">
                <MediaUpload
                  assetType={asset?.value}
                  onFileSelect={setSelectedFile}
                  isLoading={isLoading}
                />
                {isEditMode && (
                  <small className="text-muted">
                    Deja vacío si no quieres cambiar el archivo actual
                  </small>
                )}
              </div>
            )}

            {(asset?.value === ASSET_TYPES.LINK || asset?.value === ASSET_TYPES.YOUTUBE) && (
              <div className="row mt-3">
                <div className="col-md-12">
                  <Input
                    label={asset?.value === ASSET_TYPES.LINK ? "URL del enlace externo" : "URL de YouTube"}
                    id="url"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                  />
                  {asset?.value === ASSET_TYPES.YOUTUBE && (
                    <small className="text-muted">
                      Ejemplo: https://www.youtube.com/watch?v=XXXXXXXXXXX
                    </small>
                  )}
                </div>
              </div>
            )}

            {asset?.value === ASSET_TYPES.ONLINE && (
              <div className="row mt-3">
                <div className="col-md-6">
                  <Input
                    label="URL de la reunión"
                    id="url"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    label="Plataforma"
                    id="platform"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                  />
                  <small className="text-muted">
                    Ejemplos: Zoom, Google Meet, Microsoft Teams
                  </small>
                </div>
                <div className="col-md-6 mt-3">
                  <Input
                    label="ID de Reunión"
                    id="meeting_id"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                  />
                </div>
                <div className="col-md-6 mt-3">
                  <Input
                    label="Contraseña"
                    id="password"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                  />
                </div>
                <div className="col-12 mt-3">
                  <h5>Créditos</h5>
                </div>
                <div className="col-md-4 mt-2">
                  <Input
                    label="Anfitrión"
                    id="host"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                  />
                </div>
                <div className="col-md-4 mt-2">
                  <Input
                    label="Duración"
                    id="duration"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    placeholder="Ej: 1 hora"
                  />
                </div>
                <div className="col-md-4 mt-2">
                  <Input
                    label="Participantes"
                    id="participants"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    placeholder="Máximo de participantes"
                  />
                </div>
              </div>
            )}

            <div className="mt-8 d-flex gap-2">
              <button type="submit" className="default-btn" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    {isEditMode ? "Actualizando..." : "Guardando..."}
                  </>
                ) : (
                  <>
                    <i className={isEditMode ? "bx bx-check" : "flaticon-right-arrow"}></i>
                    {isEditMode ? "Actualizar Asset" : (
                      <>
                        {asset?.value === ASSET_TYPES.VIDEO && "Subir Video"}
                        {asset?.value === ASSET_TYPES.AUDIO && "Subir Audio"}
                        {asset?.value === ASSET_TYPES.DOCUMENT && "Subir Documento"}
                        {asset?.value === ASSET_TYPES.LINK && "Guardar Link Externo"}
                        {asset?.value === ASSET_TYPES.YOUTUBE && "Guardar YouTube"}
                        {asset?.value === ASSET_TYPES.ONLINE && "Guardar Sesión Online"}
                        {!asset?.value && "Guardar"}
                      </>
                    )}
                    <span></span>
                  </>
                )}
              </button>

              {isEditMode && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCancel}
                  disabled={isLoading}
                >
                  <i className="bx bx-x"></i>
                  Cancelar
                </button>
              )}
            </div>
            <br />
          </div>
        </div>
      </form>
    </>
  );
};

export default CourseLessons;