"use client";

import React from "react";
import Link from "next/link";
import CourseCard from "../Shared/CourseCard";

const PopularCourses = ({ courses, currentUser }) => {
	return (
		<div className="courses-area pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">Go at your own pace</span>
					<h2>Popular Project Management Courses</h2>
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

					<div className="col-lg-12 col-md-12">
						<div className="courses-info">
							<Link href="/courses-2" className="default-btn">
								<i className="flaticon-user"></i> View All
								Courses <span></span>
							</Link>

							<p>
								Get into details now?​{" "}
								<Link href="/courses-2">
									PM Masters Program
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PopularCourses;
