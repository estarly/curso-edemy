"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const TopSellingCourses = () => {
	return (
		<>
			<div className="courses-area oa-courses ptb-100">
				<div className="container">
					<div className="section-title oa-title-color">
						<span className="sub-title">GO AT YOUR OWN PACE</span>
						<h2>Top Selling Courses</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipiscing
							elit sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
					</div>

					<div className="row justify-content-center">
						<div className="col-lg-4 col-md-6">
							<div className="single-courses-box">
								<div className="courses-image">
									<Link
										href="/single-courses-1"
										className="d-block image"
									>
										<Image
											src="/images/online-art/courses/courses1.jpg"
											width={1050}
											height={720}
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

									<h3>
										<Link href="/single-courses-1">
											Complete Beginner's Guide to Digital
											Art
										</Link>
									</h3>

									<p>
										Lorem ipsum dolor sit amet consectetur
										adipiscing elit sed do eiusmod tempor
										incididunt ut labore et dolore.
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

						<div className="col-lg-4 col-md-6">
							<div className="single-courses-box">
								<div className="courses-image">
									<Link
										href="/single-courses-1"
										className="d-block image"
									>
										<Image
											src="/images/online-art/courses/courses2.jpg"
											width={1050}
											height={720}
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

									<h3>
										<Link href="/single-courses-1">
											How to Draw Cute Cartoon Characters
										</Link>
									</h3>

									<p>
										Lorem ipsum dolor sit amet consectetur
										adipiscing elit sed do eiusmod tempor
										incididunt ut labore et dolore.
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

						<div className="col-lg-4 col-md-6">
							<div className="single-courses-box">
								<div className="courses-image">
									<Link
										href="/single-courses-1"
										className="d-block image"
									>
										<Image
											src="/images/online-art/courses/courses3.jpg"
											width={1050}
											height={720}
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
									<h3>
										<Link href="/single-courses-1">
											Learn How to Make a Retro Digital
											Collage
										</Link>
									</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipiscing elit sed do eiusmod tempor
										incididunt ut labore et dolore.
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

						<div className="col-lg-4 col-md-6">
							<div className="single-courses-box">
								<div className="courses-image">
									<Link
										href="/single-courses-1"
										className="d-block image"
									>
										<Image
											src="/images/online-art/courses/courses4.jpg"
											width={1050}
											height={720}
											alt="image"
										/>
									</Link>

									<button type="button" className="fav">
										<i className="flaticon-heart"></i>
									</button>
									<div className="price shadow">$76</div>
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
										<span>James Andy</span>
									</div>

									<h3>
										<Link href="/single-courses-1">
											Digitally Painting Light and Color:
											Amateur to Master
										</Link>
									</h3>

									<p>
										Lorem ipsum dolor sit amet consectetur
										adipiscing elit sed do eiusmod tempor
										incididunt ut labore et dolore.
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

						<div className="col-lg-4 col-md-6">
							<div className="single-courses-box">
								<div className="courses-image">
									<Link
										href="/single-courses-1"
										className="d-block image"
									>
										<Image
											src="/images/online-art/courses/courses5.jpg"
											width={1050}
											height={720}
											alt="image"
										/>
									</Link>

									<button type="button" className="fav">
										<i className="flaticon-heart"></i>
									</button>
									<div className="price shadow">$87</div>
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
										<span>Jassica Hische</span>
									</div>

									<h3>
										<Link href="/single-courses-1">
											Draw, Sketch, Paint, and Design on
											Your iPad
										</Link>
									</h3>

									<p>
										Lorem ipsum dolor sit amet consectetur
										adipiscing elit sed do eiusmod tempor
										incididunt ut labore et dolore.
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

						<div className="col-lg-4 col-md-6">
							<div className="single-courses-box">
								<div className="courses-image">
									<Link
										href="/single-courses-1"
										className="d-block image"
									>
										<Image
											src="/images/online-art/courses/courses6.jpg"
											width={1050}
											height={720}
											alt="image"
										/>
									</Link>

									<button type="button" className="fav">
										<i className="flaticon-heart"></i>
									</button>
									<div className="price shadow">$99</div>
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
										<span>Chris Evans</span>
									</div>

									<h3>
										<Link href="/single-courses-1">
											Building Confidence Think Drawing:
											Art of Beginners
										</Link>
									</h3>

									<p>
										Lorem ipsum dolor sit amet consectetur
										adipiscing elit sed do eiusmod tempor
										incididunt ut labore et dolore.
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
			</div>
		</>
	);
};

export default TopSellingCourses;
