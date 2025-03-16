"use client";

import React from "react";
import Image from "next/image";

const Features = () => {
	return (
		<>
			<div className="cw-features pt-100 pb-70 position-relative">
				<div className="container">
					<div className="section-title">
						<h2 className="playfair-display-font">
							The power of features
						</h2>
					</div>

					<div className="row justify-content-center">
						<div className="col-lg-3 col-sm-6">
							<div className="cw-feature-card text-center">
								<div className="icon">
									<Image
										src="/images/college-website/icon5.png"
										width={50}
										height={50}
										alt="icon"
									/>
								</div>
								<h3 className="playfair-display-font">
									Academic transfer
								</h3>
							</div>
						</div>

						<div className="col-lg-3 col-sm-6">
							<div className="cw-feature-card text-center">
								<div className="icon">
									<Image
										src="/images/college-website/icon6.png"
										width={50}
										height={50}
										alt="icon"
									/>
								</div>
								<h3 className="playfair-display-font">
									Disclaimers
								</h3>
							</div>
						</div>

						<div className="col-lg-3 col-sm-6">
							<div className="cw-feature-card text-center">
								<div className="icon">
									<Image
										src="/images/college-website/icon7.png"
										width={50}
										height={50}
										alt="icon"
									/>
								</div>
								<h3 className="playfair-display-font">
									Academic calendar
								</h3>
							</div>
						</div>

						<div className="col-lg-3 col-sm-6">
							<div className="cw-feature-card text-center">
								<div className="icon">
									<Image
										src="/images/college-website/icon8.png"
										width={50}
										height={50}
										alt="icon"
									/>
								</div>
								<h3 className="playfair-display-font">
									Academic success
								</h3>
							</div>
						</div>
					</div>
				</div>

				<div className="cw-star-icon d-none d-sm-block">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="380"
						height="380"
						viewBox="0 0 380 380"
						fill="none"
					>
						<path
							d="M242.117 221.831C268.607 203.633 310.432 197.07 380 189.97C309.537 182.751 267.474 176.128 241.043 157.394C248.381 142 260.732 124.519 278.034 102.204C279.347 100.534 277.139 98.3859 275.469 99.6985C253.87 117.359 236.866 130.068 221.771 137.824C203.633 111.393 197.07 69.5682 189.97 0C182.751 70.4632 176.128 112.526 157.394 138.957C142 131.619 124.519 119.268 102.204 101.966C100.534 100.653 98.3859 102.861 99.6985 104.531C117.359 126.13 130.068 143.134 137.824 158.229C111.393 176.367 69.5682 182.87 0 189.97C70.4632 197.19 112.526 203.812 138.957 222.547C131.619 237.94 119.268 255.422 101.966 277.736C100.653 279.406 102.861 281.554 104.531 280.242C126.13 262.581 143.134 249.873 158.229 242.117C176.426 268.607 182.989 310.432 190.089 380C197.309 309.537 203.932 267.474 222.666 241.043C238.059 248.381 255.541 260.732 277.855 278.034C279.526 279.347 281.674 277.139 280.361 275.469C262.522 253.93 249.873 236.926 242.117 221.831Z"
							fill="#301A3D"
						/>
					</svg>
				</div>
			</div>
		</>
	);
};

export default Features;
