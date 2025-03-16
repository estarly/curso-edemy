"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = ({ currentUser }) => {
	return (
		<div className="main-banner-area">
			<div className="container-fluid">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
						<div className="main-banner-content-style-two">
							<h1>
								The World's Leading Distance-Learning Provider
							</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
								Quis ipsum suspendisse.
							</p>

							{!currentUser && (
								<Link href="/auth" className="default-btn">
									<i className="flaticon-user"></i>Join For
									Free
									<span></span>
								</Link>
							)}
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="main-banner-image-style-two">
							<Image
								src="/images/banner/banner-img4.png"
								width={982}
								height={816}
								alt="banner"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Shape Images */}
			<div className="banner-shape1">
				<Image
					src="/images/banner-shape1.png"
					width={254}
					height={251}
					alt="shape"
				/>
			</div>
			<div className="banner-shape2">
				<Image
					src="/images/banner-shape2.png"
					width={89}
					height={90}
					alt="shape"
				/>
			</div>
			<div className="banner-shape3">
				<Image
					src="/images/banner-shape3.png"
					width={86}
					height={89}
					alt="shape"
				/>
			</div>
			<div className="bulb">
				<Image
					src="/images/bulb.png"
					width={350}
					height={231}
					alt="shape"
				/>
			</div>
		</div>
	);
};

export default Banner;
