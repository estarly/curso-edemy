import React from "react";

export const ModulesByCourseTable = ({
                               items,
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
                  <div dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
              </td>
              
              <td>
                <div className="d-flex gap-2">
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => onDeleteClick(item)}
                  >
                    Eliminar del módulo
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