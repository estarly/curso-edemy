"use client";

import React from "react";
import Image from "next/image";

const SubscribeForm = () => {
	return (
		<div className="subscribe-area-two">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
						<div className="subscribe-image">
							<Image
								src="/images/subscribe-img2.png"
								width={305}
								height={409}
								alt="image"
							/>
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="subscribe-content">
							<span className="sub-title">
								Go At Your Own Pace
							</span>
							<h2 className="playfair-display-font">
								Subscribe To Our Newsletter
							</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>
							<form className="newsletter-form">
								<input
									type="text"
									className="input-newsletter"
									placeholder="Enter your email address"
									name="EMAIL"
									required
								/>
								<button type="submit" className="default-btn">
									<i className="flaticon-user"></i>Subscribe
									Now<span></span>
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>

			<div className="shape4">
				<Image
					src="/images/shape4.png"
					width={26}
					height={26}
					alt="image"
				/>
			</div>
			<div className="shape13">
				<Image
					src="/images/shape12.png"
					width={103}
					height={103}
					alt="image"
				/>
			</div>
		</div>
	);
};

export default SubscribeForm;
