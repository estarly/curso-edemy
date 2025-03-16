"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
	return (
		<>
			<div className="caoching-banner-area">
				<div className="container">
					<ul className="social-links">
						<li>
							<a href="https://www.linkedin.com/" target="_blank">
								Linkedin
							</a>
						</li>
						<li>
							<a href="https://www.facebook.com/" target="_blank">
								Facebook
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com/"
								target="_blank"
							>
								Instagram
							</a>
						</li>
						<li>
							<a
								href="https://www.pinterest.com/"
								target="_blank"
							>
								Pinterest
							</a>
						</li>
					</ul>

					<div className="row align-items-center">
						<div className="col-lg-7 col-md-12">
							<div className="caoching-banner-content">
								<h1 className="inter-font">
									Control with eDemy Business Coaching
								</h1>

								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Quis ipsum suspendisse.
								</p>

								<Link
									href="/authentication"
									className="default-btn"
								>
									<i className="flaticon-user"></i>Get My Free
									Book
									<span></span>
								</Link>
							</div>
						</div>

						<div className="col-lg-5 col-md-12">
							<div className="caoching-banner-image">
								<Image
									src="/images/business-coach/business-man.png"
									width={553}
									height={976}
									alt="business"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="c-shape1">
					<Image
						src="/images/business-coach/c-shape1.png"
						width={300}
						height={506}
						alt="shape"
					/>
				</div>
				<div className="c-shape2">
					<Image
						src="/images/business-coach/c-shape2.png"
						width={181}
						height={363}
						alt="shape"
					/>
				</div>
			</div>
		</>
	);
};

export default Banner;
