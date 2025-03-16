"use client";

import React from "react";
import Link from "next/link";
import CourseCard from "../Shared/CourseCard";

const TopSellingCourses = ({ courses, currentUser }) => {
	return (
		<div className="courses-area ptb-100">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">GO AT YOUR OWN PACE</span>
					<h2>Top Selling Courses</h2>
					<p>
						Explore all of our courses and pick your suitable ones
						to enroll and start learning with us! We ensure that you
						will never regret it!
					</p>
				</div>

				<div className="row justify-content-center">
					{courses.map((course) => (
						<CourseCard
							key={course.id}
							{...course}
							currentUser={currentUser}
						/>
					))}

					<div className="col-lg-12 col-md-12">
						<div className="courses-info">
							<p>
								Enjoy the top notch learning methods and achieve
								next level skills! You are the creator of your
								own career & we will guide you through that.{" "}
								<Link href="/auth">Register Free Now!</Link>.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopSellingCourses;
