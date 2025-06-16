"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Swal from "sweetalert2";

const PAGE_SIZE = 5;

export default function TablePagination() {
    const [instructors, setInstructors] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [debouncedName, setDebouncedName] = useState("");

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedName(name);
            setPage(1);
        }, 1000);

        return () => {
            clearTimeout(handler);
        };
    }, [name]);

    useEffect(() => {
        setLoading(true);
        fetch(`/api/instructrs/pagination?page=${page}&name=${encodeURIComponent(debouncedName)}`)
            .then(res => res.json())
            .then(data => {
                setInstructors(data.items);
                setTotalPages(data.totalPages);
                setLoading(false);
            });
    }, [page, debouncedName]);

    // Función para cambiar el estatus del instructor
    const changeStatus = async (instructorId, status) => {
        let statusText = "";
        if (status === "active") statusText = "activar";
        else if (status === "inactive") statusText = "desactivar";
        else if (status === "deleted") statusText = "eliminar";

        const confirmResult = await Swal.fire({
            title: "¿Estás seguro?",
            text: `¿Quieres ${statusText} este instructor?${status === "deleted" ? " Esta acción no se puede deshacer." : ""}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, continuar",
            cancelButtonText: "Cancelar",
        });

        if (confirmResult.isConfirmed) {
            try {
                // Cambia la URL por la que corresponda a tu API
                const res = await fetch("/api/instructrs/change-status", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ instructorId, status }),
                });
                const data = await res.json();
                if (data.success) {
                    Swal.fire("¡Éxito!", "El estatus del instructor ha sido actualizado.", "success");
                    setInstructors((prev) =>
                        prev.map((i) =>
                            i.id === instructorId
                                ? { ...i, status: status === "active" ? 1 : status === "inactive" ? 0 : 2 }
                                : i
                        )
                    );
                } else {
                    Swal.fire("Error", data.error || "No se pudo actualizar el estatus.", "error");
                }
            } catch (err) {
                Swal.fire("Error", "Ocurrió un error inesperado.", "error");
            }
        }
    };

    return (
        <div>
            <div className="d-flex justify-content-end mb-2">
                <input
                    type="text"
                    className="form-control"
                    style={{ maxWidth: 250 }}
                    placeholder="Filtrar por nombre..."
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="table-responsive">
                <table className="table align-middle table-hover fs-14">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Correo Electrónico</th>
                            <th scope="col">Fecha de Registro</th>
                            <th scope="col">Cursos</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="6">
                                    <div className="text-center">Cargando...</div>
                                </td>
                            </tr>
                        ) : instructors.length > 0 ? (
                            instructors.map((instructor) => (
                                <tr key={instructor.id}>
                                    <td>{instructor.id}</td>
                                    <td>{instructor.name}</td>
                                    <td>{instructor.email}</td>
                                    <td>{new Date(instructor.created_at).toLocaleDateString()}</td>
                                    <td>{instructor.courses ? instructor.courses.length : 0}</td>
                                    <td>
                                        <div className="d-flex flex-row gap-2">
                                            {(instructor.status === 0 || instructor.status === 2) && (
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-success btn-sm"
                                                    onClick={() => changeStatus(instructor.id, "active")}
                                                    title="Activar instructor"
                                                >
                                                    Activar
                                                </button>
                                            )}
                                            {(instructor.status === 1 || instructor.status === 2) && (
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-warning btn-sm"
                                                    onClick={() => changeStatus(instructor.id, "inactive")}
                                                    title="Desactivar instructor"
                                                >
                                                    Desactivar
                                                </button>
                                            )}
                                            {(instructor.status !== 2) && (
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger btn-sm"
                                                    onClick={() => changeStatus(instructor.id, "deleted")}
                                                    title="Eliminar instructor"
                                                >
                                                    Eliminar
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">
                                    <div className="text-center">No hay instructores</div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <button
                        className={`btn btn-sm ${page === 1 ? "btn-secondary" : "btn-primary"}`}
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                        style={{ minWidth: 90 }}
                    >
                        Anterior
                    </button>
                    <span>
                        Página {page} de {totalPages}
                    </span>
                    <button
                        className={`btn btn-sm ${page === totalPages ? "btn-secondary" : "btn-primary"}`}
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                        style={{ minWidth: 90 }}
                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </div>
    );
} 