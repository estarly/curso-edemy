"use client";

import React from "react";
import AddToCartButton from "./AddToCartButton";
import Swal from "sweetalert2";

const CoursesDetailsSidebar = ({
	id,
	title,
	slug,
	image,
	regular_price,
	duration,
	lessons,
	access_time,
	assets,
	enrolledUserIds,
	user,
	currentUser
}) => {
	const handleShareClick = () => {
		const courseUrl = `${window.location.origin}/courses/${slug}`; // Genera la URL del curso
		navigator.clipboard.writeText(courseUrl) // Copia la URL al portapapeles
			.then(() => {
				Swal.fire({
					title: "¡Enlace copiado!",
					text: "El enlace del curso ha sido copiado al portapapeles.",
					icon: "success",
					timer: 1500,
					showConfirmButton: false,
				});
			})
			.catch(() => {
				Swal.fire({
					title: "Error",
					text: "No se pudo copiar el enlace. Inténtalo de nuevo.",
					icon: "error",
					timer: 1500,
					showConfirmButton: false,
				});
			});
	};

	const handleEnrolmentClick = async () => {
		// Mostrar mensaje de confirmación
		const result = await Swal.fire({
			title: "¿Estás seguro de inscribirte?",
			text: "Serás asignado al curso: " + title + ".",
			icon: "question",
			showCancelButton: true,
			confirmButtonText: "Sí, inscribirme",
			cancelButtonText: "Cancelar",
		});

		if (result.isConfirmed) {
			try {
				// Enviar el ID del curso al endpoint de enrolamiento
				const response = await fetch("/api/enrolment/free", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ courseId: id }),
				});

				if (response.ok) {
					const data = await response.json();
					// Mostrar mensaje de éxito con el ID del enrolamiento
					Swal.fire({
						title: "¡Asignado al curso!",
						text: `Has sido asignado al curso: ${title}`,
						icon: "success",
						timer: 1500,
						showConfirmButton: false,
					});
				} else {
					const errorData = await response.json();
					Swal.fire({
						title: "¡Ya estás inscrito!",
						text: errorData.error || "Ya estás inscrito en este curso.",
						icon: "info",
						timer: 1500,
						showConfirmButton: false,
					});
				}
			} catch (error) {
				console.error("Error al inscribirse:", error);
				Swal.fire({
					title: "Error",
					text: "Hubo un problema al inscribirte.",
					icon: "error",
					timer: 1500,
					showConfirmButton: false,
				});
			}
		}
	};

	// Verifica si el usuario actual ya está inscrito
	const yaInscrito = enrolledUserIds?.some(e => e.userId === currentUser?.id);

	return (
		<>
			<div className="courses-details-info" style={{ marginTop: "-150px" }}>
				<div className="image">
					<img src={image} alt="image" />
				</div>

				<ul className="info">
					{/*<li className="price">
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-tag"></i> Precio
							</span>
							${regular_price}
						</div>
					</li>*/}
					<li>
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-teacher"></i> {user.name}
							</span>
						</div>
					</li>
					{/*<li>
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-time"></i> Xd
							</span>
							xD
						</div>
					</li>*/}
					<li>
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-distance-learning"></i>{" "}
								Lecciones
							</span>
							{assets.length}
						</div>
					</li>
					<li>
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-web"></i> Inscritos
							</span>
							{enrolledUserIds.length}
						</div>
					</li>
					<li>
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-lock"></i> Libre Acceso
							</span>
						</div>
					</li>
				</ul>

				{/*<AddToCartButton
					id={id}
					title={title}
					slug={slug}
					regular_price={regular_price}
					image={image}
				/>*/}
			
			{currentUser.role === 'USER' && (
				<button
					className={` w-100 ${yaInscrito ? "btn btn-secondary" : "default-btn"}`}
					onClick={handleEnrolmentClick}
					disabled={yaInscrito}
				>
					<i className={`${yaInscrito ? "flaticon-play" : "flaticon-shopping-cart"}`}></i>
					{" "}{yaInscrito ? " Continuar" : " Inscribirme"}
					<span></span>
				</button>
			)}

				<div className="courses-share">
					<div className="share-info">
						<span onClick={handleShareClick} style={{ cursor: "pointer" }}>
							Compartir este curso <i className="flaticon-share"></i>
						</span>

						{/*<ul className="social-link">
							<li>
								<a href="#" className="d-block" target="_blank">
									<i className="bx bxl-facebook"></i>
								</a>
							</li>
							<li>
								<a href="#" className="d-block" target="_blank">
									<i className="bx bxl-twitter"></i>
								</a>
							</li>
							<li>
								<a href="#" className="d-block" target="_blank">
									<i className="bx bxl-instagram"></i>
								</a>
							</li>
							<li>
								<a href="#" className="d-block" target="_blank">
									<i className="bx bxl-linkedin"></i>
								</a>
							</li>
						</ul>*/}
					</div>
				</div>
			</div>
		</>
	);
};

export default CoursesDetailsSidebar;
