"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import CategorySelect from "@/components/FormHelpers/CategorySelect";

const PAGE_SIZE = 5;

export default function TablePaginationAssign({ modules }) {
    const [students, setStudents] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [debouncedName, setDebouncedName] = useState("");
    const [selectedModule, setSelectedModule] = useState(modules[0]?.id || "");

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
        fetch(`/api/students/pagination?page=${page}&moduleId=${selectedModule}&name=${encodeURIComponent(debouncedName)}`)
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    Swal.fire("Error", data.error, "error");
                } else {
                    setStudents(data.items);
                    setTotalPages(data.totalPages);
                    setLoading(false);
                }
            });
    }, [page, debouncedName,selectedModule]);

    const toggleModule = async (studentId, moduleActive) => {
        const action = moduleActive ? "deshabilitar" : "habilitar";
        const confirmResult = await Swal.fire({
            title: "¿Estás seguro?",
            text: `¿Quieres ${action} el módulo para este estudiante?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, continuar",
            cancelButtonText: "Cancelar",
        });

        if (!confirmResult.isConfirmed) return;

        try {
            let res, data;
            if (!moduleActive) {
                // Habilitar: asignar el módulo
                res = await fetch("/api/students/assign-module", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userId: studentId, moduleId: selectedModule, status: 1 }), //1 es habilitado
                });
                data = await res.json();
            } else {
                // Deshabilitar: aquí deberías llamar a un endpoint para eliminar la inscripción
                res = await fetch("/api/students/assign-module", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userId: studentId, moduleId: selectedModule, status: 0 }), //0 es deshabilitado
                });
                data = await res.json();
            }

            if (data.success) {
                Swal.fire("¡Éxito!", `El módulo ha sido ${action} correctamente.`, "success");
                setStudents((prev) =>
                    prev.map((s) =>
                        s.id === studentId
                            ? { ...s, moduleActive: !moduleActive }
                            : s
                    )
                );
            } else {
                Swal.fire("Error", data.error || "No se pudo actualizar el módulo.", "error");
            }
        } catch (err) {
            Swal.fire("Error", "Ocurrió un error inesperado.", "error");
        }
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                    <CategorySelect
                        label="Seleccione un módulo para asignar"
                        placeholder="Seleccione un módulo"
                        valueId={selectedModule}
                        data={modules}
                        onChange={setSelectedModule}
                    />
                    <div className="form-text mt-0">
                        Al seleccionar, este será el módulo para asignar.
                    </div>
                </div>
                <div>
                    <label className="form-label">Filtrar por nombre:</label>
                    <input
                        type="text"
                        className="form-control"
                        style={{ maxWidth: 250 }}
                        placeholder="Filtrar por nombre..."
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
            </div>
            <div className="table-responsive">
                <table className="table align-middle table-hover fs-14">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Email</th>
                            <th scope="col">Fecha de registro</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="5">
                                    <div className="text-center">Cargando...</div>
                                </td>
                            </tr>
                        ) : students.length > 0 ? (
                            students.map((student) => (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{new Date(student.created_at).toLocaleDateString()}</td>
                                    <td>
                                        <div className="d-flex flex-row gap-2">
                                            {/* Botón para habilitar/deshabilitar módulo */}
                                            {typeof student.moduleActive !== "undefined" && (
                                                <button
                                                    type="button"
                                                    className={`btn btn-outline-${student.moduleActive ? "warning" : "success"} btn-sm`}
                                                    onClick={() => toggleModule(student.id, student.moduleActive)}
                                                    title={student.moduleActive ? "Deshabilitar módulo" : "Habilitar módulo"}
                                                >
                                                    {student.moduleActive ? "Deshabilitar" : "Habilitar"}
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">
                                    <div className="text-center">No hay estudiantes</div>
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