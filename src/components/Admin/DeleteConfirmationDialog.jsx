import React from "react";

const DeleteConfirmationDialog = ({
                                           show,
                                           onClose,
                                           onConfirm,
                                           title = "Confirmar eliminación",
                                           message = "¿Está seguro de que desea eliminar esta categoría? Esta acción no se puede deshacer."
                                         }) => {
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
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Cerrar"
              ></button>
            </div>
            <div className="modal-body p-4">
              <p>{message}</p>
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
                className="btn btn-danger"
                onClick={onConfirm}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteConfirmationDialog;