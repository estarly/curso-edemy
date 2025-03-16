"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
	return (
		<>
			<div className="motivation-banner-area">
				<div className="container">
					<ul className="social-links">
						<li>
							<a href="#" target="_blank">
								Linkedin
							</a>
						</li>
						<li>
							<a href="#" target="_blank">
								Facebook
							</a>
						</li>
						<li>
							<a href="#" target="_blank">
								Instagram
							</a>
						</li>
						<li>
							<a href="#" target="_blank">
								Pjostest
							</a>
						</li>
					</ul>

					<div className="row align-items-center">
						<div className="col-lg-7 col-md-12">
							<div className="motivation-banner-content">
								<span className="sub-title">I am John Doe</span>
								<h1 className="jost-font">
									Opportunities Don't Happen, You Create Them
								</h1>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua
									quis ipsum suspendisse.
								</p>
								<Link
									href="/authentication"
									className="default-btn"
								>
									<i className="flaticon-user"></i>Get My Free
									Book<span></span>
								</Link>
							</div>
						</div>

						<div className="col-lg-5 col-md-12">
							<div className="motivation-banner-image">
								<Image
									src="/images/motivation/motivation-man.png"
									width={576}
									height={1006}
									alt="business"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Shape Images */}
				<div className="motivation-shape-1">
					<Image
						src="/images/motivation/motivation-shape-1.png"
						width={86}
						height={83}
						alt="image"
					/>
				</div>
				<div className="motivation-shape-2">
					<Image
						src="/images/motivation/motivation-shape-2.png"
						width={177}
						height={165}
						alt="image"
					/>
				</div>
				<div className="motivation-shape-3">
					<Image
						src="/images/motivation/motivation-shape-3.png"
						width={190}
						height={299}
						alt="image"
					/>
				</div>
			</div>
		</>
	);
};

export default Banner;
