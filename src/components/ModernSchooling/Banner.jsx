"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
	return (
		<div className="hero-banner-area">
			<div className="container-fluid">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
						<div className="hero-banner-content">
							<h1>
								Build Development Skills With eCademy Any Time,
								Anywhere
							</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>

							<Link href="/auth" className="default-btn">
								<i className="flaticon-user"></i> Join For Free{" "}
								<span></span>
							</Link>
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="hero-banner-image">
							<Image
								src="/images/main-banner3.png"
								width={1920}
								height={1080}
								alt="image"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="banner-shape19">
				<Image
					src="/images/banner-shape20.png"
					width={86}
					height={89}
					alt="image"
				/>
			</div>
			<div className="divider"></div>
		</div>
	);
};

export default Banner;
