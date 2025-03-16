"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const PageBanner = ({
	pageTitle,
	homePageUrl,
	homePageText,
	activePageText,
}) => {
	return (
		<div className="cw-page-title-area position-relative">
			<div className="container">
				<div className="cw-title-content">
					<h2>{pageTitle}</h2>

					<ul>
						<li>
							<Link href={homePageUrl}>{homePageText}</Link>
						</li>
						<li className="active">{activePageText}</li>
					</ul>
				</div>
			</div>

			<div className="cw-shape_1">
				<Image
					src="/images/college-website/shape3.png"
					width={250}
					height={125}
					alt="shape3"
				/>
			</div>
			<div className="cw-shape_2">
				<Image
					src="/images/college-website/shape4.png"
					width={250}
					height={125}
					alt="shape4"
				/>
			</div>
			<div className="cw-shape_3">
				<Image
					src="/images/college-website/shape6.png"
					width={143}
					height={150}
					alt="shape6"
				/>
			</div>
			<div className="cw-shape_4">
				<Image
					src="/images/college-website/shape7.png"
					width={143}
					height={150}
					alt="shape7"
				/>
			</div>
		</div>
	);
};

export default PageBanner;
