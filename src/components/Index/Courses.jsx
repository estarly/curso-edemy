"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import CourseCardOne from "../Shared/CourseCardOne";

const Courses = ({ courses, currentUser }) => {
	return (
		<div className="courses-area ptb-100">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">A tu ritmo</span>
					<h2>El mundo tiene miles de cursos</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
				</div>

				<div className="row">
					{courses.map((course) => (
						<CourseCardOne
							key={course.id}
							{...course}
							currentUser={currentUser}
						/>
					))}

					<div className="col-lg-12 col-md-12">
						<div className="courses-info">
							<Link href="/courses" className="default-btn">
								<i className="flaticon-user"></i>Ver todos los cursos
								<span></span>
							</Link>
							<p>
								¿Quieres saber más?​{" "}
								<Link href="/courses">
									Ver todos los cursos
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Courses;
