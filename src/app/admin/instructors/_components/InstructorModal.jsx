import React, { useState, useEffect } from "react";

export const InstructorModal = ({ show, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    designation: "",
    status: 1,
  });

  useEffect(() => {
    if (show) {
      setFormData({
        name: "",
        email: "",
        password: "",
        designation: "",
        status: 1,
      });
    }
  }, [show]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.password.trim()) {
      return;
    }

    onSave(formData);
    onClose();
  };

  if (!show) return null;

  return (
    <>
      <div className="modal-backdrop" style={{ opacity: 0.5 }}></div>
      <div className="modal d-block" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Registrar Instructor</h5>
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
                <label htmlFor="email" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control bg-light"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control bg-light"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="designation" className="form-label">
                  Cargo / Designación
                </label>
                <input
                  type="text"
                  className="form-control bg-light"
                  id="designation"
                  value={formData.designation}
                  onChange={handleChange}
                />
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
                      status: e.target.checked ? 1 : 0,
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
                Registrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
