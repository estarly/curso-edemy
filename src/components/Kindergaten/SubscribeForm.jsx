"use client";

import React from "react";
import Image from "next/image";

const SubscribeForm = () => {
	return (
		<div className="subscribe-area bg-eee8df ptb-70">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
						<div className="subscribe-image">
							<Image
								src="/images/subscribe-img3.png"
								width={453}
								height={353}
								alt="image"
							/>
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="subscribe-content text-left">
							<h2 className="font-weight-black">
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
									<i className="flaticon-user"></i> Subscribe
									Now <span></span>
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>

			<div className="kindergarten-shape19">
				<Image
					src="/images/kindergarten-shape/k-shape19.png"
					width={238}
					height={520}
					alt="image"
				/>
			</div>
			<div className="kindergarten-shape20">
				<Image
					src="/images/kindergarten-shape/k-shape20.png"
					width={454}
					height={174}
					alt="image"
				/>
			</div>
		</div>
	);
};

export default SubscribeForm;
