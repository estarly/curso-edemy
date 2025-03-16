"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Cta = () => {
	return (
		<>
			<div className="cw-cta-area">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-xl-6 p-0">
							<div className="cw-cta-content">
								<div className="cw-cta-box">
									<h3 className="playfair-display-font">
										Start your future at our college
									</h3>

									<p>
										Quisque velit nisi, pretium ut lacinia
										in, elementum id enim. Vestibulum ac
										diam sit amet quam vehicula elementum
										sed sit amet dui.
									</p>

									<Link
										href="/apply-now"
										className="default-btn cw-btn"
									>
										Apply Now <span></span>
									</Link>
								</div>
							</div>
						</div>

						<div className="col-xl-6 p-0">
							<div className="cw-cta-img">
								<Image
									src="/images/college-website/cta.jpg"
									width={1944}
									height={976}
									alt="cta"
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
