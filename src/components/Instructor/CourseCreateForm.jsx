"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
	ssr: false,
	loading: () => null,
});
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
	useForm,
	Controller,
} from "react-hook-form";
import Input, { RequiredMark } from "../FormHelpers/Input";
import SetPrice from "../FormHelpers/SetPrice";
import CategorySelect from "../FormHelpers/CategorySelect";
//import ImageUpload from "../FormHelpers/ImageUpload";
import ImageUploader from "@/app/admin/banners/_components/ImageUploader";

const CourseCreateForm = ({ currentUser, categories }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [imageFile, setImageFile] = useState(null);
	const [categoryError, setCategoryError] = useState("");
	const [imageError, setImageError] = useState("");
	const [crop, setCrop] = useState({ aspect: 1.5 }); // Aspecto 750/500 = 1.5
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
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			category: "",
			title: "",
			description: "",
			//regular_price: "",
			//before_price: "",
			//lessons: "",
			//duration: "",
			image: "",
			access_time: "Lifetime",
			requirements: "",
			what_you_will_learn: "",
			who_is_this_course_for: "",
			crop: {
				x: 0,
				y: 0,
				width: 750,
				height: 500,
			},
		},
	});

	//const regular = watch("regular_price");
	//const before = watch("before_price");
	const category = watch("category");
	const image = watch("image");

	const richTextRequired = (label) => (value) => {
		const text = (value || "").replace(/<[^>]*>/g, "").trim();
		return text.length > 0 || `${label} es requerido`;
	};

	const showValidationToast = (messages) => {
		if (messages.length > 2) {
			toast.error("Por favor complete su formulario");
			return;
		}
		messages.forEach((message) => toast.error(message));
	};

	const onInvalid = (formErrors) => {
		const messages = Object.values(formErrors)
			.map((error) => error?.message)
			.filter(Boolean);
		showValidationToast(messages);
	};

	const handleImageUpload = async (value) => {
		console.log("Valor recibido:", value); // Agregar para depuración
		
		// Si value es un objeto con propiedad file o url
		if (value && typeof value === 'object') {
			if (value.file instanceof File) {
				// Si tiene una propiedad file que es un objeto File
				setImageFile(value.file);
				setImageError("");
				setIsCropping(true);
				setCroppedImagePreview(null);
			} else if (value.url && value.url.startsWith('blob:')) {
				// Si tiene una URL de blob, intentamos convertirla a File
				try {
					const response = await fetch(value.url);
					const blob = await response.blob();
					const file = new File([blob], `course-image-${Date.now()}.png`, { type: blob.type });
					setImageFile(file);
					setImageError("");
					setIsCropping(true);
					setCroppedImagePreview(null);
				} catch (error) {
					console.error('Error al obtener el blob:', error);
					toast.error("Error al procesar la imagen");
				}
			} else if (value instanceof File) {
				// Si es directamente un objeto File
				setImageFile(value);
				setImageError("");
				setIsCropping(true);
				setCroppedImagePreview(null);
			} else if (value.blob) {
				const blob = value.blob;
				const file =
					blob instanceof File
						? blob
						: new File([blob], `course-image-${Date.now()}.png`, {
								type: blob.type || "image/png",
							});
				setImageFile(file);
				setImageError("");
				setIsCropping(false);
				if (value.url) {
					setCroppedImagePreview(value.url);
					setCustomValue("image", value.url);
				}
			} else {
				console.warn("Formato de imagen no reconocido:", value);
				toast.error("Formato de imagen no reconocido");
			}
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
			setCustomValue("image", previewUrl);
		}
	};

	const resetCrop = () => {
		setIsCropping(true);
		setCroppedImagePreview(null);
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
					const file = new File([blob], `course-image-${Date.now()}.png`, { type: blob.type });
					resolve(file);
				}
			}, 'image/png');
		});
	};

	const onSubmit = (data) => {
		setIsLoading(true);

		let hasError = false;
		const validationMessages = [];

		if (!data.category) {
			setCategoryError("Categoría es requerida");
			validationMessages.push("Categoría es requerida");
			hasError = true;
		} else {
			setCategoryError("");
		}

		if (!imageFile) {
			setImageError("Imagen de portada es requerida");
			validationMessages.push("Imagen de portada es requerida");
			hasError = true;
		} else {
			setImageError("");
		}

		if (hasError) {
			showValidationToast(validationMessages);
			setIsLoading(false);
			return;
		}

		if (completedCrop && (completedCrop.width < 700 || completedCrop.height < 450)) {
			toast.error("La imagen debe tener aproximadamente 750x500 píxeles.");
			setIsLoading(false);
			return;
		}
		
		const formData = new FormData();
		
		// Agregar todos los campos del formulario
		Object.keys(data).forEach(key => {
			if (key !== 'image') {
				formData.append(key, data[key]);
			}
		});
		
		// Agregar la imagen recortada
		formData.append("imageFile", imageFile);
		
		axios
			.post("/api/courses/create", formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})
			.then((response) => {
				toast.success(response.data.message);
				router.push(
					`/instructor/course/${response.data.course.id}/edit`
				);
			})
			.catch((error) => {
				const data = error.response?.data;
				if (data?.errors?.length > 2) {
					toast.error("Por favor complete su formulario");
				} else {
					toast.error(data?.message || "Algo salió mal!");
				}
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const setCustomValue = (id, value) => {
		setValue(id, value, {
			shouldDirty: true,
			shouldTouch: true,
			shouldValidate: true,
		});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit, onInvalid)}>
			<div className="row">
				<div className="col-md-6">
					<Input
						label="Título del curso"
						id="title"
						disabled={isLoading}
						register={register}
						errors={errors}
						required
					/>
				</div>
				<div className="col-md-6">
					<CategorySelect
						required
						data={categories}
						valueId={category}
						onChange={(value) => {
							setCustomValue("category", value);
							if (value) setCategoryError("");
						}}
						label="Categoría"
						error={categoryError}
					/>
				</div>

				<div className="col-md-6">
					<Input
						label="Tiempo de acceso"
						id="access_time"
						disabled={true}
						register={register}
						errors={errors}
					/>
				</div>

				<div className="col-md-6">
					<div className="mb-4">
						<label className="form-label fw-semibold">
							Imagen de portada (750x500)
							<RequiredMark />
						</label>
						<div className="upload-container p-1 bg-light rounded">
							<ImageUploader
								type="course"
								onChange={handleImageUpload}
							/>
						</div>
						{imageError && (
							<div className="invalid-feedback d-block">{imageError}</div>
						)}
					</div>
					
					{/**
					 * {imageFile && isCropping && (
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
					 */}
					
					{imageFile && croppedImagePreview && !isCropping && (
						<div className="mb-4">
							<h5 className="mb-3">Vista previa</h5>
							<div className="preview-container p-3 bg-light rounded text-center">
								<img 
									src={croppedImagePreview} 
									alt="Vista previa de imagen recortada" 
									className="img-fluid rounded shadow-sm" 
									style={{ 
										maxWidth: '100%', 
										height: 'auto' 
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

				<div className="col-md-6">
					<div className="form-group">
						<label className="form-label fw-semibold">
							Descripción
							<RequiredMark />
						</label>
						<Controller
							name="description"
							control={control}
							defaultValue=""
							rules={{ validate: richTextRequired("Descripción") }}
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
						{errors.description && (
							<div className="invalid-feedback d-block">{errors.description.message}</div>
						)}
					</div>
				</div>
				<div className="col-md-6">
					<div className="form-group">
						<label className="form-label fw-semibold">
							Requisitos
							<RequiredMark />
						</label>
						<Controller
							name="requirements"
							control={control}
							defaultValue=""
							rules={{ validate: richTextRequired("Requisitos") }}
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
						{errors.requirements && (
							<div className="invalid-feedback d-block">{errors.requirements.message}</div>
						)}
					</div>
				</div>
				<div className="col-md-6">
					<div className="form-group">
						<label className="form-label fw-semibold">
							Lo que aprenderás
							<RequiredMark />
						</label>
						<Controller
							name="what_you_will_learn"
							control={control}
							defaultValue=""
							rules={{ validate: richTextRequired("Lo que aprenderás") }}
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
						{errors.what_you_will_learn && (
							<div className="invalid-feedback d-block">{errors.what_you_will_learn.message}</div>
						)}
					</div>
				</div>
				<div className="col-md-6">
					<div className="form-group">
						<label className="form-label fw-semibold">
							Para quién es este curso?
							<RequiredMark />
						</label>
						<Controller
							name="who_is_this_course_for"
							control={control}
							rules={{ validate: richTextRequired("Para quién es este curso") }}
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
						{errors.who_is_this_course_for && (
							<div className="invalid-feedback d-block">{errors.who_is_this_course_for.message}</div>
						)}
					</div>
				</div>

				<div className="col-12 d-flex justify-content-between align-items-center mt-3 flex-wrap gap-2">
					<small className="text-muted">
						Los campos marcados con
						<span style={{ color: "#f97316" }}> *</span>
						{" "}son requeridos
					</small>
					<button
						type="submit"
						className="btn btn-success"
						disabled={isLoading}
					>
						{isLoading ? (
							<>
								<span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
								Creando...
							</>
						) : (
							"Crear curso"
						)}
					</button>
				</div>
			</div>
		</form>
	);
};

export default CourseCreateForm;
