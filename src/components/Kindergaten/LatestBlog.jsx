"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const LatestBlog = () => {
	return (
		<div className="blog-area pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">Our News</span>
					<h2 className="font-weight-black">
						Check Out Our Latest Blog
					</h2>
					<p>
						We always give extra care to our student's skills
						improvements and feel excited to share our latest
						research and learnings!
					</p>
				</div>

				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="single-blog-item">
							<div className="post-image">
								<Link href="/blog/details" className="d-block">
									<Image
										src="/images/blog/kindergarten-img1.jpg"
										width={750}
										height={550}
										alt="image"
									/>
								</Link>
								<Link href="#" className="link-btn"></Link>
							</div>

							<div className="post-content">
								<Link href="#" className="category">
									Preschool
								</Link>
								<h3 className="font-weight-black">
									<Link href="/blog/details">
										Why Play Is Important in Preschool and
										Early
									</Link>
								</h3>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="single-blog-item">
							<div className="post-image">
								<Link href="/blog/details" className="d-block">
									<Image
										src="/images/blog/kindergarten-img2.jpg"
										width={750}
										height={550}
										alt="image"
									/>
								</Link>

								<Link href="#" className="link-btn"></Link>
							</div>

							<div className="post-content">
								<Link href="#" className="category">
									Books
								</Link>
								<h3 className="font-weight-black">
									<Link href="/blog/details">
										Best Three Billy Goats Gruff Books for
										Preschool
									</Link>
								</h3>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
						<div className="single-blog-item">
							<div className="post-image">
								<Link href="/blog/details" className="d-block">
									<Image
										src="/images/blog/kindergarten-img3.jpg"
										width={750}
										height={550}
										alt="image"
									/>
								</Link>

								<Link href="#" className="link-btn"></Link>
							</div>

							<div className="post-content">
								<Link href="#" className="category">
									Theme
								</Link>
								<h3 className="font-weight-black">
									<Link href="/blog/details">
										Flashlight Literacy Activity for Your
										Camping Theme
									</Link>
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LatestBlog;
