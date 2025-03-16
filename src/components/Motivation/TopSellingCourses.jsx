"use client";

import React from "react";
import Link from "next/link";
import CourseCard from "../Shared/CourseCard";

const TopSellingCourses = ({ courses }) => {
	return (
		<>
			<div className="courses-area pb-100">
				<div className="container">
					<div className="section-title">
						<span className="sub-title">
							Learn At Your Own Pace
						</span>
						<h2 className="jost-font">Top Selling Courses</h2>
						<p>
							Explore all of our courses and pick your suitable
							ones to enroll and start learning with us! We ensure
							that you will never regret it!
						</p>
					</div>

					<div className="row justify-content-center">
						{courses.slice(0, 2).map((course) => (
							<CourseCard key={course.id} {...course} />
						))}

						<div className="col-xl-12 col-lg-12 col-md-12">
							<div className="courses-info">
								<p>
									Get the most dedicated consultation for your
									life-changing course. Earn a certification
									for your effort and passion{" "}
									<Link href="/authentication">
										Join Fre Now!
									</Link>
									.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TopSellingCourses;
