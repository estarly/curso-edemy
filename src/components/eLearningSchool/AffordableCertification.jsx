"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AffordableCertification = () => {
	return (
		<div className="premium-access-area ptb-100">
			<div className="container">
				<div className="premium-access-content">
					<span className="sub-title">Affordable Certification</span>
					<h2>
						Get Your Quality Skills Certificate Through Online Exam
					</h2>
					<p>
						Students friendly pricing for the certificate programs
						helps individuals to get their skill certificate easier
						than ever!
					</p>

					<Link href="/membership-levels" className="default-btn">
						<i className="flaticon-user"></i> Get Started Now{" "}
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
					width={105}
					height={125}
					alt="image"
				/>
			</div>
		</div>
	);
};

export default AffordableCertification;
