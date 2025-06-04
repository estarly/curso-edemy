"use client";
import React, { useState } from "react";
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
import DocumentUpload from "../FormHelpers/DocumentUpload"; // Simulado
import AssetSelect from "../FormHelpers/AssetSelect";
import {MediaUpload} from "@/components/Instructor/MediaUpload";
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
	ssr: false,
	loading: () => null,
});
import Input from "../FormHelpers/Input";


const CourseLessons = ({ course, params }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
	const router = useRouter();

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

  const onSubmit = async (data) => {
    const asset = data.asset;

    // Validar título para todos los tipos
    if (!data.title.trim()) {
      toast.error("El título es obligatorio");
      return;
    }

    // Validar campos según el tipo de asset
    if (!asset) {
      toast.error("Debes seleccionar un tipo de asset");
      return;
    }

    // Validaciones específicas por tipo de asset
    switch (asset.value) {
      case 1: // Video
      case 2: // Audio
      case 3: // Documento
        if (!selectedFile) {
          const fileType = asset.value === 1 ? 'un video' : asset.value === 2 ? 'un archivo de audio' : 'un documento';
          toast.error(`Por favor sube ${fileType}`);
          return;
        }
        break;

      case 4: // Link Externo
        if (!data.url) {
          toast.error("La URL es obligatoria");
          return;
        }
        if (!isValidUrl(data.url)) {
          toast.error("Por favor ingresa una URL válida");
          return;
        }
        break;

      case 5: // YouTube
        if (!data.url) {
          toast.error("La URL de YouTube es obligatoria");
          return;
        }
        if (!isYoutubeUrl(data.url)) {
          toast.error("Por favor ingresa una URL de YouTube válida");
          return;
        }
        break;

      case 6: // Online
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

    setIsLoading(true);

    try {
      let requestData;
      let config = {};

      // Si hay archivo (video/audio/documento), usar FormData
      if (selectedFile && (asset.value === 1 || asset.value === 2 || asset.value === 3)) {
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
        // Para otros tipos, usar JSON como antes
        requestData = {
          title: data.title,
          description: data.description,
          assetTypeId: asset.value,
        };

        // Agregar campos según el tipo de asset
        switch (asset.value) {
          case 4: // Link Externo
          case 5: // YouTube
            requestData.url = data.url;
            break;

          case 6: // Online
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

      const response = await axios.post(`/api/courses/${params.courseId}/save-lessons`, requestData, config);
      toast.success(response.data.message || "Lección añadida exitosamente");
      router.refresh();
      reset();
      setSelectedFile(null);

    } catch (error) {
      console.error("Error:", error);
      toast.error(error.response?.data?.message || "¡Algo salió mal!");
    } finally {
      setIsLoading(false);
    }
  };

	// Funciones auxiliares para validación
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
							/>
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
          {(asset?.value === 1 || asset?.value === 2 || asset?.value === 3) && (
            <div className="mt-3">
              <MediaUpload
                assetType={asset?.value}
                onFileSelect={setSelectedFile}
                isLoading={isLoading}
              />
            </div>
          )}

					{(asset?.value === 4 || asset?.value === 5) && (
						<div className="row mt-3">
							<div className="col-md-12">
								<Input
									label={asset?.value === 4 ? "URL del enlace externo" : "URL de YouTube"}
									id="url"
									disabled={isLoading}
									register={register}
									errors={errors}
									required
								/>
								{asset?.value === 5 && (
									<small className="text-muted">
										Ejemplo: https://www.youtube.com/watch?v=XXXXXXXXXXX
									</small>
								)}
							</div>
						</div>
					)}

					{asset?.value === 6 && (
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

					<button type="submit" className="default-btn mt-8" disabled={isLoading}>
						{isLoading ? (
							<>
								<span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
								Guardando...
							</>
						) : (
							<>
								<i className="flaticon-right-arrow"></i>
								{asset?.value === 1 && "Subir Video"}
								{asset?.value === 2 && "Subir Audio"}
								{asset?.value === 3 && "Subir Documento"}
								{asset?.value === 4 && "Guardar Link Externo"}
								{asset?.value === 5 && "Guardar YouTube"}
								{asset?.value === 6 && "Guardar Sesión Online"}
								{!asset?.value && "Guardar"}
								<span></span>
							</>
						)}
					</button>
					<br />
				</div>
			</div>
		</form>
	);
};

export default CourseLessons;