"use client";

import React from "react";
import Image from "next/image";
import CourseCardTwo from "../Shared/CourseCardTwo";

const CoursesArea = () => {
	return (
		<div className="courses-area bg-f5f7fa pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">Go At Your Own Pace</span>
					<h2>The World's Largest Selection Of Courses</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
				</div>

				<div className="shorting">
					<div className="row">
						<CourseCardTwo />
						<CourseCardTwo />
						<CourseCardTwo />
						<CourseCardTwo />
						<CourseCardTwo />
						<CourseCardTwo />
					</div>
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

export default CoursesArea;
