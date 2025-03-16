"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
	return (
		<div className="banner-wrapper jarallax">
			<div className="d-table">
				<div className="d-table-cell">
					<div className="container">
						<div className="banner-wrapper-text">
							<h1>
								Build Skills With Experts Any Time, Anywhere
							</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>

							<Link href="/courses-4" className="default-btn">
								<i className="flaticon-user"></i>View All
								Courses<span></span>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="banner-shape11">
				<Image
					src="/images/banner-shape12.png"
					width={154}
					height={251}
					alt="image"
				/>
			</div>
			<div className="banner-shape12">
				<Image
					src="/images/banner-shape13.png"
					width={73}
					height={73}
					alt="image"
				/>
			</div>
			<div className="banner-shape13">
				<Image
					src="/images/banner-shape14.png"
					width={174}
					height={141}
					alt="image"
				/>
			</div>
		</div>
	);
};

export default Banner;
