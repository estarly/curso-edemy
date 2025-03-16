"use client";
import React from "react";
import Link from "next/link";

const Banner = () => {
	return (
		<>
			<div
				className="op-main-banner-area"
				style={{
					backgroundImage: `url(/images/online-photography/hero-banner-bg.jpg)`,
				}}
			>
				<div className="d-table">
					<div className="d-table-cell">
						<div className="container">
							<div className="op-banner-content">
								<h1>Discover the Art of Photography, Online</h1>

								<p>
									If you're looking to take your photography
									skills to the next level, consider online
									photography coaching. With personalized
									guidance and expert feedback, online
									coaching can help you develop your skills,
									hone your craft, and capture your passion.
								</p>

								<Link
									href="/authentication"
									className="default-btn"
								>
									<i className="flaticon-user"></i>
									Get Started Now
									<span></span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
