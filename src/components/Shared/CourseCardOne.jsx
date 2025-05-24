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
	enrolments,
	grid = "col-lg-6 col-md-12",
	currentUser}) => {
	return (
		<div className={grid}>
			<div className="single-courses-item without-box-shadow">
				<div className="row align-items-center">
					<div className="col-lg-4 col-md-4">
						<div className="courses-image">
							<Image
								src="/images/landing/course/small/courses-small7.jpg"
								width={380}
								height={380}
								alt="image"
							/>

							<Link
								href="/single-courses-1"
								className="link-btn"
							></Link>
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
							</h3>
							<p dangerouslySetInnerHTML={{ __html: description }}></p>

							<ul className="courses-content-footer d-flex justify-content-between align-items-center">
								<li>
									<i className="flaticon-agenda"></i>{" "}
									{/*{lessons}*/}
									555 Lecciones
								</li>
								<li>
									<i className="flaticon-people"></i>{" "}
									{/*{enrolments}*/}
									555 Estudiantes
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseCardOne;
