"use client";

import React from "react";
import Image from "next/image";

const SloganArea = () => {
	return (
		<div className="slogan-area mtb-100 bg-fffaf3 ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-5 col-md-12">
						<div className="slogan-image">
							<Image
								src="/images/man2.jpg"
								width={454}
								height={563}
								alt="image"
							/>
						</div>
					</div>

					<div className="col-lg-7 col-md-12">
						<div className="slogan-content">
							<p>
								Our project management training equips learners
								with the knowledge and discipline required to
								effectively plan, manage, execute, and control
								projects regardless of industry. You'll learn
								all about the most popular project management
								methodologies that help organizations deliver
								successful projects.
							</p>
							<h3>William James</h3>
							<span className="sub-title">CEO at eDemy</span>
						</div>
					</div>
				</div>
			</div>

			<div className="divider2"></div>
			<div className="divider3"></div>
			<div className="shape2">
				<Image
					src="/images/shape2.png"
					width={206}
					height={258}
					alt="image"
				/>
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
			<div className="shape9">
				<Image
					src="/images/shape8.svg"
					width={22}
					height={22}
					alt="image"
				/>
			</div>
		</div>
	);
};

export default SloganArea;
