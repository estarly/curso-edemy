"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const LatestBlogPost = () => {
	return (
		<>
			<div className="oa-blog-area pt-100 pb-70">
				<div className="container">
					<div className="section-title oa-title-color">
						<span className="sub-title">OUR BLOG</span>
						<h2>Latest Articles from eDemy</h2>
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
											src="/images/online-art/blog/blog1.jpg"
											width={850}
											height={900}
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
									<h3>
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
											src="/images/online-art/blog/blog2.jpg"
											width={850}
											height={900}
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
									<h3>
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
											src="/images/online-art/blog/blog3.jpg"
											width={850}
											height={900}
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
									<h3>
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
			</div>
		</>
	);
};

export default LatestBlogPost;
