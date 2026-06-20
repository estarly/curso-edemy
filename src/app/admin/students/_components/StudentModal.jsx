import React, { useState, useEffect } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const StudentModal = ({
  show,
  onClose,
  onSave,
  item = null,
  isEditing = false,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    status: 1,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (show) {
      if (item && isEditing) {
        setFormData({
          name: item.name || "",
          email: item.email || "",
          password: "",
          confirmPassword: "",
          status: item.status ?? 1,
        });
      } else {
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          status: 1,
        });
      }
      setShowPassword(false);
      setShowConfirmPassword(false);
      setErrors({});
    }
  }, [show, item, isEditing]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    const nextValue = id === "email" ? value.toLowerCase() : value;

    setFormData({
      ...formData,
      [id]: nextValue,
    });

    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const email = formData.email.trim().toLowerCase();

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio.";
    }

    if (!email) {
      newErrors.email = "El correo electrónico es obligatorio.";
    } else if (!EMAIL_REGEX.test(email)) {
      newErrors.email = "Ingresa un correo electrónico válido.";
    }

    const hasPassword = formData.password.trim().length > 0;
    const hasConfirm = formData.confirmPassword.trim().length > 0;

    if (!isEditing || hasPassword || hasConfirm) {
      if (!hasPassword) {
        newErrors.password = isEditing
          ? "Ingresa la nueva contraseña o deja ambos campos vacíos."
          : "La contraseña es obligatoria.";
      } else if (formData.password.length < 6) {
        newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
      }

      if (!hasConfirm) {
        newErrors.confirmPassword = "Confirma la contraseña.";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Las contraseñas no coinciden.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      status: formData.status,
    };

    if (formData.password.trim()) {
      payload.password = formData.password;
    }

    if (isEditing && item?.id) {
      payload.id = item.id;
    }

    onSave(payload);
  };

  if (!show) return null;

  return (
    <>
      <div className="modal-backdrop" style={{ opacity: 0.5 }}></div>
      <div className="modal d-block" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {isEditing ? "Editar Estudiante" : "Registrar Estudiante"}
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
                  className={`form-control bg-light ${errors.name ? "is-invalid" : ""}`}
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && (
                  <div className="invalid-feedback d-block">{errors.name}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className={`form-control bg-light ${errors.email ? "is-invalid" : ""}`}
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <div className="invalid-feedback d-block">{errors.email}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Contraseña
                  {isEditing && (
                    <small className="text-muted ms-1">(opcional)</small>
                  )}
                </label>
                <div className="position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className={`form-control bg-light pe-5 ${errors.password ? "is-invalid" : ""}`}
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    minLength={6}
                    placeholder={isEditing ? "Dejar vacío para no cambiar" : ""}
                  />
                  <span
                    role="button"
                    tabIndex={0}
                    className="position-absolute top-50 end-0 translate-middle-y me-3 text-secondary"
                    style={{ cursor: "pointer", zIndex: 5, lineHeight: 1 }}
                    onClick={() => setShowPassword((prev) => !prev)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setShowPassword((prev) => !prev);
                      }
                    }}
                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                  >
                    <i className={`bx ${showPassword ? "bx-hide" : "bx-show"} fs-5`}></i>
                  </span>
                </div>
                {errors.password && (
                  <div className="invalid-feedback d-block">{errors.password}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirmar contraseña
                  {isEditing && (
                    <small className="text-muted ms-1">(opcional)</small>
                  )}
                </label>
                <div className="position-relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className={`form-control bg-light pe-5 ${errors.confirmPassword ? "is-invalid" : ""}`}
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    minLength={6}
                    placeholder={isEditing ? "Dejar vacío para no cambiar" : ""}
                  />
                  <span
                    role="button"
                    tabIndex={0}
                    className="position-absolute top-50 end-0 translate-middle-y me-3 text-secondary"
                    style={{ cursor: "pointer", zIndex: 5, lineHeight: 1 }}
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setShowConfirmPassword((prev) => !prev);
                      }
                    }}
                    aria-label={showConfirmPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                  >
                    <i className={`bx ${showConfirmPassword ? "bx-hide" : "bx-show"} fs-5`}></i>
                  </span>
                </div>
                {errors.confirmPassword && (
                  <div className="invalid-feedback d-block">{errors.confirmPassword}</div>
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
                {isEditing ? "Guardar cambios" : "Registrar"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
