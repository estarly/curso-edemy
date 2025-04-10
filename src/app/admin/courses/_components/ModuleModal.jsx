import React, { useState, useEffect } from "react";

export const ModuleModal = ({ show, onClose, module, onSave, isEditing = false }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: 1,
    logo: ""
  });

  useEffect(() => {
    if (module && isEditing) {
      setFormData({
        title: module.title || "",
        description: module.description || "",
        status: module.status || 1,
        logo: module.logo || ""
      });
    } else if (!isEditing) {
      setFormData({
        title: "",
        description: "",
        status: 1,
        logo: ""
      });
    }
  }, [module, isEditing]);

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
        ...module,
        title: formData.title,
        description: formData.description,
        status: formData.status,
        logo: formData.logo
      });
    } else {
      onSave({
        title: formData.title,
        description: formData.description,
        status: formData.status,
        logo: formData.logo
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
                {isEditing ? "Editar Módulo" : "Añadir Nuevo Módulo"}
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
                <label htmlFor="title" className="form-label">
                  Título
                </label>
                <input
                  type="text"
                  className="form-control bg-light"
                  id="title"
                  value={formData.title}
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
                {isEditing ? "Guardar Cambios" : "Crear Módulo"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};