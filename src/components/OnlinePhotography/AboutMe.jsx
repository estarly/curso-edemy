"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutMe = () => {
	return (
		<>
			<div className="ptb-100 bg-fef8ef position-relative z-0">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<Image
								src="/images/online-photography/about-me.png"
								width={595}
								height={441}
								alt="About me"
							/>
						</div>

						<div className="col-lg-6">
							<div className="about-content op-about-me-content">
								<span className="sub-title">about me</span>
								<h2>
									Master the Art of Photography with
									Personalized Guidance
								</h2>
								<p>
									Finding your own space and utilize better
									learning options can result in faster than
									the traditional ways. Enjoy the beauty of
									eLearning!
								</p>

								<div className="row justify-content-center">
									<div className="col-lg-4 col-sm-6 col-md-4">
										<div className="op-funfacts-box">
											<h3>1926</h3>
											<p>Finished Sessions</p>
										</div>
									</div>

									<div className="col-lg-4 col-sm-6 col-md-4">
										<div className="op-funfacts-box">
											<h3>3279</h3>
											<p>Enrolled Learners</p>
										</div>
									</div>

									<div className="col-lg-4 col-sm-6 col-md-4">
										<div className="op-funfacts-box">
											<h3>100 %</h3>
											<p>Satisfaction Rate</p>
										</div>
									</div>
								</div>

								<p>
									<strong>
										Elevate your photography game with
										expert coaching. The Art of Online
										Photography: From Pixels to Perfection.
										Bringing life to pixels
									</strong>
								</p>

								<Link href="/about" className="default-btn">
									<i className="flaticon-user"></i>More About
									Me<span></span>
								</Link>
							</div>
						</div>
					</div>
				</div>

				<Image
					src="/images/online-photography/shape2.png"
					width={307}
					height={297}
					alt="shape2"
					className="op-shape2 d-none d-xl-block"
				/>
				<Image
					src="/images/online-photography/shape3.png"
					width={275}
					height={269}
					alt="shape3"
					className="op-shape3 d-none d-xxl-block"
				/>
			</div>
		</>
	);
};

export default AboutMe;
