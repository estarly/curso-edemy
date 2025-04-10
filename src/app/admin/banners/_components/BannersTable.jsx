import React from "react";

export const BannersTable = ({
                               items,
                               onEditClick,
                               onDeleteClick
                             }) => {
  return (
    <div className="table-responsive">
      <table className="table align-middle table-hover fs-14">
        <thead>
        <tr>
          <th scope="col">Orden</th>
          <th scope="col">Descripción</th>
          <th scope="col">Imagen</th>
          <th scope="col">Estado</th>
          <th scope="col">Acciones</th>
        </tr>
        </thead>

        <tbody>
        {items && items.length > 0 ? (
          items.map((item) => (
              <tr key={item.id}>
                <td>{item.order}</td>
              <td>
                  <strong>{item.name}.</strong>
                <div className="max-300px max-height-80">
                  {item.description}
                </div>
              </td>
              <td>
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    width="80"
                    height="40"
                    className="rounded"
                  />
                ) : (
                  <span className="text-muted">Sin imagen</span>
                )}
                <br />
                {
                  item.url && (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-truncate d-inline-block fw-bold" style={{maxWidth: "100px"}}>
                      Visitar sitio
                    </a>
                  )
                }
              </td>
              <td>
                <span className={`badge ${item.status === 1 ? 'bg-success' : 'bg-warning text-black'}`}>
                  {item.status === 1 ? 'Activo' : 'Inactivo'}
                </span>
              </td>
              <td>
                <div className="d-flex flex-column flex-sm-row gap-2">
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
            <td colSpan="8">
              <div className="text-center">No hay banners disponibles</div>
            </td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  );
};