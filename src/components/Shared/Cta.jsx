"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Cta = () => {
	return (
		<>
			<div className="premium-access-area-two">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="premium-access-content-style-two">
								<span className="sub-title">
									GO AT YOUR OWN PACE
								</span>
								<h2>
									Give Their Limitless Potential Unlimited
									Access
								</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</p>
								<Link
									href="/membership-levels"
									className="default-btn"
								>
									<i className="flaticon-user"></i>Get Started
									Now<span></span>
								</Link>
							</div>
						</div>

						<div className="col-lg-6 col-md-12">
							<div className="premium-access-image-style-two">
								<Image
									src="/images/security.png"
									width={508}
									height={466}
									alt="image"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cta;
