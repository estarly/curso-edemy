"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
	return (
		<div className="banner-section">
			<div className="container-fluid">
				<div className="row align-items-center">
					<div className="col-lg-5 col-md-12">
						<div className="banner-content">
							<h1>Project Management Certification Training </h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
								Quis ipsum suspendisse.
							</p>

							<Link href="/auth" className="default-btn">
								<i className="flaticon-user"></i> Join For Free{" "}
								<span></span>
							</Link>
						</div>
					</div>

					<div className="col-lg-7 col-md-12">
						<div className="banner-image">
							<Image
								src="/images/banner-img1.png"
								width={944}
								height={727}
								alt="image"
							/>

							<div className="banner-shape4">
								<Image
									src="/images/banner-shape4.png"
									width={86}
									height={89}
									alt="image"
								/>
							</div>
							<div className="banner-shape5">
								<Image
									src="/images/banner-shape5.png"
									width={89}
									height={90}
									alt="image"
								/>
							</div>
							<div className="banner-shape6">
								<Image
									src="/images/banner-shape6.png"
									width={254}
									height={251}
									alt="image"
								/>
							</div>
							<div className="banner-shape7">
								<Image
									src="/images/banner-shape7.png"
									width={165}
									height={75}
									alt="image"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
