"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const LatestBlogPost = () => {
	return (
		<>
			<div className="blog-area pt-100 pb-70">
				<div className="container">
					<div className="section-title">
						<span className="sub-title">Blog</span>
						<h2 className="inter-font font-weight-bold">
							Latest Blog Post
						</h2>
						<p>
							We always give extra care to our student's skills
							improvements and feel excited to share our latest
							research and learnings!
						</p>
					</div>

					<div className="row justify-content-center">
						<div className="col-lg-4 col-md-6">
							<div className="single-post-box">
								<div className="post-image">
									<Link
										href="/blog/details"
										className="d-block"
									>
										<Image
											src="/images/business-coach/business-coach3.jpg"
											width={800}
											height={614}
											alt="image"
										/>
									</Link>
								</div>
								<div className="post-content">
									<ul className="meta d-flex justify-content-between align-items-center">
										<li>
											<Link href="#">Business</Link>
										</li>
										<li>
											<i className="flaticon-calendar"></i>{" "}
											April 29, 2023
										</li>
									</ul>

									<h3 className="inter-font">
										<Link href="/blog/details">
											University Admissions Could Face
											Emergency Controls
										</Link>
									</h3>

									<ul className="post-content-footer d-flex justify-content-between align-items-center">
										<li>
											<div className="post-author d-flex align-items-center">
												<Image
													src="/images/user/user1.jpg"
													width={300}
													height={300}
													className="rounded-circle"
													alt="image"
												/>
												<span>Alex Morgan</span>
											</div>
										</li>
										<li>
											<Link
												href="/blog/details"
												className="link-btn"
											>
												<i className="bx bx-right-arrow-alt"></i>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="single-post-box">
								<div className="post-image">
									<Link
										href="/blog/details"
										className="d-block"
									>
										<Image
											src="/images/business-coach/business-coach4.jpg"
											width={800}
											height={614}
											alt="image"
										/>
									</Link>
								</div>

								<div className="post-content">
									<ul className="meta d-flex justify-content-between align-items-center">
										<li>
											<Link href="#">Education</Link>
										</li>
										<li>
											<i className="flaticon-calendar"></i>{" "}
											April 28, 2023
										</li>
									</ul>

									<h3 className="inter-font">
										<Link href="/blog/details">
											Online Learning Can Prepare Students
											For A Fast-Changing
										</Link>
									</h3>

									<ul className="post-content-footer d-flex justify-content-between align-items-center">
										<li>
											<div className="post-author d-flex align-items-center">
												<Image
													src="/images/user/user2.jpg"
													width={300}
													height={300}
													className="rounded-circle"
													alt="image"
												/>
												<span>David Warner</span>
											</div>
										</li>
										<li>
											<Link
												href="/blog/details"
												className="link-btn"
											>
												<i className="bx bx-right-arrow-alt"></i>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="single-post-box">
								<div className="post-image">
									<Link
										href="/blog/details"
										className="d-block"
									>
										<Image
											src="/images/business-coach/business-coach5.jpg"
											width={800}
											height={614}
											alt="image"
										/>
									</Link>
								</div>

								<div className="post-content">
									<ul className="meta d-flex justify-content-between align-items-center">
										<li>
											<Link href="#">Coaching</Link>
										</li>
										<li>
											<i className="flaticon-calendar"></i>{" "}
											April 27, 2023
										</li>
									</ul>

									<h3 className="inter-font">
										<Link href="/blog/details">
											As Learning Moves Online, Trigger
											Warnings Must Too
										</Link>
									</h3>

									<ul className="post-content-footer d-flex justify-content-between align-items-center">
										<li>
											<div className="post-author d-flex align-items-center">
												<Image
													src="/images/user/user3.jpg"
													width={300}
													height={300}
													className="rounded-circle"
													alt="image"
												/>
												<span>Sarah Taylor</span>
											</div>
										</li>
										<li>
											<Link
												href="/blog/details"
												className="link-btn"
											>
												<i className="bx bx-right-arrow-alt"></i>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LatestBlogPost;
