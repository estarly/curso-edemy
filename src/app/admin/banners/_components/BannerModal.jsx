import React, { useState, useEffect } from "react";
import ImageUploader from "@/app/admin/banners/_components/ImageUploader";

export const BannerModal = ({ show, onClose, banner, onSave, isEditing = false }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    url: "",
    image: "",
    status: 1,
    order: 0
  });

  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (banner && isEditing) {
      setFormData({
        name: banner.name || "",
        description: banner.description || "",
        url: banner.url || "",
        image: banner.image || "",
        status: banner.status || 1,
        order: banner.order || 0
      });
    } else if (!isEditing) {
      setFormData({
        name: "",
        description: "",
        url: "",
        image: "",
        status: 1,
        order: 0
      });
      setImageFile(null);
    }
  }, [banner, isEditing]);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? (checked ? 1 : 0) : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("url", formData.url);
    formDataToSend.append("status", formData.status);
    formDataToSend.append("order", parseInt(formData.order));

    if (formData.image && !formData.image.startsWith('blob:')) {
      formDataToSend.append("image", formData.image);
    }

    if (imageFile) {
      formDataToSend.append("imageFile", imageFile, imageFile.name || `banner-image-${Date.now()}.png`);
    }

    if (isEditing && banner && banner.id) {
      formDataToSend.append("id", banner.id);
    }

    onSave(formDataToSend);
    onClose();
  };

  const handleImageUpload = (value) => {
    if (value && typeof value === 'object' && value.url) {
      if (value.url.startsWith('blob:')) {
        fetch(value.url)
          .then(response => response.blob())
          .then(blob => {
            const file = new File([blob], `banner-image-${Date.now()}.png`, { type: blob.type });
            setImageFile(file);

            setFormData({
              ...formData,
              image: value.url
            });
          })
          .catch(error => {
            console.error('Error al obtener el blob:', error);
          });
      } else {
        setFormData({
          ...formData,
          image: value.url
        });
      }
    } else if (typeof value === 'string') {
      setFormData({
        ...formData,
        image: value
      });
    } else if (value instanceof File) {
      setImageFile(value);
      const previewUrl = URL.createObjectURL(value);
      setFormData({
        ...formData,
        image: previewUrl
      });
    } else {
      console.warn('Formato de imagen no reconocido:', value);
    }
  };

  if (!show) return null;

  return (
    <>
      <div className="modal-backdrop" style={{ opacity: 0.5 }}></div>
      <div
        className="modal d-block"
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
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
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control bg-light"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Descripción
                </label>
                <textarea
                  className="form-control bg-light"
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="url" className="form-label">
                  URL
                </label>
                <input
                  type="url"
                  className="form-control bg-light"
                  id="url"
                  value={formData.url}
                  onChange={handleChange}
                  placeholder="https://ejemplo.com"
                  required
                />
              </div>

              <div className="mb-3">
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

              <div className="mb-3">
                <ImageUploader
                  type="banner"
                  onChange={handleImageUpload}
                />
                {imageFile && (
                  <div className="mt-2">
                    <small>Archivo seleccionado: {imageFile.name}</small>
                  </div>
                )}
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="status"
                  checked={formData.status === 1}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      status: e.target.checked ? 1 : 0
                    });
                  }}
                />
                <label className="form-check-label" htmlFor="status">
                  Activo
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                {isEditing ? "Guardar Cambios" : "Crear Banner"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};