"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Courses = () => {
	return (
		<div className="courses-area ptb-100">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">Go at your own pace</span>
					<h2>The World's Largest Selection Of Courses</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
				</div>

				<div className="row">
					<div className="col-lg-6 col-md-12">
						<div className="single-courses-item without-box-shadow">
							<div className="row align-items-center">
								<div className="col-lg-4 col-md-4">
									<div className="courses-image">
										<Image
											src="/images/courses-small/courses-small1.jpg"
											width={380}
											height={380}
											alt="image"
										/>

										<Link
											href="/single-courses-1"
											className="link-btn"
										></Link>
									</div>
								</div>

								<div className="col-lg-8 col-md-8">
									<div className="courses-content">
										<Link href="#" className="fav">
											<i className="flaticon-heart"></i>
										</Link>
										<span className="price">$39</span>

										<h3>
											<Link href="/single-courses-1">
												Agile Crash Course: Agile
												Project Management
											</Link>
										</h3>

										<ul className="courses-content-footer d-flex justify-content-between align-items-center">
											<li>
												<i className="flaticon-agenda"></i>{" "}
												15 Lessons
											</li>
											<li>
												<i className="flaticon-people"></i>{" "}
												145 Students
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="single-courses-item without-box-shadow">
							<div className="row align-items-center">
								<div className="col-lg-4 col-md-4">
									<div className="courses-image">
										<Image
											src="/images/courses-small/courses-small2.jpg"
											width={380}
											height={380}
											alt="image"
										/>

										<Link
											href="/single-courses-1"
											className="link-btn"
										></Link>
									</div>
								</div>

								<div className="col-lg-8 col-md-8">
									<div className="courses-content">
										<Link href="#" className="fav">
											<i className="flaticon-heart"></i>
										</Link>
										<span className="price">$99</span>
										<h3>
											<Link href="/single-courses-1">
												Vue JS 2 - The Complete Guide
												(incl. Vue Router & Vuex)
											</Link>
										</h3>
										<ul className="courses-content-footer d-flex justify-content-between align-items-center">
											<li>
												<i className="flaticon-agenda"></i>{" "}
												14 Lessons
											</li>
											<li>
												<i className="flaticon-people"></i>{" "}
												100 Students
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="single-courses-item without-box-shadow">
							<div className="row align-items-center">
								<div className="col-lg-4 col-md-4">
									<div className="courses-image">
										<Image
											src="/images/courses-small/courses-small3.jpg"
											width={380}
											height={380}
											alt="image"
										/>

										<Link
											href="/single-courses-1"
											className="link-btn"
										></Link>
									</div>
								</div>

								<div className="col-lg-8 col-md-8">
									<div className="courses-content">
										<Link href="#" className="fav">
											<i className="flaticon-heart"></i>
										</Link>
										<span className="price">$49</span>

										<h3>
											<Link href="/single-courses-1">
												The Python Bible™ | Everything
												You Need to Program in Python
											</Link>
										</h3>

										<ul className="courses-content-footer d-flex justify-content-between align-items-center">
											<li>
												<i className="flaticon-agenda"></i>{" "}
												11 Lessons
											</li>
											<li>
												<i className="flaticon-people"></i>{" "}
												104 Students
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="single-courses-item without-box-shadow">
							<div className="row align-items-center">
								<div className="col-lg-4 col-md-4">
									<div className="courses-image">
										<Image
											src="/images/courses-small/courses-small4.jpg"
											width={380}
											height={380}
											alt="image"
										/>

										<Link
											href="/single-courses-1"
											className="link-btn"
										></Link>
									</div>
								</div>

								<div className="col-lg-8 col-md-8">
									<div className="courses-content">
										<Link href="#" className="fav">
											<i className="flaticon-heart"></i>
										</Link>
										<span className="price">$79</span>

										<h3>
											<Link href="/single-courses-1">
												Mathematical Foundation For
												Machine Learning and AI
											</Link>
										</h3>

										<ul className="courses-content-footer d-flex justify-content-between align-items-center">
											<li>
												<i className="flaticon-agenda"></i>{" "}
												14 Lessons
											</li>
											<li>
												<i className="flaticon-people"></i>{" "}
												100 Students
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="single-courses-item without-box-shadow">
							<div className="row align-items-center">
								<div className="col-lg-4 col-md-4">
									<div className="courses-image">
										<Image
											src="/images/courses-small/courses-small6.jpg"
											width={380}
											height={380}
											alt="image"
										/>

										<Link
											href="/single-courses-1"
											className="link-btn"
										></Link>
									</div>
								</div>

								<div className="col-lg-8 col-md-8">
									<div className="courses-content">
										<Link href="#" className="fav">
											<i className="flaticon-heart"></i>
										</Link>
										<span className="price">$59</span>

										<h3>
											<Link href="/single-courses-1">
												The Ultimate Drawing Course -
												Beginner to Advanced
											</Link>
										</h3>

										<ul className="courses-content-footer d-flex justify-content-between align-items-center">
											<li>
												<i className="flaticon-agenda"></i>{" "}
												09 Lessons
											</li>
											<li>
												<i className="flaticon-people"></i>{" "}
												150 Students
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="single-courses-item without-box-shadow">
							<div className="row align-items-center">
								<div className="col-lg-4 col-md-4">
									<div className="courses-image">
										<Image
											src="/images/courses-small/courses-small7.jpg"
											width={380}
											height={380}
											alt="image"
										/>

										<Link
											href="/single-courses-1"
											className="link-btn"
										></Link>
									</div>
								</div>

								<div className="col-lg-8 col-md-8">
									<div className="courses-content">
										<Link href="#" className="fav">
											<i className="flaticon-heart"></i>
										</Link>
										<span className="price">$89</span>

										<h3>
											<Link href="/single-courses-1">
												PyTorch: Deep Learning and
												Artificial Intelligence
											</Link>
										</h3>

										<ul className="courses-content-footer d-flex justify-content-between align-items-center">
											<li>
												<i className="flaticon-agenda"></i>{" "}
												20 Lessons
											</li>
											<li>
												<i className="flaticon-people"></i>{" "}
												200 Students
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-12 col-md-12">
						<div className="courses-info">
							<Link href="/courses" className="default-btn">
								<i className="flaticon-user"></i>View All
								Courses<span></span>
							</Link>
							<p>
								Get into details now?​{" "}
								<Link href="/courses">
									PM Master's Program
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
