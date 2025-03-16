"use client";

import React from "react";
import Image from "next/image";

const DownloadTheApp = () => {
	return (
		<>
			<div className="app-download-area">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-4 col-md-12">
							<div className="app-download-content">
								<span className="sub-title">
									GET START AT EVERYWHERE
								</span>
								<h2>EDEMY APP MORE EASIER YOUR LIFE</h2>
								<p>
									We understand better that online-based
									learning can make a significant change to
									reach students from all over the world!
									Giving options to learn better always can
									offer the best outcomes!
								</p>
								<a href="#" className="default-btn">
									<i className="flaticon-user"></i>Download
									The App<span></span>
								</a>
							</div>
						</div>
						<div className="col-lg-8 col-md-12">
							<div className="app-download-image">
								<Image
									src="/images/gym/app.png"
									width={880}
									height={800}
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

export default DownloadTheApp;
