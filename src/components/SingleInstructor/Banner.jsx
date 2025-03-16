"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
	return (
		<>
			<div className="instructor-banner-area">
				<div className="container-fluid maxWidth-1920">
					<div className="row align-items-center">
						<div className="col-lg-5 col-md-12">
							<div className="instructor-banner-content">
								<h1 className="el-messiri-font">
									Learn, Grow, Accomplish your goals
								</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipiscing elit sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua
									quis ipsum suspendisse.
								</p>
								<div className="banner-btn">
									<Link
										href="/contact"
										className="default-btn"
									>
										<i className="flaticon-user"></i>Get
										Started Now
										<span></span>
									</Link>
								</div>
							</div>
						</div>

						<div className="col-lg-7 col-md-12">
							<div className="instructor-banner-image">
								<Image
									src="/images/instructor-home/banner/main.png"
									width={952}
									height={615}
									alt="image"
								/>

								<div className="banner-dot-shape">
									<Image
										src="/images/instructor-home/banner/dot-shape.png"
										width={948}
										height={432}
										alt="image"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="instructor-banner-large-shape">
					<Image
						src="/images/instructor-home/banner/large-shape.png"
						width={1920}
						height={378}
						alt="image"
					/>
				</div>
				<div className="instructor-banner-shape-1">
					<Image
						src="/images/instructor-home/banner/shape1.png"
						width={115}
						height={70}
						alt="image"
					/>
				</div>
				<div className="instructor-banner-shape-2">
					<Image
						src="/images/instructor-home/banner/shape2.png"
						width={100}
						height={90}
						alt="image"
					/>
				</div>
				<div className="instructor-banner-shape-3">
					<Image
						src="/images/instructor-home/banner/shape3.png"
						width={110}
						height={95}
						alt="image"
					/>
				</div>
			</div>
		</>
	);
};

export default Banner;
