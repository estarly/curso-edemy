"use client";

import Image from "next/image";
import React from "react";

const SubscribeForm = ({
	mainClsAtts = "subscribe-area bg-f9f9f9 ptb-100",
}) => {
	return (
		<div className={mainClsAtts}>
			<div className="container">
				<div className="subscribe-content">
					<span className="sub-title">Go At Your Own Pace</span>
					<h2>Subscribe To Our Newsletter</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
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
							<i className="flaticon-user"></i> Subscribe Now{" "}
							<span></span>
						</button>
					</form>
				</div>
			</div>

			<div className="shape4" data-speed="0.06" data-revert="true">
				<Image
					src="/images/shape4.png"
					width={62}
					height={62}
					alt="image"
				/>
			</div>
			<div className="shape13" data-speed="0.06" data-revert="true">
				<Image
					src="/images/shape12.png"
					width={103}
					height={103}
					alt="image"
				/>
			</div>
			<div className="shape14" data-speed="0.06" data-revert="true">
				<Image
					src="/images/shape13.png"
					width={220}
					height={99}
					alt="image"
				/>
			</div>
			<div className="shape15" data-speed="0.06" data-revert="true">
				<Image
					src="/images/shape14.png"
					width={217}
					height={217}
					alt="image"
				/>
			</div>
		</div>
	);
};

export default SubscribeForm;
