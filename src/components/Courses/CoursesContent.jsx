"use client";

import React from "react";
import CourseCard from "../Shared/CourseCard";
import Filter from "./Filter";

const CoursesContent = ({ courses, currentUser }) => {
	return (
		<div className="courses-area courses-section pt-100 pb-70">
			<div className="container">
				<div className="edemy-grid-sorting row align-items-center">
					<div className="col-lg-8 col-md-6 result-count">
						<p>
							We found{" "}
							<span className="count">{courses.length}</span>{" "}
							courses available for you
						</p>
					</div>

					<Filter />
				</div>

				<div className="row">
					{courses.map((course) => (
						<CourseCard
							key={course.id}
							{...course}
							currentUser={currentUser}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default CoursesContent;
