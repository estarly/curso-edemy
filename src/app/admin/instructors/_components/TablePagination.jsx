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
                            <th scope="col">Email</th>
                            <th scope="col">Fecha de registro</th>
                            <th scope="col">Cursos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="5">
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
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">
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