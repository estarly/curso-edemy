"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const TopSellingCourses = () => {
	return (
		<>
			<div className="kitchen-courses-area ptb-100">
				<div className="container">
					<div className="section-title">
						<span className="sub-title">Go At Your Own Pace</span>
						<h2 className="font-weight-black">
							Top Selling Courses
						</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
					</div>

					<div className="row justify-content-center">
						<div className="col-xl-4 col-lg-6 col-md-6">
							<div className="single-courses-box">
								<div className="courses-image">
									<Link
										href="/single-courses-1"
										className="d-block image"
									>
										<Image
											src="/images/kitchen-home/kitchen-1.jpg"
											width={850}
											height={482}
											alt="image"
										/>
									</Link>
									<button type="button" className="fav">
										<i className="flaticon-heart"></i>
									</button>
									<div className="price shadow">$39</div>
								</div>

								<div className="courses-content">
									<div className="course-author d-flex align-items-center">
										<Image
											src="/images/user/user1.jpg"
											width={300}
											height={300}
											className="rounded-circle"
											alt="image"
										/>
										<span>Alex Morgan</span>
									</div>

									<h3 className="font-weight-black">
										<Link href="/single-courses-1">
											Entrepreneurship in Food and
											Beverage
										</Link>
									</h3>

									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et.
									</p>
									<ul className="courses-box-footer d-flex justify-content-between align-items-center">
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

						<div className="col-xl-4 col-lg-6 col-md-6">
							<div className="single-courses-box">
								<div className="courses-image">
									<Link
										href="/single-courses-1"
										className="d-block image"
									>
										<Image
											src="/images/kitchen-home/kitchen-2.jpg"
											width={850}
											height={482}
											alt="image"
										/>
									</Link>

									<button type="button" className="fav">
										<i className="flaticon-heart"></i>
									</button>

									<div className="price shadow">$49</div>
								</div>

								<div className="courses-content">
									<div className="course-author d-flex align-items-center">
										<Image
											src="/images/user/user2.jpg"
											width={300}
											height={300}
											className="rounded-circle"
											alt="image"
										/>
										<span>Sarah Taylor</span>
									</div>

									<h3 className="font-weight-black">
										<Link href="/single-courses-1">
											Become a Successful Baker with BBC
											Good Food
										</Link>
									</h3>

									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et.
									</p>
									<ul className="courses-box-footer d-flex justify-content-between align-items-center">
										<li>
											<i className="flaticon-agenda"></i>{" "}
											20 Lessons
										</li>
										<li>
											<i className="flaticon-people"></i>{" "}
											100 Students
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-lg-6 col-md-6">
							<div className="single-courses-box">
								<div className="courses-image">
									<Link
										href="/single-courses-1"
										className="d-block image"
									>
										<Image
											src="/images/kitchen-home/kitchen-3.jpg"
											width={850}
											height={482}
											alt="image"
										/>
									</Link>

									<button type="button" className="fav">
										<i className="flaticon-heart"></i>
									</button>

									<div className="price shadow">$59</div>
								</div>

								<div className="courses-content">
									<div className="course-author d-flex align-items-center">
										<Image
											src="/images/user/user3.jpg"
											width={300}
											height={300}
											className="rounded-circle"
											alt="image"
										/>
										<span>David Warner</span>
									</div>

									<h3 className="font-weight-black">
										<Link href="/single-courses-1">
											Exploring English: Food and Culture
										</Link>
									</h3>

									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et.
									</p>
									<ul className="courses-box-footer d-flex justify-content-between align-items-center">
										<li>
											<i className="flaticon-agenda"></i>{" "}
											20 Lessons
										</li>
										<li>
											<i className="flaticon-people"></i>{" "}
											150 Students
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-lg-6 col-md-6">
							<div className="single-courses-box">
								<div className="courses-image">
									<Link
										href="/single-courses-1"
										className="d-block image"
									>
										<Image
											src="/images/kitchen-home/kitchen-4.jpg"
											width={850}
											height={482}
											alt="image"
										/>
									</Link>

									<button type="button" className="fav">
										<i className="flaticon-heart"></i>
									</button>

									<div className="price shadow">$69</div>
								</div>

								<div className="courses-content">
									<div className="course-author d-flex align-items-center">
										<Image
											src="/images/user/user4.jpg"
											width={300}
											height={300}
											className="rounded-circle"
											alt="image"
										/>
										<span>James Anderson</span>
									</div>

									<h3 className="font-weight-black">
										<Link href="/single-courses-1">
											Learn How to Bake with BBC Good Food
										</Link>
									</h3>

									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et.
									</p>
									<ul className="courses-box-footer d-flex justify-content-between align-items-center">
										<li>
											<i className="flaticon-agenda"></i>{" "}
											20 Lessons
										</li>
										<li>
											<i className="flaticon-people"></i>{" "}
											150 Students
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-lg-6 col-md-6">
							<div className="single-courses-box">
								<div className="courses-image">
									<Link
										href="/single-courses-1"
										className="d-block image"
									>
										<Image
											src="/images/kitchen-home/kitchen-5.jpg"
											width={850}
											height={482}
											alt="image"
										/>
									</Link>

									<button type="button" className="fav">
										<i className="flaticon-heart"></i>
									</button>

									<div className="price shadow">$79</div>
								</div>

								<div className="courses-content">
									<div className="course-author d-flex align-items-center">
										<Image
											src="/images/user/user5.jpg"
											width={300}
											height={300}
											className="rounded-circle"
											alt="image"
										/>
										<span>Alex Morgan</span>
									</div>

									<h3 className="font-weight-black">
										<Link href="/single-courses-1">
											Nutrition: Healthy Cooking, Healthy
											Living
										</Link>
									</h3>

									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et.
									</p>
									<ul className="courses-box-footer d-flex justify-content-between align-items-center">
										<li>
											<i className="flaticon-agenda"></i>{" "}
											20 Lessons
										</li>
										<li>
											<i className="flaticon-people"></i>{" "}
											150 Students
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-lg-6 col-md-6">
							<div className="single-courses-box">
								<div className="courses-image">
									<Link
										href="/single-courses-1"
										className="d-block image"
									>
										<Image
											src="/images/kitchen-home/kitchen-6.jpg"
											width={850}
											height={482}
											alt="image"
										/>
									</Link>

									<button type="button" className="fav">
										<i className="flaticon-heart"></i>
									</button>

									<div className="price shadow">$79</div>
								</div>
								<div className="courses-content">
									<div className="course-author d-flex align-items-center">
										<Image
											src="/images/user/user6.jpg"
											width={300}
											height={300}
											className="rounded-circle"
											alt="image"
										/>
										<span>David Warner</span>
									</div>

									<h3 className="font-weight-black">
										<Link href="/single-courses-1">
											Introduction to Sustainable
											Practices in Food Service
										</Link>
									</h3>

									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et.
									</p>
									<ul className="courses-box-footer d-flex justify-content-between align-items-center">
										<li>
											<i className="flaticon-agenda"></i>{" "}
											20 Lessons
										</li>
										<li>
											<i className="flaticon-people"></i>{" "}
											150 Students
										</li>
									</ul>
								</div>
							</div>
						</div>

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
