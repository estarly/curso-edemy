"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";

import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PAGE_SIZE = 50;

export default function TablePagination({ categories }) {
    const [courses, setCourses] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [categoryId, setCategoryId] = useState("");

    useEffect(() => {
        setLoading(true);
        const url = `/api/courses/pagination?page=${page}` + (categoryId ? `&categoryId=${categoryId}` : "");
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCourses(data.items);
                setTotalPages(data.totalPages);
                setLoading(false);
            });
    }, [page, categoryId]);

    const handleCategoryChange = (e) => {
        setCategoryId(e.target.value);
        setPage(1);
    };

    const changeStatus = async (courseId, status) => {
        const statusText = status === "Approved" ? "aprobar" : status === "Pending" ? "poner en revisión" : "eliminar";
        const confirmResult = await Swal.fire({
            title: `¿Estás seguro?`,
            text: `¿Quieres ${statusText} este curso?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, continuar",
            cancelButtonText: "Cancelar",
        });

        if (confirmResult.isConfirmed) {
            try {
                const res = await fetch("/api/courses/change-status", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ courseId, status }),
                });
                const data = await res.json();
                if (data.success) {
                    Swal.fire("¡Éxito!", "El estatus del curso ha sido actualizado.", "success");
                    // Actualizar el estado localmente sin recargar toda la lista
                    setCourses((prevCourses) =>
                        prevCourses.map((course) =>
                            course.id === courseId ? { ...course, status } : course
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

    const toggleVisibility = async (courseId, isVisible) => {
        const actionText = isVisible ? "ocultar" : "mostrar";
        const confirmResult = await Swal.fire({
            title: `¿Estás seguro?`,
            text: `¿Quieres ${actionText} este curso?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, continuar",
            cancelButtonText: "Cancelar",
        });

        if (confirmResult.isConfirmed) {
            try {
                const res = await fetch("/api/courses/toggle-visibility", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ courseId, isVisible: !isVisible }),
                });
                const data = await res.json();
                if (data.success) {
                    Swal.fire("¡Éxito!", `El curso ha sido ${actionText}do.`, "success");
                    // Actualizar el estado localmente sin recargar toda la lista
                    setCourses((prevCourses) =>
                        prevCourses.map((course) =>
                            course.id === courseId ? { ...course, isVisible: !isVisible } : course
                        )
                    );
                } else {
                    Swal.fire("Error", data.error || `No se pudo ${actionText} el curso.`, "error");
                }
            } catch (err) {
                Swal.fire("Error", "Ocurrió un error inesperado.", "error");
            }
        }
    };

    return (
        <div>
            <div className="mb-3 d-flex justify-content-end">
                <div>
                    <label className="form-label mb-1" htmlFor="categorySelect">Filtrar por categoría:</label>
                    <select
                        id="categorySelect"
                        className="form-select w-auto"
                        value={categoryId}
                        onChange={handleCategoryChange}
                    >
                        <option value="">Todas</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table align-middle table-hover fs-14">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Título</th>
                            <th scope="col">Categoría</th>
                            <th scope="col">Instructor</th>
                            <th scope="col">Lecciones</th>
                            <th scope="col">Estatus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="7">
                                    <div className="text-center">Cargando...</div>
                                </td>
                            </tr>
                        ) : courses.length > 0 ? (
                            courses.map((course) => (
                                <tr key={course.id}>
                                    <td>{course.id}</td>
                                    <td>
                                        <Link href={`/course/${course.slug}/${course.id}`} target="_blank">
                                            <strong>{course.title}</strong>
                                        </Link>
                                        <br />
                                        <span className="text-muted" dangerouslySetInnerHTML={{ __html: course.description }}></span>
                                    </td>
                                    <td>
                                    {course.category?.id} - {course.category?.name}
                                    </td>
                                    <td>
                                        {course.user?.name}
                                        <br />
                                        {course.user?.email}
                                    </td>
                                    <td>
                                        {course.assets ? course.assets.length : 0}
                                    </td>
                                    <td>
                                        <div className="d-flex flex-column align-items-start gap-2">
                                            {/* Badge de estatus actual arriba */}
                                            <span
                                                className={`badge 
                                                    ${course.status === "Approved" ? "bg-success" : ""}
                                                    ${course.status === "Pending" ? "bg-warning text-dark" : ""}
                                                    ${course.status === "Deleted" ? "bg-danger" : ""}
                                                `}
                                                style={{ fontSize: "1em" }}
                                            >
                                                {course.status === "Approved" && "Aprobado"}
                                                {course.status === "Pending" && "Revisión"}
                                                {course.status === "Deleted" && "Eliminado"}
                                            </span>

                                            {/* Botones debajo */}
                                            <div className="d-flex flex-row gap-2">
                                                {(course.status === "Approved" || course.status == "Deleted") && (
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-warning btn-sm"
                                                        onClick={() => changeStatus(course.id, "Pending")}
                                                        title="Enviar a revisión"
                                                    >
                                                        Revisar
                                                    </button>
                                                )}
                                                {(course.status === "Pending" || course.status == "Deleted") && (
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-success btn-sm"
                                                        onClick={() => changeStatus(course.id, "Approved")}
                                                        title="Aprobar curso"
                                                    >
                                                        Aprobar
                                                    </button>
                                                )}
                                                {/* Botón eliminar siempre visible */}
                                                {course.status !== "Deleted" && (
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger btn-sm"
                                                    onClick={() => changeStatus(course.id, "Deleted")}
                                                    title="Eliminar curso"
                                                >
                                                    Eliminar
                                                </button>
                                                )}
                                                <br />
                                                {/* Botón ocultar siempre visible */}                                                
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-info btn-sm"
                                                    onClick={() => toggleVisibility(course.id, !course.hide)}
                                                    title={course.hide ? "Ocultar curso" : "Mostrando curso"}
                                                >
                                                    {course.hide ? <FaEyeSlash /> : <FaEye />}
                                                </button>
                                                
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7">
                                    <div className="text-center">No hay cursos</div>
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