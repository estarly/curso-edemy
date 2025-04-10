import React, { useState, useEffect } from "react";
import ImageUploader from "../../banners/_components/ImageUploader";

export const CategoryModal = ({ show, onClose, category, onSave, isEditing = false }) => {
  const [formData, setFormData] = useState({
    name: "",
    status: 1,
    logo: ""
  });

  useEffect(() => {
    if (category && isEditing) {
      setFormData({
        name: category.name || "",
        status: category.status || 1,
        logo: category.logo || "",
        file: category.file || ""
      });
    } else if (!isEditing) {
      setFormData({
        name: "",
        status: 1,
        logo: "",
        file: ""
      });
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
    if (isEditing) {
      onSave({
        ...category,
        name: formData.name,
        status: formData.status,
        logo: formData.logo,
        file: formData.file
      });
    } else {
      onSave({
        name: formData.name,
        status: formData.status,
        logo: formData.logo,
        file: formData.file
      });
    }
    onClose();
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
                <label htmlFor="logo" className="form-label">
                  URL del Logo
                </label>
               
                <input
                  type="text"
                  className="form-control bg-light"
                  id="logo"
                  value={formData.logo}
                  onChange={handleChange}
                />
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
              <div className="mb-3">
                  <ImageUploader type="category" onChange={(value) => {
                    console.log('value', value);
                    setFormData({
                      ...formData,
                      file: value
                    });
                  }} />
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