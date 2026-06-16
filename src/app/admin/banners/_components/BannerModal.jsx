import React, { useState, useEffect } from "react";
import ImageUploader from "@/app/admin/banners/_components/ImageUploader";
import { formatDateForInput } from "@/utils/bannerUtils";

export const BannerModal = ({ show, onClose, banner, onSave, isEditing = false }) => {
	const [formData, setFormData] = useState({
		url: "",
		imageUrl: "",
		image: "",
		status: 1,
		order: 0,
		date_start: "",
		date_end: "",
	});

	const [imageFile, setImageFile] = useState(null);

	useEffect(() => {
		if (banner && isEditing) {
			setFormData({
				url: banner.url || "",
				imageUrl: banner.image || "",
				image: banner.image || "",
				status: banner.status,
				order: banner.order || 0,
				date_start: formatDateForInput(banner.date_start),
				date_end: formatDateForInput(banner.date_end),
			});
		} else if (!isEditing) {
			setFormData({
				url: "",
				imageUrl: "",
				image: "",
				status: 1,
				order: 0,
				date_start: "",
				date_end: "",
			});
			setImageFile(null);
		}
	}, [banner, isEditing, show]);

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[id]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const formDataToSend = new FormData();
		formDataToSend.append("url", formData.url);
		formDataToSend.append("status", formData.status);
		formDataToSend.append("order", parseInt(formData.order, 10) || 0);
		formDataToSend.append("date_start", formData.date_start);
		formDataToSend.append("date_end", formData.date_end);

		if (formData.imageUrl && !formData.imageUrl.startsWith("blob:")) {
			formDataToSend.append("imageUrl", formData.imageUrl);
		}

		if (formData.image && !formData.image.startsWith("blob:")) {
			formDataToSend.append("image", formData.image);
		}

		if (imageFile) {
			formDataToSend.append(
				"imageFile",
				imageFile,
				imageFile.name || `banner-media-${Date.now()}.png`
			);
		}

		if (isEditing && banner?.id) {
			formDataToSend.append("id", banner.id);
		}

		onSave(formDataToSend);
		onClose();
	};

	const handleImageUpload = (value) => {
		if (value && typeof value === "object" && value.url) {
			if (value.url.startsWith("blob:")) {
				fetch(value.url)
					.then((response) => response.blob())
					.then((blob) => {
						const file = new File(
							[blob],
							value.fileName || `banner-media-${Date.now()}.png`,
							{ type: blob.type }
						);
						setImageFile(file);
						setFormData((prev) => ({
							...prev,
							image: value.url,
							imageUrl: "",
						}));
					})
					.catch((error) => {
						console.error("Error al obtener el blob:", error);
					});
			} else {
				setFormData((prev) => ({
					...prev,
					image: value.url,
					imageUrl: value.url,
				}));
			}
		} else if (typeof value === "string") {
			setFormData((prev) => ({
				...prev,
				image: value,
				imageUrl: value,
			}));
		} else if (value instanceof File) {
			setImageFile(value);
			const previewUrl = URL.createObjectURL(value);
			setFormData((prev) => ({
				...prev,
				image: previewUrl,
				imageUrl: "",
			}));
		} else if (value === null) {
			setImageFile(null);
			setFormData((prev) => ({
				...prev,
				image: "",
				imageUrl: "",
			}));
		}
	};

	if (!show) return null;

	return (
		<>
			<div className="modal-backdrop" style={{ opacity: 0.5 }}></div>
			<div className="modal d-block" tabIndex="-1" role="dialog">
				<div className="modal-dialog modal-lg" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">
								{isEditing ? "Editar Banner" : "Añadir Nuevo Banner"}
							</h5>
							<button
								type="button"
								className="btn-close"
								onClick={onClose}
								aria-label="Cerrar"
							></button>
						</div>
						<div className="modal-body">
							<div className="mb-3">
								<label htmlFor="imageUrl" className="form-label">
									URL de imagen o video
								</label>
								<input
									type="url"
									className="form-control bg-light"
									id="imageUrl"
									value={formData.imageUrl}
									onChange={handleChange}
									placeholder="https://ejemplo.com/banner.webp"
								/>
								<small className="text-muted">
									Opcional si subes un archivo. Imágenes: relación 832x456 px.
								</small>
							</div>

							<div className="mb-3">
								<label htmlFor="url" className="form-label">
									Enlace al hacer clic
								</label>
								<input
									type="url"
									className="form-control bg-light"
									id="url"
									value={formData.url}
									onChange={handleChange}
									placeholder="https://ejemplo.com"
								/>
							</div>

							<div className="row">
								<div className="col-md-4 mb-3">
									<label htmlFor="order" className="form-label">
										Orden
									</label>
									<input
										type="number"
										className="form-control bg-light"
										id="order"
										value={formData.order}
										onChange={handleChange}
										min="0"
									/>
								</div>
								<div className="col-md-4 mb-3">
									<label htmlFor="date_start" className="form-label">
										Fecha inicio
									</label>
									<input
										type="datetime-local"
										className="form-control bg-light"
										id="date_start"
										value={formData.date_start}
										onChange={handleChange}
									/>
								</div>
								<div className="col-md-4 mb-3">
									<label htmlFor="date_end" className="form-label">
										Fecha fin
									</label>
									<input
										type="datetime-local"
										className="form-control bg-light"
										id="date_end"
										value={formData.date_end}
										onChange={handleChange}
									/>
								</div>
							</div>

							<div className="mb-3">
								<label className="form-label" htmlFor="status">
									Activo / Inactivo
								</label>
								<br />
								<input
									type="checkbox"
									className="form-check-input p-3 m-1"
									id="status"
									checked={formData.status === 1}
									onChange={(e) => {
										setFormData((prev) => ({
											...prev,
											status: e.target.checked ? 1 : 0,
										}));
									}}
								/>
							</div>

							<div className="mb-3">
								<ImageUploader type="banner" onChange={handleImageUpload} title />
								{imageFile && (
									<div className="mt-2">
										<small>Archivo seleccionado: {imageFile.name}</small>
									</div>
								)}
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" onClick={onClose}>
								Cancelar
							</button>
							<button type="button" className="btn btn-primary" onClick={handleSubmit}>
								{isEditing ? "Guardar Cambios" : "Crear Banner"}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
