"use client";

import React from "react";
import Image from "next/image";

const AboutUsContent = () => {
	return (
		<>
			<div className="cw-about-us position-relative overflow-hidden">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-xl-6">
							<div className="cw-about-us-img">
								<Image
									src="/images/college-website/about-2.jpg"
									width={1425}
									height={1160}
									alt="about"
								/>
							</div>
						</div>

						<div className="col-xl-6">
							<div className="cw-about-us-text">
								<div className="cw-content">
									<h3 className="playfair-display-font">
										Our students
									</h3>

									<p>
										Vestibulum ante ipsum primis in faucibus
										orci luctus et ultrices posuere cubilia
										Curae; Donec velit neque, auctor sit
										amet aliquam vel, ullamcorper sit amet
										ligula. Curabitur aliquet quam id dui
										posuere blandit. Curabitur non nulla sit
										amet nisl tempus convallis quis ac
										lectus. Cras ultricies ligula sed magna
										dictum porta.
									</p>

									<p>
										Mauris blandit aliquet elit, eget
										tincidunt nibh pulvinar a. Praesent
										sapien massa, convallis a pellentesque
										nec, egestas non nisi. Vivamus suscipit
										tortor eget felis porttitor volutpat.
										Curabitur non nulla sit amet nisl tempus
										convallis quis ac lectus. Quisque velit
										nisi, pretium ut lacinia in, elementum
										id enim. Vestibulum ac diam sit amet
										quam vehicula elementum sed sit amet
										dui.{" "}
									</p>
								</div>

								<div className="cw-content">
									<h3 className="playfair-display-font">
										Our purpose
									</h3>

									<p>
										Praesent sapien massa, convallis a
										pellentesque nec, egestas non nisi.
										Curabitur non nulla sit amet nisl tempus
										convallis quis ac lectus. Lorem ipsum
										dolor sit amet, consectetur adipiscing
										elit. Donec rutrum congue leo eget
										malesuada. Donec rutrum congue leo eget
										malesuada. Pellentesque in ipsum id orci
										porta dapibus.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutUsContent;
