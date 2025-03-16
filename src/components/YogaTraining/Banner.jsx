"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
	return (
		<div className="yoga-main-banner">
			<div className="container-fluid">
				<div className="yoga-banner-content">
					<Image
						src="/images/yoga-banner.png"
						width={914}
						height={777}
						alt="image"
						className="main-image"
					/>

					<div className="content">
						<Image
							src="/images/top-img.png"
							width={114}
							height={161}
							className="top-image"
							alt="image"
						/>
						<h1 className="playfair-display-font">
							Accredited Online Yoga Teacher Training
						</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>

						<Link href="/auth" className="default-btn">
							<i className="flaticon-user"></i> Join For Free{" "}
							<span></span>
						</Link>

						<br />

						<Image
							src="/images/bottom-img.png"
							width={194}
							height={143}
							className="bottom-image"
							alt="image"
						/>
					</div>
				</div>
			</div>

			<div className="banner-shape2">
				<Image
					src="/images/banner-shape2.png"
					width={89}
					height={90}
					alt="image"
				/>
			</div>
			<div className="banner-shape3">
				<Image
					src="/images/banner-shape3.png"
					width={86}
					height={89}
					alt="image"
				/>
			</div>
		</div>
	);
};

export default Banner;
