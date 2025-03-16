"use client";

import React from "react";
import Image from "next/image";

const WhyLiveInHalls = () => {
	return (
		<>
			<div className="pt-100 pb-70 cw-why-live-in-halls">
				<div className="container position-relative z-1">
					<div className="section-title">
						<h2 className="playfair-display-font text-white">
							Why live in halls?
						</h2>
					</div>

					<div className="row">
						<div className="col-lg-6">
							<div className="cw-halls-card">
								<h3 className="playfair-display-font">
									Residence management
								</h3>

								<p>
									Praesent sapien massa, convallis a
									pellentesque nec, egestas non nisi.
									Curabitur non nulla sit amet nisl tempus
									convallis quis ac lectus. Lorem ipsum dolor
									sit amet, consectetur adipiscing elit. Donec
									rutrum congue leo eget malesuada. Donec
									rutrum congue leo eget malesuada.
									Pellentesque in ipsum id orci porta dapibus.
								</p>

								<Image
									src="/images/college-website/residence-management.jpg"
									width={882}
									height={375}
									alt="residence management"
								/>
							</div>
						</div>

						<div className="col-lg-6">
							<div className="cw-halls-card">
								<h3 className="playfair-display-font">
									Safe and secure
								</h3>

								<p>
									Praesent sapien massa, convallis a
									pellentesque nec, egestas non nisi.
									Curabitur non nulla sit amet nisl tempus
									convallis quis ac lectus. Lorem ipsum dolor
									sit amet, consectetur adipiscing elit. Donec
									rutrum congue leo eget malesuada. Donec
									rutrum congue leo eget malesuada.
									Pellentesque in ipsum id orci porta dapibus.
								</p>

								<Image
									src="/images/college-website/safe-and-secure.jpg"
									width={882}
									height={375}
									alt="residence management"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default WhyLiveInHalls;
