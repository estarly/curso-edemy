"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const TopSellingCourses = () => {
	return (
		<div className="courses-area bg-image ptb-100">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">Learn At Your Own Pace</span>
					<h2 className="playfair-display-font">
						Top Selling Courses
					</h2>
					<p>
						Explore all of our courses and pick your suitable ones
						to enroll and start learning with us! We ensure that you
						will never regret it!
					</p>
				</div>

				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="single-courses-box">
							<div className="courses-image">
								<Link
									href="/single-courses-1"
									className="d-block image"
								>
									<Image
										src="/images/courses/health-img1.jpg"
										width={750}
										height={500}
										alt="image"
									/>
								</Link>
								<Link href="#" className="fav">
									<i className="flaticon-heart"></i>
								</Link>
								<div className="price bg-45a393 shadow">
									$39
								</div>
							</div>
							<div className="courses-content">
								<div className="course-author d-flex align-items-center">
									<Image
										src="/images/user1.jpg"
										width={300}
										height={300}
										className="rounded-circle"
										alt="image"
									/>
									<span>Alex Morgan</span>
								</div>
								<h3 className="playfair-display-font">
									<Link href="/single-courses-1">
										Diet And Nutrition Coach Certification
									</Link>
								</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore.
								</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-courses-box">
							<div className="courses-image">
								<Link
									href="/single-courses-1"
									className="d-block image"
								>
									<Image
										src="/images/courses/health-img2.jpg"
										width={750}
										height={500}
										alt="image"
									/>
								</Link>
								<Link href="#" className="fav">
									<i className="flaticon-heart"></i>
								</Link>
								<div className="price bg-45a393 shadow">
									$49
								</div>
							</div>
							<div className="courses-content">
								<div className="course-author d-flex align-items-center">
									<Image
										src="/images/user2.jpg"
										width={300}
										height={300}
										className="rounded-circle"
										alt="image"
									/>
									<span>Sarah Taylor</span>
								</div>
								<h3 className="playfair-display-font">
									<Link href="/single-courses-1">
										Internationally Accredited Diploma
										Certificate
									</Link>
								</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore.
								</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
						<div className="single-courses-box">
							<div className="courses-image">
								<Link
									href="/single-courses-1"
									className="d-block image"
								>
									<Image
										src="/images/courses/health-img3.jpg"
										width={750}
										height={500}
										alt="image"
									/>
								</Link>
								<Link href="#" className="fav">
									<i className="flaticon-heart"></i>
								</Link>
								<div className="price bg-45a393 shadow">
									$59
								</div>
							</div>
							<div className="courses-content">
								<div className="course-author d-flex align-items-center">
									<Image
										src="/images/user3.jpg"
										width={300}
										height={300}
										className="rounded-circle"
										alt="image"
									/>
									<span>David Warner</span>
								</div>
								<h3 className="playfair-display-font">
									<Link href="/single-courses-1">
										Nutrition Certification Diet & Meal
										Panning
									</Link>
								</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore.
								</p>
							</div>
						</div>
					</div>

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
