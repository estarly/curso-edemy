"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
	return (
		<>
			<div className="online-art-banner-area">
				<div className="container-fluid maxWidth-1920">
					<div className="row align-items-center">
						<div className="col-lg-3 col-md-12">
							<div className="online-art-banner-image">
								<Image
									src="/images/online-art/banner/main1.png"
									width={552}
									height={852}
									alt="image"
								/>
							</div>
						</div>
						<div className="col-lg-6 col-md-12">
							<div className="online-art-banner-content">
								<h1>
									Express your thoughts by Drawing and
									Coloring
								</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipiscing elit sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua
									quis ipsum suspendisse.
								</p>

								<div className="banner-btn">
									<Link
										href="/courses"
										className="default-btn"
									>
										<i className="flaticon-user"></i>
										Find Courses<span></span>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-12">
							<div className="online-art-banner-wrap-image">
								<Image
									src="/images/online-art/banner/main2.jpg"
									width={738}
									height={735}
									alt="image"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="online-art-shape-1">
					<Image
						src="/images/online-art/banner/shape.png"
						width={235}
						height={260}
						alt="image"
					/>
				</div>
			</div>
		</>
	);
};

export default Banner;
