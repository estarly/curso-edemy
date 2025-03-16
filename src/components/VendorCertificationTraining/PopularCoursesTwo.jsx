"use client";

import React from "react";
import Image from "next/image";
import CourseCard from "../Shared/CourseCard";

const PopularCoursesTwo = ({ courses, currentUser }) => {
	return (
		<div className="courses-area pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">Go at your own pace</span>
					<h2>Project Management Master's Program</h2>
					<p>
						Explore all of our courses and pick your suitable ones
						to enroll and start learning with us! We ensure that you
						will never regret it!
					</p>
				</div>

				<div className="row">
					{courses.slice(0, 2).map((course) => (
						<CourseCard
							key={course.id}
							{...course}
							currentUser={currentUser}
						/>
					))}
				</div>
			</div>

			<div className="shape16">
				<Image
					src="/images/shape15.png"
					width={1455}
					height={617}
					alt="image"
				/>
			</div>
		</div>
	);
};

export default PopularCoursesTwo;
