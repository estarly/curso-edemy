"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const PremiumAccess = () => {
	return (
		<div className="premium-access-area bg-f9f9f9 ptb-100">
			<div className="container">
				<div className="premium-access-content">
					<span className="sub-title">Go at your own pace</span>
					<h2>Give their limitless potential unlimited access</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>

					<Link href="/membership-levels" className="default-btn">
						<i className="flaticon-user"></i> Give Premium Access{" "}
						<span></span>
					</Link>
				</div>
			</div>

			<div className="shape3">
				<Image
					src="/images/shape3.png"
					width={150}
					height={150}
					alt="image"
				/>
			</div>
			<div className="shape4">
				<Image
					src="/images/shape4.png"
					width={62}
					height={62}
					alt="image"
				/>
			</div>
			<div className="shape8">
				<Image
					src="/images/shape7.png"
					width={22}
					height={22}
					alt="image"
				/>
			</div>
		</div>
	);
};

export default PremiumAccess;
