"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
	return (
		<div className="health-coaching-banner-area">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
						<div className="health-coaching-banner-image">
							<Image
								src="/images/woman.png"
								width={543}
								height={843}
								alt="image"
							/>
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="health-coaching-banner-content">
							<h1 className="playfair-display-font">
								Welcome, <br /> I am Amada, <br /> Your
								Nutritionist
							</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>
							<div className="btn-box">
								<div className="d-flex align-items-center">
									<Link href="/auth" className="default-btn">
										<i className="flaticon-user"></i> Join
										For Free <span></span>
									</Link>
									<Image
										src="/images/signature.png"
										width={148}
										height={83}
										className="signature"
										alt="image"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="health-coaching-shape1">
				<Image
					src="/images/health-coaching-shape1.png"
					width={421}
					height={468}
					alt="image"
				/>
			</div>
			<div className="health-coaching-shape2">
				<Image
					src="/images/health-coaching-shape2.png"
					width={354}
					height={275}
					alt="image"
				/>
			</div>
			<div className="health-coaching-shape3">
				<Image
					src="/images/health-coaching-shape3.png"
					width={338}
					height={340}
					alt="image"
				/>
			</div>
			<div className="health-coaching-shape4">
				<Image
					src="/images/health-coaching-shape4.png"
					width={131}
					height={115}
					alt="image"
				/>
			</div>
			<div className="health-coaching-shape5">
				<Image
					src="/images/health-coaching-shape5.png"
					width={131}
					height={115}
					alt="image"
				/>
			</div>
			<div className="health-coaching-shape6">
				<Image
					src="/images/health-coaching-shape6.png"
					width={110}
					height={109}
					alt="image"
				/>
			</div>
			<div className="health-coaching-shape7">
				<Image
					src="/images/health-coaching-shape7.png"
					width={63}
					height={65}
					alt="image"
				/>
			</div>

			<div className="divider"></div>
		</div>
	);
};

export default Banner;
