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
		<div className="page-title-area">
			<div className="container">
				<div className="page-title-content">
					<ul>
						<li>
							<Link href={homePageUrl}>{homePageText}</Link>
						</li>
						<li className="active">{activePageText}</li>
					</ul>

					<h2>{pageTitle}</h2>
				</div>
			</div>

			<div className="shape9">
				<Image
					width="22"
					height="22"
					src="/images/shape8.svg"
					alt="image"
				/>
			</div>
		</div>
	);
};

export default PageBanner;
