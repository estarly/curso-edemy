"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const LatestBlog = () => {
	return (
		<div className="blog-area pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">Our New</span>
					<h2 className="playfair-display-font">
						Check Out Our Latest Blog
					</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
				</div>

				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="single-blog-post-box">
							<div className="post-image">
								<Link href="#" className="d-block">
									<Image
										src="/images/yoga-blog-img1.jpg"
										width={750}
										height={499}
										alt="image"
									/>
								</Link>
							</div>
							<div className="post-content">
								<Link href="#" className="category">
									Yoga
								</Link>
								<h3 className="playfair-display-font">
									<Link href="#">
										Surprising SUP Yoga Poses You’ll Want to
										Try This Summer
									</Link>
								</h3>
								<ul className="post-content-footer d-flex justify-content-between align-items-center">
									<li>
										<div className="post-author d-flex align-items-center">
											<Image
												src="/images/user1.jpg"
												width={300}
												height={300}
												className="rounded-circle"
												alt="image"
											/>
											<span>Alex Morgan</span>
										</div>
									</li>
									<li>
										<i className="flaticon-calendar"></i>{" "}
										April 30, 2020
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-blog-post-box">
							<div className="post-image">
								<Link href="#" className="d-block">
									<Image
										src="/images/yoga-blog-img2.jpg"
										width={750}
										height={499}
										alt="image"
									/>
								</Link>
							</div>
							<div className="post-content">
								<Link href="#" className="category">
									YTT
								</Link>
								<h3 className="playfair-display-font">
									<Link href="#">
										7 Things I Learned From Doing One of
										Those Social Media Yoga
									</Link>
								</h3>
								<ul className="post-content-footer d-flex justify-content-between align-items-center">
									<li>
										<div className="post-author d-flex align-items-center">
											<Image
												src="/images/user2.jpg"
												width={300}
												height={300}
												className="rounded-circle"
												alt="image"
											/>
											<span>Sarah Taylor</span>
										</div>
									</li>
									<li>
										<i className="flaticon-calendar"></i>{" "}
										April 29, 2020
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
						<div className="single-blog-post-box">
							<div className="post-image">
								<Link href="#" className="d-block">
									<Image
										src="/images/yoga-blog-img3.jpg"
										width={750}
										height={499}
										alt="image"
									/>
								</Link>
							</div>
							<div className="post-content">
								<Link href="#" className="category">
									Yoga
								</Link>
								<h3 className="playfair-display-font">
									<Link href="#">
										10 Ways to Get Real About Your Body's
										Limitations & Avoid
									</Link>
								</h3>
								<ul className="post-content-footer d-flex justify-content-between align-items-center">
									<li>
										<div className="post-author d-flex align-items-center">
											<Image
												src="/images/user3.jpg"
												width={300}
												height={300}
												className="rounded-circle"
												alt="image"
											/>
											<span>David Warner</span>
										</div>
									</li>
									<li>
										<i className="flaticon-calendar"></i>{" "}
										April 28, 2020
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LatestBlog;
