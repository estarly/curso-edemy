"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const LatestNews = () => {
	return (
		<div className="blog-area ptb-100">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">News and Blogs</span>
					<h2>Our Latest Publications</h2>
					<p>
						We always give extra care to our student's skills
						improvements and feel excited to share our latest
						research and learnings!
					</p>
				</div>

				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6">
						<div className="single-blog-post">
							<div className="post-image">
								<Link href="/blog/details" className="d-block">
									<Image
										src="/images/blog/blog1.jpg"
										width={750}
										height={499}
										alt="image"
									/>
								</Link>
							</div>
							<div className="post-content">
								<Link href="#" className="category">
									Education
								</Link>
								<h3>
									<Link href="/blog/details">
										University Admissions Could Face
										Emergency Controls
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
						<div className="single-blog-post">
							<div className="post-image">
								<Link href="/blog/details" className="d-block">
									<Image
										src="/images/blog/blog2.jpg"
										width={750}
										height={499}
										alt="image"
									/>
								</Link>
							</div>
							<div className="post-content">
								<Link href="#" className="category">
									Online
								</Link>
								<h3>
									<Link href="/blog/details">
										Online Learning Can Prepare Students For
										A Fast-Changing
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

					<div className="col-lg-4 col-md-6">
						<div className="single-blog-post">
							<div className="post-image">
								<Link href="/blog/details" className="d-block">
									<Image
										src="/images/blog/blog3.jpg"
										width={750}
										height={499}
										alt="image"
									/>
								</Link>
							</div>
							<div className="post-content">
								<Link href="#" className="category">
									Learning
								</Link>
								<h3>
									<Link href="/blog/details">
										As Learning Moves Online, Trigger
										Warnings Must Too
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

					<div className="col-lg-12 col-md-12">
						<div className="blog-post-info">
							<p>
								Get into details now?​{" "}
								<Link href="/blog-1">View all posts</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LatestNews;
