"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import ImageUploader from "@/app/admin/banners/_components/ImageUploader";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const ProfilePhotoForm = ({ currentUser }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [imageFile, setImageFile] = useState(null);
	const [crop, setCrop] = useState({ aspect: 1 });
	const [completedCrop, setCompletedCrop] = useState(null);
	const [imageRef, setImageRef] = useState(null);
	const [croppedImagePreview, setCroppedImagePreview] = useState(null);
	const [isCropping, setIsCropping] = useState(false);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm({
		defaultValues: {
			image: "",
			crop: {
				x: 0,
				y: 0,
				width: 200,
				height: 200,
			},
		},
	});

	useEffect(() => {
		//setValue("image", currentUser.image ? currentUser.image : "");
	}, [currentUser]);

	const handleImageUpload = async (value) => {
		if (value && typeof value === 'object' && value.url) {
			if (value.url.startsWith('blob:')) {
				try {
					const response = await fetch(value.url);
					const blob = await response.blob();
					const file = new File([blob], `profile-image-${Date.now()}.png`, { type: blob.type });
					setImageFile(file);
				} catch (error) {
					console.error('Error al obtener el blob:', error);
					toast.error("Error al procesar la imagen");
				}
			}
		} else if (value instanceof File) {
			setImageFile(value);
		} else {
			console.warn('Formato de imagen no reconocido:', value);
			toast.error("Formato de imagen no válido");
		}
	};

	const onImageLoaded = (image) => {
		setImageRef(image);
		setIsCropping(true);
		setCroppedImagePreview(null);
	};

	const onCropComplete = (crop) => {
		setCompletedCrop(crop);
	};

	const applyCrop = async () => {
		if (completedCrop && imageRef) {
			const croppedFile = await getCroppedImg(imageRef, completedCrop);
			setImageFile(croppedFile);
			const previewUrl = URL.createObjectURL(croppedFile);
			setCroppedImagePreview(previewUrl);
			setIsCropping(false);
		}
	};

	const resetCrop = () => {
		setIsCropping(true);
		setCroppedImagePreview(null);
	};

	const onSubmit = async (data) => {
		setIsLoading(true);
		
		if (!imageFile) {
			toast.error("Por favor, suba una imagen 200x200 antes de enviar.");
			setIsLoading(false);
			return;
		}
		
		try {
			const formDataToSend = new FormData();
			
			if (completedCrop && imageRef) {
				const croppedFile = await getCroppedImg(imageRef, completedCrop);
				formDataToSend.append("imageFile", croppedFile, `profile-image-${Date.now()}.png`);
			} else {
				formDataToSend.append("imageFile", imageFile);
			}
			
			console.log("Enviando imagen al servidor...");
			
			const response = await axios.post(
				`/api/user/${currentUser.id}/profile-photo`, 
				formDataToSend
			);
			
			toast.success(response.data.message);
			router.refresh();
		} catch (error) {
			console.error("Error al subir la imagen:", error);
			toast.error(error.response?.data?.message || "Error al subir la imagen");
		} finally {
			setIsLoading(false);
		}
	};

	// Función auxiliar para obtener la imagen recortada
	const getCroppedImg = (image, crop) => {
		return new Promise((resolve) => {
			const canvas = document.createElement('canvas');
			const scaleX = image.naturalWidth / image.width;
			const scaleY = image.naturalHeight / image.height;
			
			canvas.width = crop.width;
			canvas.height = crop.height;
			
			const ctx = canvas.getContext('2d');
			
			ctx.drawImage(
				image,
				crop.x * scaleX,
				crop.y * scaleY,
				crop.width * scaleX,
				crop.height * scaleY,
				0,
				0,
				crop.width,
				crop.height
			);
			
			canvas.toBlob(blob => {
				if (blob) {
					const file = new File([blob], `profile-image-${Date.now()}.png`, { type: blob.type });
					resolve(file);
				}
			}, 'image/png');
		});
	};

	return (
		<div className="basic-profile-information-form">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="row">
					{/* Columna izquierda: Imagen actual */}
					<div className="col-md-6">
						<div className="mb-4">
							<h5 className="mb-3">Imagen actual</h5>
							<div className="current-image-container p-3 bg-light rounded text-center h-100 d-flex flex-column justify-content-center align-items-center">
								{currentUser.image ? (
									<img 
										src={currentUser.image} 
										alt="Imagen de perfil actual" 
										className="img-fluid rounded shadow" 
										style={{ 
											maxWidth: '250px', 
											maxHeight: '250px',
											objectFit: 'cover',
											border: '2px solid #ddd' 
										}} 
									/>
								) : (
									<div className="no-image-container p-4 text-center">
										<i className="fas fa-user-circle fa-5x text-muted mb-3"></i>
										<p className="text-muted">No hay imagen de perfil</p>
									</div>
								)}
								
								{currentUser.image && (
									<div className="mt-3">
										<p className="text-muted mb-0">Imagen de perfil actual</p>
									</div>
								)}
							</div>
						</div>
					</div>
					
					{/* Columna derecha: Nueva imagen y recorte */}
					<div className="col-md-6">
						<div className="mb-4">
							<h5 className="mb-3">Subir nueva imagen</h5>
							<div className="upload-container p-3 bg-light rounded">
								<ImageUploader
									type="profile"
									onChange={handleImageUpload}
								/>
							</div>
						</div>
						
						{imageFile && isCropping && (
							<div className="mb-4">
								<h5 className="mb-3">Recortar imagen</h5>
								<div className="crop-container p-3 bg-light rounded">
									<ReactCrop
										src={URL.createObjectURL(imageFile)}
										crop={crop}
										onImageLoaded={onImageLoaded}
										onComplete={onCropComplete}
										onChange={newCrop => setCrop(newCrop)}
										className="img-fluid"
									/>
									{completedCrop && (
										<div className="mt-3 d-flex justify-content-between">
											<small className="text-muted">
												Tamaño del recorte: {Math.round(completedCrop.width)} x {Math.round(completedCrop.height)}
											</small>
											<button 
												type="button" 
												className="btn btn-sm btn-primary"
												onClick={applyCrop}
											>
												Aplicar recorte
											</button>
										</div>
									)}
								</div>
							</div>
						)}
						
						{imageFile && croppedImagePreview && !isCropping && (
							<div className="mb-4">
								<h5 className="mb-3">Vista previa</h5>
								<div className="preview-container p-3 bg-light rounded text-center">
									<img 
										src={croppedImagePreview} 
										alt="Vista previa de imagen recortada" 
										className="img-fluid rounded shadow-sm" 
										style={{ 
											maxWidth: '200px', 
											maxHeight: '200px' 
										}} 
									/>
									<div className="mt-3">
										<button 
											type="button" 
											className="btn btn-sm btn-outline-secondary"
											onClick={resetCrop}
										>
											Volver a recortar
										</button>
									</div>
								</div>
							</div>
						)}
					</div>

					{/* Botón de guardar */}
					<div className="col-12 mt-4">
						<button
							className="btn default-btn"
							type="submit"
							disabled={isLoading || (imageFile && isCropping)}
						>
							{isLoading ? (
								<>
									<span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
									Subiendo...
								</>
							) : (
								<>
									<i className="flaticon-right-arrow"></i>
									Guardar imagen de perfil
								</>
							)}
							<span></span>
							<span></span>
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ProfilePhotoForm;
