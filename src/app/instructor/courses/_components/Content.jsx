'use client';
import CategorySelect from "@/components/FormHelpers/CategorySelect";
import ProgressBarCourse from "@/components/Instructor/ProgressBarCourse";
import UserAvatar from "@/components/Layout/UserAvatar";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

export const Content = ({ categories }) => {
	const [courses, setCourses] = useState([]);
	const [categoryId, setCategoryId] = useState(null);
	const [category, setCategory] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	// Nueva función para obtener cursos paginados y filtrados
	const fetchCourses = async (catId = categoryId, pg = page) => {
		try {
			const res = await fetch(`/api/instructrs/courses/pagination?page=${pg}${catId ? `&categoryId=${catId}` : ""}`);
			const data = await res.json();
			if (data.success) {
				setCourses(data.data.items);
				setTotalPages(data.data.totalPages);
			}
		} catch (error) {
			setCourses([]);
		}
	};

	useEffect(() => {
		setCategoryId(categories[0].id);
		setCategory(categories);
	}, []);

	// useEffect para escuchar cambios en categoryId y page
	useEffect(() => {
		if (categoryId) {
			fetchCourses(categoryId, page);
		}
	}, [categoryId, page]);

	// Función para cambiar el status del curso
	const handleChangeStatus = async (courseId, newStatus) => {
		try {
			const res = await fetch("/api/instructrs/courses/change-status", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ courseId, status: newStatus }),
			});
			const data = await res.json();
			if (res.ok && data.success) {
				Swal.fire("¡Éxito!", "El curso ha sido actualizado.", "success");
				fetchCourses(categoryId, page);
			} else {
				Swal.fire("Error", data.error || "No se pudo actualizar el curso.", "error");
			}
		} catch (error) {
			Swal.fire("Error", "Ocurrió un error inesperado.", "error");
		}
	};

	// Cambiar publicación del curso (solo si está aprobado)
	const handleTogglePublish = async (courseId, publish) => {
		try {
			const res = await fetch("/api/instructrs/courses/toggle-publish", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ courseId, publish }),
			});
			const data = await res.json();
			if (res.ok && data.success) {
				Swal.fire(
					"¡Éxito!",
					publish
						? "El curso ya está visible en el catálogo."
						: "El curso ya no se muestra en el catálogo.",
					"success"
				);
				fetchCourses(categoryId, page);
			} else {
				Swal.fire("Error", data.error || "No se pudo actualizar el curso.", "error");
			}
		} catch (error) {
			Swal.fire("Error", "Ocurrió un error inesperado.", "error");
		}
	};

	const handleConfirmTogglePublish = (courseId, publish) => {
		const texto = publish
			? "¿Deseas publicar este curso en el catálogo para los estudiantes?"
			: "¿Deseas ocultar este curso del catálogo público?";
		Swal.fire({
			title: "Confirmar acción",
			text: texto,
			icon: publish ? "success" : "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Sí, continuar",
			cancelButtonText: "Cancelar",
		}).then((result) => {
			if (result.isConfirmed) {
				handleTogglePublish(courseId, publish);
			}
		});
	};

	// Función para eliminar el curso (cambiar status a Deleted)
	const handleDeleteCourse = (courseId) => {
		Swal.fire({
			title: "¿Estás seguro?",
			text: "Esta acción eliminará el curso. ¿Deseas continuar?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#d33",
			cancelButtonColor: "#3085d6",
			confirmButtonText: "Sí, eliminar",
			cancelButtonText: "Cancelar",
		}).then((result) => {
			if (result.isConfirmed) {
				handleChangeStatus(courseId, "Deleted");
			}
		});
	};

	return (
		<>
			<div className="pb-1">
				<div className="container">
					<div className="row justify-content-center">
						<div className="d-flex justify-content-between align-items-center mb-5" style={{ zIndex: 1000 }}>
							<h3 className="text-left">Mis Cursos</h3>
							<div className="align-items-center">
								<CategorySelect
									label="Filtrar por categoria"
									data={category}
									valueId={categoryId}
									onChange={setCategoryId}
								/>
							</div>
						</div>

						{courses.length > 0 ? (
							courses.map((course) => (
								<div key={course.id} className="col-lg-4 col-md-6">
									<div className="single-courses-box" style={{
										border: course.status === "Pending"
											? "4px solid #ffc107"
											: course.status === "Approved" && !course.publish
												? "4px solid #6c757d"
												: "none"
									}}>
										<div className="courses-image">
											<Link
												className="d-block image"
												href={`/course/${course.slug}/${course.id}`}
											>
												<Image
													src={course.image || "/images/landing/course/default/courses8.jpg"}
													alt={course.title || "Imagen del curso"}
													width={750}
													height={500}
												/>
											</Link>

											<div className="dropdown action-dropdown">
												<div className="icon">
													<i className="bx bx-dots-vertical-rounded"></i>
												</div>
												<ul className="dropdown-menu">
													<li>
														<Link
															className="dropdown-item"
															href={`/instructor/course/${course.id}/edit`}
														>
															{" "}
															<i className="bx bx-edit"></i>{" "}
															Editar Curso
														</Link>
													</li>
													{/* Publicar / ocultar del catálogo */}
													{course.status === "Approved" && (
														<li>
															<div className="css-bbq5bh">
																{course.publish ? (
																	<button
																		type="button"
																		className="dropdown-item"
																		style={{ color: "#856404", backgroundColor: "#fff3cd" }}
																		onClick={() => handleConfirmTogglePublish(course.id, false)}
																	>
																		<i className="bx bxs-hide"></i>{" "}
																		Quitar del catálogo
																	</button>
																) : (
																	<button
																		type="button"
																		className="dropdown-item"
																		style={{ color: "#155724", backgroundColor: "#d4edda" }}
																		onClick={() => handleConfirmTogglePublish(course.id, true)}
																	>
																		<i className="bx bxs-check-circle"></i>{" "}
																		Publicar en catálogo
																	</button>
																)}
															</div>
														</li>
													)}
													{course.status === "Pending" && (
														<li>
															<span className="dropdown-item text-muted" style={{ cursor: "default" }}>
																<i className="bx bx-time-five"></i> En revisión por el administrador
															</span>
														</li>
													)}
													{/* Botón Eliminar */}
													<li>
														<div className="css-bbq5bh">
															<button
																type="button"
																className="dropdown-item"
																style={{ color: "#721c24", backgroundColor: "#f8d7da" }} // Rojo claro
																onClick={() => handleDeleteCourse(course.id)}
															>
																<i className="bx bxs-trash"></i>{" "}
																Eliminar
															</button>
														</div>
													</li>
												</ul>
											</div>
										</div>

										<div className="courses-content" style={{ padding: 20 }}>

											<div className="course-author d-flex align-items-center">
												{course.user && (
													<UserAvatar
														user={course.user}
														size={45}
														className="me-2"
													/>
												)}
												<span><strong>{course.user?.name || "Instructor"} </strong><br /> {course.user?.designation || "Sin designación"}</span>
											</div>
											<h3>
												<Link
													href={`/course/${course.slug}/${course.id}`}
												>
													{course.title}
												</Link>
											</h3>
											<p className="mb-2">
												{course.status === "Pending" && (
													<span className="badge bg-warning text-dark">En revisión</span>
												)}
												{course.status === "Approved" && course.publish && (
													<span className="badge bg-success">Publicado</span>
												)}
												{course.status === "Approved" && !course.publish && (
													<span className="badge bg-secondary">Aprobado · No publicado</span>
												)}
											</p>

											<ul className="courses-box-footer d-flex pb-1 justify-content-between align-items-center">
												<li>
													<i className="flaticon-agenda"></i>{" "}
													{course.assets.length} Lecciones
												</li>
												<li>
													<i className="flaticon-people"></i>{" "}
													{course.studentCount} Estudiantes
												</li>
											</ul>
										</div>
									</div>
								</div>
							))
						) : (
							<div className="col-12 text-center py-5">
								<div className="empty-courses">
									<i className="bx bx-info-circle fs-1 text-muted mb-3"></i>
									<h4>No tienes cursos creados</h4>
									<p className="text-muted">Comienza a crear tu primer curso ahora</p>
									<Link
										href="/instructor/course/create"
										className="btn default-btn mt-3"
									>
										<i className="bx bx-video-plus me-2"></i> Crear Curso <span></span>
									</Link>
								</div>
							</div>
						)}
						{/* Paginador SOLO una vez, fuera del map */}
						{courses.length > 0 && (
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
						)}
					</div>
				</div>
				<br /><br /><br /><br />
			</div>
		</>
	);
};