"use client";

import React from "react";
import AddToCartButton from "./AddToCartButton";

const CoursesDetailsSidebar = ({
	id,
	title,
	slug,
	image,
	regular_price,
	duration,
	lessons,
	access_time,
	user,
}) => {
	return (
		<>
			<div className="courses-details-info">
				<div className="image">
					<img src={image} alt="image" />
				</div>

				<ul className="info">
					<li className="price">
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-tag"></i> Precio
							</span>
							${regular_price}
						</div>
					</li>
					<li>
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-teacher"></i> Instructor
							</span>
							{user.name}
						</div>
					</li>
					<li>
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-time"></i> Duración
							</span>
							{duration}
						</div>
					</li>
					<li>
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-distance-learning"></i>{" "}
								Lecciones
							</span>
							{lessons}
						</div>
					</li>
					<li>
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-web"></i> Inscritos
							</span>
							255 estudiantes
						</div>
					</li>
					<li>
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-lock"></i> Acceso
							</span>
							{access_time}
						</div>
					</li>
				</ul>

				<AddToCartButton
					id={id}
					title={title}
					slug={slug}
					regular_price={regular_price}
					image={image}
				/>

				<div className="courses-share">
					<div className="share-info">
						<span>
							Compartir este curso <i className="flaticon-share"></i>
						</span>

						<ul className="social-link">
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
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default CoursesDetailsSidebar;
