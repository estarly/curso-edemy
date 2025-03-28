import React from "react";

export const CategoriesTable = ({
                                  categories,
                                  onEditClick,
                                  onDeleteClick
                                }) => {
  return (
    <div className="table-responsive">
      <table className="table align-middle table-hover fs-14">
        <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nombre</th>
          <th scope="col">Logo</th>
          <th scope="col">Estado</th>
          <th scope="col">Fecha de Creación</th>
          <th scope="col">Acciones</th>
        </tr>
        </thead>

        <tbody>
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>
                {category.logo ? (
                  <img
                    src={category.logo}
                    alt={category.name}
                    width="40"
                    height="40"
                    className="rounded"
                  />
                ) : (
                  <span className="text-muted">Sin logo</span>
                )}
              </td>
              <td>
                  <span className={`badge ${category.status === 1 ? 'bg-success' : 'bg-danger'}`}>
                    {category.status === 1 ? 'Activo' : 'Inactivo'}
                  </span>
              </td>
              <td>
                {new Date(category.created_at).toLocaleDateString()}
              </td>
              <td>
                <div className="d-flex gap-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => onEditClick(category)}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => onDeleteClick(category)}
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
              <div className="text-center">No hay categorías disponibles</div>
            </td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  );
};