"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import CourseCard from "../Shared/CourseCard";

const TopSellingCourses = ({ courses }) => {
	return (
		<>
			<div className="courses-area instructor-courses">
				<div className="container">
					<div className="section-title instructor-title-color">
						<span className="sub-title">GO AT YOUR OWN PACE</span>
						<h2 className="el-messiri-font">Top Selling Courses</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipiscing
							elit sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
					</div>

					<div className="row justify-content-center">
						{courses.slice(0, 2).map((course) => (
							<CourseCard key={course.id} {...course} />
						))}

						<div className="col-lg-12 col-md-12">
							<div className="courses-info">
								<p>
									Get the most dedicated consultation for your
									life-changing course. Earn a certification
									for your effort and passion{" "}
									<Link href="/authentication">
										Join Fre Now
									</Link>
									.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="instructor-courses-wave-shape">
					<Image
						src="/images/instructor-home/courses/wave.png"
						width={1920}
						height={378}
						alt="image"
					/>
				</div>
				<div className="instructor-courses-shape-1">
					<Image
						src="/images/instructor-home/courses/shape1.png"
						width={203}
						height={213}
						alt="image"
					/>
				</div>
				<div className="instructor-courses-shape-2">
					<Image
						src="/images/instructor-home/courses/shape2.png"
						width={223}
						height={207}
						alt="image"
					/>
				</div>
			</div>
		</>
	);
};

export default TopSellingCourses;
