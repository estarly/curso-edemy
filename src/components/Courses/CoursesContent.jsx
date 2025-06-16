"use client";

import React from "react";
import CourseCard from "../Shared/CourseCard";
import Filter from "./Filter";

const CoursesContent = ({ courses, currentUser, categories }) => {
	return (
		<div className="courses-area courses-section pbt-70 pt-100">
			<div className="container">
				<div className="edemy-grid-sorting row align-items-center">
					<div className="col-lg-8 col-md-6 result-count">
						<h1>Cursos</h1>
						<p>
							Encontramos{" "}
							<span className="count">{courses.length}</span>{" "}
							cursos disponibles para ti
						</p>
					</div>

					<Filter categories={categories} />
				</div>

				<div className="row">
					{courses.map((course) => (
						<CourseCard
							key={course.id}
							{...course}
							currentUser={currentUser}
							statusProgress={false}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default CoursesContent;
