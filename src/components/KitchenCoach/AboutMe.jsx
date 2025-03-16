"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutMe = () => {
	return (
		<>
			<div className="kitchen-about-area ptb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="kitchen-about-content">
								<span className="sub-title">About Me</span>
								<h2 className="font-weight-black">
									The most key element of all great home
									cooking: love for those you are cooking for.
								</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</p>

								<ul className="features-list">
									<li>
										<span>
											<i className="flaticon-experience"></i>{" "}
											Expert Instruction
										</span>
									</li>
									<li>
										<span>
											<i className="flaticon-time-left"></i>{" "}
											Lifetime Access
										</span>
									</li>
									<li>
										<span>
											<i className="flaticon-tutorials"></i>{" "}
											Remote Learning
										</span>
									</li>
									<li>
										<span>
											<i className="flaticon-self-growth"></i>{" "}
											Self Development
										</span>
									</li>
								</ul>

								<div className="about-btn">
									<Link
										href="/contact"
										className="default-btn"
									>
										<i className="flaticon-user"></i>
										Join For Free<span></span>
									</Link>
								</div>
							</div>
						</div>

						<div className="col-lg-6 col-md-12">
							<div className="kitchen-about-image">
								<Image
									src="/images/kitchen-home/kitchen-about.jpg"
									width={800}
									height={780}
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

export default AboutMe;
