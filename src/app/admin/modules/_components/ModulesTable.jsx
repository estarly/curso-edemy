import React from "react";

export const ModulesTable = ({
                               items,
                               onEditClick,
                               onDeleteClick
                             }) => {
  return (
    <div className="table-responsive">
      <table className="table align-middle table-hover fs-14">
        <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Título</th>
          <th scope="col">Descripción</th>
          <th scope="col">Estado</th>
          <th scope="col">Acciones</th>
        </tr>
        </thead>

        <tbody>
        {items && items.length > 0 ? (
          items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>
                <div className="max-300px max-height-60">
                  {item.description}
                </div>
              </td>
              <td>
                <span className={`badge ${item.status === 1 ? 'bg-success' : 'bg-danger'}`}>
                  {item.status === 1 ? 'Activo' : 'Inactivo'}
                </span>
              </td>
              <td>
                <div className="d-flex gap-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => onEditClick(item)}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => onDeleteClick(item)}
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">
              <div className="text-center">No hay elementos disponibles</div>
            </td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  );
};