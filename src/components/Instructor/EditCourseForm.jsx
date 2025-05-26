"use client";
import React, { useState, useEffect } from "react";
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
import { useForm, Controller } from "react-hook-form";
import Input from "../FormHelpers/Input";
import CategorySelect from "../FormHelpers/CategorySelect";
import ImageUploader from "@/app/admin/banners/_components/ImageUploader";

const EditCourseForm = ({ course, params, categories }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [imageFile, setImageFile] = useState(null);
	const [crop, setCrop] = useState({ aspect: 1.5 }); // Aspecto 750/500 = 1.5
	const [completedCrop, setCompletedCrop] = useState(null);
	const [imageRef, setImageRef] = useState(null);
	const [croppedImagePreview, setCroppedImagePreview] = useState(null);
	const [isCropping, setIsCropping] = useState(false);
	const [originalImage, setOriginalImage] = useState(course[0].image);
	const [showImageUploader, setShowImageUploader] = useState(false);
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
			regular_price: "",
			before_price: "",
			lessons: "",
			duration: "",
			image: "",
			access_time: "",
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

	useEffect(() => {
		setValue("title", course[0].title);
		setValue("category", course[0].categoryId);
		setValue("description", course[0].description);
		setValue("regular_price", course[0].regular_price);
		setValue("before_price", course[0].before_price);
		setValue("lessons", course[0].lessons);
		setValue("duration", course[0].duration);
		setValue("image", course[0].image);
		setValue("access_time", course[0].access_time);
		setValue("requirements", course[0].requirements);
		setValue("what_you_will_learn", course[0].what_you_will_learn);
		setValue("who_is_this_course_for", course[0].who_is_this_course_for);
		
		// Establecer la vista previa de la imagen existente
		setCroppedImagePreview(course[0].image);
	}, [course, setValue]);

	const regular = watch("regular_price");
	const before = watch("before_price");
	const category = watch("category");
	const image = watch("image");

	const handleImageUpload = async (value) => {
		console.log("Valor recibido:", value); // Agregar para depuración
		
		// Si value es un objeto con propiedad file o url
		if (value && typeof value === 'object') {
			if (value.file instanceof File) {
				// Si tiene una propiedad file que es un objeto File
				setImageFile(value.file);
				setIsCropping(true);
				setCroppedImagePreview(null);
			} else if (value.url && value.url.startsWith('blob:')) {
				// Si tiene una URL de blob, intentamos convertirla a File
				try {
					const response = await fetch(value.url);
					const blob = await response.blob();
					const file = new File([blob], `course-image-${Date.now()}.png`, { type: blob.type });
					setImageFile(file);
					setIsCropping(true);
					setCroppedImagePreview(null);
				} catch (error) {
					console.error('Error al obtener el blob:', error);
					toast.error("Error al procesar la imagen");
				}
			} else if (value instanceof File) {
				// Si es directamente un objeto File
				setImageFile(value);
				setIsCropping(true);
				setCroppedImagePreview(null);
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
		
		// Verificar campos obligatorios
		const camposFaltantes = [];
		
		if (!data.title || data.title.trim() === "") {
			camposFaltantes.push("Título del curso");
		}
		
		if (!data.category || data.category === "") {
			camposFaltantes.push("Categoría");
		}
		
		if (!data.description || data.description.trim() === "") {
			camposFaltantes.push("Descripción");
		}
		
		if (!data.requirements || data.requirements.trim() === "") {
			camposFaltantes.push("Requisitos");
		}
		
		if (!data.what_you_will_learn || data.what_you_will_learn.trim() === "") {
			camposFaltantes.push("Lo que aprenderás");
		}
		
		if (!data.who_is_this_course_for || data.who_is_this_course_for.trim() === "") {
			camposFaltantes.push("Para quién es este curso");
		}
		
		// No requerimos imagen en la edición si ya hay una
		if (!imageFile && !originalImage) {
			camposFaltantes.push("Imagen de portada");
		}
		
		// Si hay campos faltantes, mostrar mensaje individual para cada uno
		if (camposFaltantes.length > 0) {
			console.log("Campos faltantes:", camposFaltantes); // Para debugging
			
			// Mostrar un toast de error para cada campo faltante
			camposFaltantes.forEach(campo => {
				toast.error(`El campo "${campo}" es requerido`, {
					duration: 2000,
				});
			});
			
			setIsLoading(false);
			return false; // Asegurar que detenemos la ejecución
		}
		
		// Verificar dimensiones de la imagen si hay una nueva
		if (imageFile && completedCrop && (completedCrop.width < 700 || completedCrop.height < 450)) {
			console.log("Error de dimensiones de imagen"); // Para debugging
			toast.error("La imagen debe tener aproximadamente 750x500 píxeles.");
			setIsLoading(false);
			return false; // Asegurar que detenemos la ejecución
		}
		
		const formData = new FormData();
		
		// Agregar todos los campos del formulario
		Object.keys(data).forEach(key => {
			if (key !== 'image' || (key === 'image' && !imageFile)) {
				formData.append(key, data[key]);
			}
		});
		
		// Agregar la imagen recortada solo si hay una nueva
		if (imageFile) {
			formData.append("imageFile", imageFile);
		}
		
		axios
			.post(`/api/courses/${params.courseId}/edit`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})
			.then((response) => {
				toast.success(response.data.message);
				//router.push("/instructor/courses");
			})
			.catch((error) => {
				toast.error(error.response?.data?.message || "Algo salió mal!");
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
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="row">
				<div className="col-md-6">
					<Input
						label="Título del curso"
						id="title"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
				</div>
				<div className="col-md-6">
					<CategorySelect
						required={false}
						data={categories}
						valueId={category}
						onChange={(value) => {
							setCustomValue("category", value);
						}}
						label="Categoría"
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
						<label className="form-label fw-semibold">Imagen de portada (750x500)</label>
						<div className="upload-container p-1 bg-light rounded">
							{!showImageUploader && (croppedImagePreview || originalImage) ? (
								<div className="preview-container position-relative">
									<button 
										type="button" 
										className="btn btn-sm btn-close position-absolute top-0 end-0 m-2 bg-white" 
										onClick={() => setShowImageUploader(true)}
										aria-label="Cambiar imagen"
									></button>
									
									<img 
										src={croppedImagePreview || originalImage} 
										alt="Vista previa de imagen" 
										className="img-fluid rounded shadow-sm" 
										style={{ 
											maxWidth: '100%', 
											height: 'auto' 
										}} 
									/>
								</div>
							) : (
								<ImageUploader
									type="course"
									onChange={handleImageUpload}
								/>
							)}
							
							{showImageUploader && (croppedImagePreview || originalImage) && (
								<div className="text-center mt-3">
									<button 
										type="button" 
										className="btn btn-sm btn-outline-secondary"
										onClick={() => setShowImageUploader(false)}
									>
										Cancelar y volver a la imagen actual
									</button>
								</div>
							)}
						</div>
					</div>
				</div>

				<div className="col-md-6">
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
				<div className="col-md-6">
					<div className="form-group">
						<label className="form-label fw-semibold">
							Requisitos
						</label>
						<Controller
							name="requirements"
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
				<div className="col-md-6">
					<div className="form-group">
						<label className="form-label fw-semibold">
							Lo que aprenderás
						</label>
						<Controller
							name="what_you_will_learn"
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
				<div className="col-md-6">
					<div className="form-group">
						<label className="form-label fw-semibold">
							Para quién es este curso?
						</label>
						<Controller
							name="who_is_this_course_for"
							control={control}
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

				<div className="col-12">
					<button 
						type="submit" 
						className="default-btn"
						disabled={isLoading}
					>
						{isLoading ? (
							<>
								<span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
								Guardando...
							</>
						) : (
							<>
								<i className="flaticon-right-arrow"></i>Guardar cambios <span></span>
							</>
						)}
					</button>
				</div>
			</div>
		</form>
	);
};

export default EditCourseForm;
