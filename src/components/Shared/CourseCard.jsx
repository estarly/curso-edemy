"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { stripHtmlAndTruncate } from "@/utils/stripHtmlAndTruncate";
import HeartButton from "@/components/HeartButton";

const CourseCard = ({
	id,
	title,
	slug,
	description,
	image,
	regular_price,
	lessons,
	user,
	assets = [],
	enrolments = [],
	progress = 1,
	grid = "col-md-6 col-lg-4",
	currentUser,
	showHeartButton = true,
	urlDefault = "/course",
	statusProgress = true
}) => {
	return (
		<div className={grid}>
			<div className="single-courses-box  style-2">
				<div className="courses-image">
					<Link
						href={`${urlDefault}/${slug}/${id}`}
						className="d-block image"
					>
						<Image
							src={image || "/images/landing/course/default/courses8.jpg"}
							width={750}
							height={500}
							alt="image"
						/>
					</Link>
					<div className="video_box">
						<div className="d-table">
							<div className="d-table-cell">
								<Link
									href={`${urlDefault}/${slug}/${id}`}
								>
									<i className="bx bx-play"></i>
								</Link>
							</div>
						</div>
					</div>

					{showHeartButton && (
						<HeartButton currentUser={currentUser} courseId={id} />
					)}

					{/*<div className="price shadow">${regular_price}</div>*/}
				</div>

				<div className="courses-content">
					<div className="course-author d-flex align-items-center">
						<div className="d-flex align-items-center">
							<Image
								src={user.image || "/images/user1.jpg"}
								width={350}
								height={350}
								className="rounded-circle"
								alt="image"
							/>
							<span><strong>{user.name} </strong><br /> {user.designation}</span>
						</div>
						<div className="ms-auto">
							{(currentUser && statusProgress) && (
								<>
									{progress === 2 && (
										<div>
											<span className="badge bg-success text-white small">Completado</span>
										</div>
									)}
									{progress === 1 && (
										<div>
											<span className="badge bg-warning text-dark small">En progreso</span>
										</div>
									)}
								</>
							)}

						</div>
					</div>

					<h3>
						<Link href={`${urlDefault}/${slug}/${id}`}>{title}</Link>
					</h3>

					<p>{stripHtmlAndTruncate(description, 15)}</p>

					<ul className="courses-box-footer d-flex justify-content-between align-items-center">
						<li>
							<i className="flaticon-agenda"></i> {" "}
							{assets?.length} Lecciones
						</li>
						<li>
							<i className="flaticon-people"></i> {enrolments?.length} Estudiantes
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
