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
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
	ssr: false,
	loading: () => null,
});
import Input from "../FormHelpers/Input";


const CourseLessons = ({ course, params }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isUploading, setIsUploading] = useState(false);
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

	// Función para simular carga de archivos
	const simulateFileUpload = (type) => {
		setIsUploading(true);
		
		// Simular un delay para la "carga"
		setTimeout(() => {
			let fakeUrl = "";
			
			switch (type) {
				case "video":
					fakeUrl = "https://example.com/videos/curso-" + Math.floor(Math.random() * 1000) + ".mp4";
					break;
				case "audio":
					fakeUrl = "https://example.com/audios/curso-" + Math.floor(Math.random() * 1000) + ".mp3";
					break;
				case "document":
					fakeUrl = "https://example.com/docs/curso-" + Math.floor(Math.random() * 1000) + ".pdf";
					break;
				default:
					fakeUrl = "https://example.com/assets/curso-" + Math.floor(Math.random() * 1000);
			}
			
			toast.success("Archivo subido exitosamente");
			setIsUploading(false);
			return fakeUrl;
		}, 1500);
	};

	const onSubmit = (data) => {
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
				if (!data.video_url) {
					toast.error("Por favor sube un video");
					return;
				}
				break;
				
			case 2: // Audio
				if (!data.video_url) {
					toast.error("Por favor sube un archivo de audio");
					return;
				}
				break;
				
			case 3: // Documento
				if (!data.video_url) {
					toast.error("Por favor sube un documento");
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
		
		// Preparar datos para enviar
		const formData = {
			title: data.title,
			description: data.description,
			assetTypeId: asset.value,
		};
		
		// Agregar campos según el tipo de asset
		switch (asset.value) {
			case 1: // Video
			case 2: // Audio
			case 3: // Documento
				formData.video_url = data.video_url;
				break;
				
			case 4: // Link Externo
			case 5: // YouTube
				formData.url = data.url;
				break;
				
			case 6: // Online
				formData.url = data.url;
				formData.platform = data.platform;
				formData.meeting_id = data.meeting_id;
				formData.password = data.password;
				formData.host = data.host;
				formData.duration = data.duration;
				formData.participants = data.participants;
				break;
		}
		
		// Enviar datos a la API
		axios
			.post(`/api/courses/${params.courseId}/save-lessons`, formData)
			.then((response) => {
				toast.success(response.data.message || "Lección añadida exitosamente");
				router.refresh();
				reset();
			})
			.catch((error) => {
				console.error("Error:", error);
				toast.error(error.response?.data?.message || "¡Algo salió mal!");
			})
			.finally(() => {
				setIsLoading(false);
			});
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

	// Simular subida de archivo para tipos 1, 2 y 3
	const handleFileUpload = (type) => {
		setIsUploading(true);
		
		// Simular proceso de carga
		setTimeout(() => {
			const fakeUrl = `https://example.com/${type}s/${type}-${Date.now()}.${type === 'video' ? 'mp4' : type === 'audio' ? 'mp3' : 'pdf'}`;
			setCustomValue("video_url", fakeUrl);
			setIsUploading(false);
			toast.success(`${type.charAt(0).toUpperCase() + type.slice(1)} subido exitosamente`);
		}, 2000);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="row">
				<div className="col-12">
					<div className="row">
						<div className="col-md-4">
							<AssetSelect
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

					{asset?.value === 1 && (
						<div className="mt-3">
							<h5>Subir Video</h5>
							{!video_url ? (
								<div className="p-4 border rounded text-center bg-light">
									<button 
										type="button" 
										className="btn btn-primary" 
										onClick={() => handleFileUpload('video')}
										disabled={isUploading}
									>
										{isUploading ? (
											<>
												<span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
												Subiendo video...
											</>
										) : "Seleccionar archivo de video"}
									</button>
								</div>
							) : (
								<div className="p-3 border rounded bg-light">
									<div className="d-flex justify-content-between align-items-center">
										<div>
											<i className="bi bi-file-earmark-play me-2"></i>
											{video_url.split('/').pop()}
										</div>
										<button 
											type="button" 
											className="btn btn-sm btn-outline-danger"
											onClick={() => setCustomValue("video_url", "")}
										>
											Eliminar
										</button>
									</div>
								</div>
							)}
						</div>
					)}

					{asset?.value === 2 && (
						<div className="mt-3">
							<h5>Subir Audio</h5>
							{!video_url ? (
								<div className="p-4 border rounded text-center bg-light">
									<button 
										type="button" 
										className="btn btn-primary" 
										onClick={() => handleFileUpload('audio')}
										disabled={isUploading}
									>
										{isUploading ? (
											<>
												<span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
												Subiendo audio...
											</>
										) : "Seleccionar archivo de audio"}
									</button>
								</div>
							) : (
								<div className="p-3 border rounded bg-light">
									<div className="d-flex justify-content-between align-items-center">
										<div>
											<i className="bi bi-file-earmark-music me-2"></i>
											{video_url.split('/').pop()}
										</div>
										<button 
											type="button" 
											className="btn btn-sm btn-outline-danger"
											onClick={() => setCustomValue("video_url", "")}
										>
											Eliminar
										</button>
									</div>
								</div>
							)}
						</div>
					)}

					{asset?.value === 3 && (
						<div className="mt-3">
							<h5>Subir Documento</h5>
							{!video_url ? (
								<div className="p-4 border rounded text-center bg-light">
									<button 
										type="button" 
										className="btn btn-primary" 
										onClick={() => handleFileUpload('document')}
										disabled={isUploading}
									>
										{isUploading ? (
											<>
												<span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
												Subiendo documento...
											</>
										) : "Seleccionar documento"}
									</button>
								</div>
							) : (
								<div className="p-3 border rounded bg-light">
									<div className="d-flex justify-content-between align-items-center">
										<div>
											<i className="bi bi-file-earmark-pdf me-2"></i>
											{video_url.split('/').pop()}
										</div>
										<button 
											type="button" 
											className="btn btn-sm btn-outline-danger"
											onClick={() => setCustomValue("video_url", "")}
										>
											Eliminar
										</button>
									</div>
								</div>
							)}
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

					<button type="submit" className="default-btn mt-4" disabled={isLoading}>
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
				</div>
			</div>
		</form>
	);
};

export default CourseLessons;