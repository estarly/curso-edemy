"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeartButton from "../HeartButton";

const CourseCardOne = ({id,
	title,
	slug,
	description,
	image,
	regular_price,
	lessons,
	user,
	assets,
	category,
	enrolments,
	grid = "col-lg-6 col-md-12",
	currentUser}) => {
	return (
		<div className={grid}>
			<div className="single-courses-item without-box-shadow">
				<div className="row align-items-center">
					<div className="col-lg-4 col-md-4">
						<div className="courses-image">
							<div className="courses-image-square">
								<Image
									src={image || "/images/landing/categories/categorie01.jpg"}
									alt="image"
									fill
									style={{ objectFit: "cover", objectPosition: "center" }}
									className="rounded-md"
								/>
								<Link
									href={`/course/${slug}/${id}`}
									className="absolute inset-0 z-10"
								></Link>
							</div>
						</div>
					</div>

					<div className="col-lg-8 col-md-8">
						<div className="courses-content">
							<HeartButton currentUser={currentUser} courseId={id} />
							{/*<span className="price">{regular_price}</span>*/}

							<h3>
								<Link href={`/course/${slug}/${id}`}>
									{title}
								</Link>
								{category && <span className="text-danger">{category.name}</span>}
							</h3>
							<p dangerouslySetInnerHTML={{ __html: description }}></p>

							<ul className="courses-content-footer d-flex justify-content-between align-items-center">
								<li>
									<i className="flaticon-agenda"></i>{" "}
									<strong>{assets.length} Lecciones</strong>
								</li>
								<li>
									<i className="flaticon-people"></i>{" "}
									<strong>{enrolments.length} Estudiantes</strong>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.courses-image-square {
					position: relative;
					width: 100%;
					padding-top: 100%;
					overflow: hidden;
					border-radius: 0.5rem;
					min-width: 120px;
					min-height: 120px;
					max-width: 500px;
					max-height: 500px;
				}
				.courses-image-square img,
				.courses-image-square span {
					position: absolute !important;
					top: 0;
					left: 0;
					width: 100% !important;
					height: 100% !important;
					object-fit: cover;
					object-position: center;
				}
			`}</style>
		</div>
	);
};

export default CourseCardOne;
