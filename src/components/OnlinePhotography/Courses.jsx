"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Courses = () => {
	return (
		<>
			<div className="ptb-100 op-courses-area position-relative">
				<div className="container">
					<div className="section-title">
						<span className="sub-title">Courses</span>
						<h2>
							Elevate Your Photography Game with Expert Coaching
						</h2>
					</div>

					<div className="row justify-content-center">
						<div className="col-xl-3 col-md-6">
							<div className="op-course-card">
								<div className="image">
									<Link href="/single-courses-2">
										<Image
											src="/images/online-photography/course-img1.jpg"
											width={936}
											height={1080}
											alt="course"
										/>
									</Link>
									<div className="price">$99</div>
								</div>

								<h3>
									<Link href="/single-courses-2">
										The Ultimate Photography Course For
										Beginners
									</Link>
								</h3>

								<div className="op-user d-flex align-items-center justify-content-between">
									<div className="d-flex align-items-center">
										<Image
											src="/images/user/user1.jpg"
											width={300}
											height={300}
											alt="user1"
										/>
										<h5>John Smith</h5>
									</div>
									<p>745 Students</p>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-md-6">
							<div className="op-course-card">
								<div className="image">
									<Link href="/single-courses-2">
										<Image
											src="/images/online-photography/course-img2.jpg"
											width={936}
											height={1080}
											alt="course"
										/>
									</Link>
									<div className="price">$75</div>
								</div>

								<h3>
									<Link href="/single-courses-2">
										Photography - Become a Better
										Photographer
									</Link>
								</h3>

								<div className="op-user d-flex align-items-center justify-content-between">
									<div className="d-flex align-items-center">
										<Image
											src="/images/user/user2.jpg"
											width={300}
											height={300}
											alt="user1"
										/>
										<h5>Alika Maya</h5>
									</div>
									<p>4078 Students</p>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-md-6">
							<div className="op-course-card">
								<div className="image">
									<Link href="/single-courses-2">
										<Image
											src="/images/online-photography/course-img3.jpg"
											width={936}
											height={1080}
											alt="course"
										/>
									</Link>
									<div className="price">$33</div>
								</div>

								<h3>
									<Link href="/single-courses-2">
										Photography - Creative Camera Confidence
									</Link>
								</h3>

								<div className="op-user d-flex align-items-center justify-content-between">
									<div className="d-flex align-items-center">
										<Image
											src="/images/user/user3.jpg"
											width={300}
											height={300}
											alt="user1"
										/>
										<h5>Robert Jack</h5>
									</div>
									<p>837 Students</p>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-md-6">
							<div className="op-course-card">
								<div className="image">
									<Link href="/single-courses-2">
										<Image
											src="/images/online-photography/course-img4.jpg"
											width={936}
											height={1080}
											alt="course"
										/>
									</Link>
									<div className="price">Free</div>
								</div>

								<h3>
									<Link href="/single-courses-2">
										The Ultimate Guide to Freelance
										Photography
									</Link>
								</h3>

								<div className="op-user d-flex align-items-center justify-content-between">
									<div className="d-flex align-items-center">
										<Image
											src="/images/user/user4.jpg"
											width={300}
											height={300}
											alt="user1"
										/>
										<h5>Eli John</h5>
									</div>
									<p>1189 Students</p>
								</div>
							</div>
						</div>
					</div>

					<div className="text-center mt-2">
						<Link href="/courses" className="default-btn">
							<i className="flaticon-user"></i>View More Courses
							<span></span>
						</Link>
					</div>
				</div>

				<Image
					src="/images/online-photography/shape4.png"
					width={175}
					height={175}
					alt="shape4"
					className="op-shape4 d-none d-xl-block"
				/>
			</div>
		</>
	);
};

export default Courses;
