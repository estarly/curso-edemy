"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
	return (
		<>
			<div className="kitchen-coach-banner-area">
				<div className="container-fluid maxWidth-1920">
					<div className="row align-items-center">
						<div className="col-lg-5 col-md-12">
							<div className="kitchen-coach-banner-image">
								<Image
									src="/images/kitchen-home/banner-young-woman.jpg"
									width={705}
									height={722}
									alt="business"
								/>
							</div>
						</div>

						<div className="col-lg-7 col-md-12">
							<div className="kitchen-coach-banner-content">
								<h1 className="font-weight-black">
									Cooking is Really a Demonstration of
									Adoration
								</h1>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua
									quis ipsum suspendisse.
								</p>
								<Link
									href="/authentication"
									className="default-btn"
								>
									<i className="flaticon-user"></i>Join For
									Free<span></span>
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="kitchen-coach-large-shape">
					<Image
						src="/images/kitchen-home/kitchen-large-shape.png"
						width={3840}
						height={1832}
						alt="image"
					/>
				</div>

				<div className="kitchen-shape-1">
					<Image
						src="/images/kitchen-home/kitchen-shape-1.png"
						width={111}
						height={111}
						alt="image"
					/>
				</div>
				<div className="kitchen-shape-2">
					<Image
						src="/images/kitchen-home/kitchen-shape-2.png"
						width={68}
						height={101}
						alt="image"
					/>
				</div>
				<div className="kitchen-shape-3">
					<Image
						src="/images/kitchen-home/kitchen-shape-3.png"
						width={129}
						height={129}
						alt="image"
					/>
				</div>
				<div className="kitchen-shape-4">
					<Image
						src="/images/kitchen-home/kitchen-shape-4.png"
						width={103}
						height={103}
						alt="image"
					/>
				</div>
			</div>
		</>
	);
};

export default Banner;
