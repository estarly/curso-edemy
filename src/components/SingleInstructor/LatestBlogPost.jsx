"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const LatestBlogPost = () => {
	return (
		<>
			<div className="oa-blog-area instructor-blog pt-100">
				<div className="container">
					<div className="section-title instructor-title-color">
						<span className="sub-title">OUR BLOG</span>
						<h2 className="el-messiri-font">
							Latest Articles from eDemy
						</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipiscing
							elit sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
					</div>

					<div className="row justify-content-center">
						<div className="col-lg-4 col-md-6">
							<div className="oa-blog-card">
								<div className="blog-image">
									<Link href="/blog/details">
										<Image
											src="/images/instructor-home/blog/blog1.jpg"
											width={750}
											height={500}
											alt="image"
										/>
									</Link>
								</div>
								<div className="blog-content">
									<ul className="meta">
										<li>
											<Link href="#">Artist</Link>
										</li>
										<li>April 30, 2023</li>
									</ul>
									<h3 className="el-messiri-font">
										<Link href="/blog/details">
											Vibrant Abstract Painting
										</Link>
									</h3>
									<Link href="/blog/details">
										<Image
											src="/images/online-art/arrow.svg"
											width={60}
											height={42}
											alt="icon"
										/>
									</Link>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="oa-blog-card">
								<div className="blog-image">
									<Link href="/blog/details">
										<Image
											src="/images/instructor-home/blog/blog2.jpg"
											width={750}
											height={500}
											alt="image"
										/>
									</Link>
								</div>
								<div className="blog-content">
									<ul className="meta">
										<li>
											<Link href="#">Artist</Link>
										</li>
										<li>April 30, 2023</li>
									</ul>
									<h3 className="el-messiri-font">
										<Link href="/blog/details">
											Helping Artists Launch Web
										</Link>
									</h3>
									<Link href="/blog/details">
										<Image
											src="/images/online-art/arrow.svg"
											width={60}
											height={42}
											alt="icon"
										/>
									</Link>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="oa-blog-card">
								<div className="blog-image">
									<Link href="/blog/details">
										<Image
											src="/images/instructor-home/blog/blog2.jpg"
											width={750}
											height={500}
											alt="image"
										/>
									</Link>
								</div>
								<div className="blog-content">
									<ul className="meta">
										<li>
											<Link href="#">Artist</Link>
										</li>
										<li>April 30, 2023</li>
									</ul>
									<h3 className="el-messiri-font">
										<Link href="/blog/details">
											Socially Engaged Art
										</Link>
									</h3>
									<Link href="/blog/details">
										<Image
											src="/images/online-art/arrow.svg"
											width={60}
											height={42}
											alt="icon"
										/>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="instructor-blog-wave-shape">
					<Image
						src="/images/instructor-home/blog/wave-shape.png"
						width={1920}
						height={378}
						alt="image"
						className="w-100"
					/>
				</div>
				<div className="instructor-blog-shape">
					<Image
						src="/images/instructor-home/blog/shape.png"
						width={250}
						height={192}
						alt="image"
					/>
				</div>
			</div>
		</>
	);
};

export default LatestBlogPost;
