"use client";

import React from "react";
import Image from "next/image";

const NewsletterForm = () => {
	return (
		<>
			<div className="subscribe-area bg-f9f9f9 ptb-100">
				<div className="container">
					<div className="subscribe-content">
						<span className="sub-title">Newsletter</span>
						<h2 className="inter-font font-weight-bold">
							Subscribe To My Newsletter
						</h2>
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
								<i className="flaticon-user"></i>Subscribe Now
								<span></span>
							</button>
						</form>
					</div>
				</div>

				{/* Shape Images */}
				<div className="c-shape3">
					<Image
						src="/images/business-coach/c-shape3.png"
						width={93}
						height={92}
						alt="image"
					/>
				</div>
				<div className="c-shape4">
					<Image
						src="/images/business-coach/c-shape4.png"
						width={115}
						height={115}
						alt="image"
					/>
				</div>
			</div>
		</>
	);
};

export default NewsletterForm;
