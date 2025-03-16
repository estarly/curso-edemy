"use client";

import React from "react";
import Image from "next/image";

const WelcomeToCollege = () => {
	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-12 col-xl-6">
							<div className="cw-about">
								<div className="cw-about-content">
									<h3 className="playfair-display-font">
										Welcome to eDemy college
									</h3>
									<p>
										Curabitur non nulla sit amet nisl tempus
										convallis quis ac lectus. Vivamus magna
										justo, lacinia eget consectetur sed,
										convallis at tellus. Nulla quis lorem ut
										libero malesuada feugiat.{" "}
									</p>
								</div>

								<div className="cw-about-mission-vision">
									<h3 className="playfair-display-font">
										Mission and vision
									</h3>
									<p>
										Praesent sapien massa, convallis a
										pellentesque nec, egestas non nisi.
										Curabitur non nulla sit amet nisl tempus
										convallis quis ac lectus. Donec
										sollicitudin molestie malesuada. Sed
										porttitor lectus nibh. Vestibulum ante
										ipsum primis in faucibus orci luctus et
										ultrices posuere cubilia Curae; Donec
										velit neque, auctor sit amet aliquam
										vel, ullamcorper sit amet ligula.
									</p>
								</div>

								<div className="cw-search-your-program">
									<h3 className="playfair-display-font">
										Search your program
									</h3>

									<ul className="playfair-display-font">
										<li>Undergraduate programs</li>
										<li>Graduate programs</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-12 col-xl-6">
							<div className="cw-welcome-img">
								<Image
									src="/images/college-website/about.png"
									width={810}
									height={696}
									alt="about"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default WelcomeToCollege;
