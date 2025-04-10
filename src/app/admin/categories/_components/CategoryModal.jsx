import React, { useState, useEffect } from "react";
import ImageUploader from "@/app/admin/banners/_components/ImageUploader";

export const CategoryModal = ({ show, onClose, category, onSave, isEditing = false }) => {
  const [formData, setFormData] = useState({
    name: "",
    status: 1,
    logo: ""
  });

  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (category && isEditing) {
      setFormData({
        name: category.name || "",
        status: category.status,
        logo: category.logo || ""
      });
    } else if (!isEditing) {
      setFormData({
        name: "",
        status: 0,
        logo: ""
      });
      setImageFile(null);
    }
  }, [category, isEditing]);

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
    formDataToSend.append("status", formData.status);

    if (formData.logo && !formData.logo.startsWith('blob:')) {
      formDataToSend.append("logo", formData.logo);
    }

    if (imageFile) {
      formDataToSend.append("imageFile", imageFile, imageFile.name || `category-logo-${Date.now()}.png`);
    }

    if (isEditing && category && category.id) {
      formDataToSend.append("id", category.id);
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
            const file = new File([blob], `category-logo-${Date.now()}.png`, { type: blob.type });
            setImageFile(file);

            setFormData({
              ...formData,
              logo: value.url
            });
          })
          .catch(error => {
            console.error('Error al obtener el blob:', error);
          });
      } else {
        setFormData({
          ...formData,
          logo: value.url
        });
      }
    } else if (typeof value === 'string') {
      setFormData({
        ...formData,
        logo: value
      });
    } else if (value instanceof File) {
      setImageFile(value);
      const previewUrl = URL.createObjectURL(value);
      setFormData({
        ...formData,
        logo: previewUrl
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
                {isEditing ? "Editar Categoría" : "Añadir Nueva Categoría"}
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
                <label className="form-label">
                  Logo
                </label>
                <ImageUploader
                  type="category"
                  onChange={handleImageUpload}
                />
                {imageFile && (
                  <div className="mt-2">
                    <small>Archivo seleccionado: {imageFile.name}</small>
                  </div>
                )}
                {formData.logo && (
                  <div className="mt-2">
                    <small>Vista previa:</small>
                    <img
                      src={formData.logo}
                      alt="Vista previa"
                      className="d-block mt-1 rounded"
                      style={{ maxWidth: "100px", maxHeight: "100px" }}
                    />
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
                {isEditing ? "Guardar Cambios" : "Crear Categoría"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};