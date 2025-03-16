"use client";

import React from "react";
import Image from "next/image";

const NewsletterForm = () => {
	return (
		<>
			<div className="subscribe-area op-subscribe-area">
				<div className="container">
					<div className="subscribe-content op-subscribe-content">
						<span className="sub-title">Go At Your Own Pace</span>

						<h2>Subscribe To Our Newsletter</h2>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
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
								<i className="flaticon-user"></i>
								Subscribe Now
								<span></span>
							</button>
						</form>

						<Image
							src="/images/online-photography/shape8.png"
							width={112}
							height={112}
							alt="shape8"
							className="op-shape8 d-none d-xl-block"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default NewsletterForm;
