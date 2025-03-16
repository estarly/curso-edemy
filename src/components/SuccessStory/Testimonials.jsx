"use client";

import React from "react";
import Image from "next/image";

const Testimonials = () => {
	return (
		<div className="testimonials-area ptb-100 bg-fef8ef">
			<div className="container">
				<div className="single-testimonials-box">
					<Image
						src="/images/user1.jpg"
						width={300}
						height={300}
						className="client-img"
						alt="image"
					/>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Quis ipsum ultrices gravida. Risus commodo
						viverra maecenas accumsan lacus vel facilisis. Lorem
						ipsum dolor sit amet, consectetur adipiscing elit, sed
						tempor incididunt ut labore et dolore.
					</p>
					<h3>John Smith</h3>
					<span>Python Developer</span>

					<div className="shape-img">
						<Image
							src="/images/shape4.png"
							width={62}
							height={62}
							className="shape-1"
							alt="image"
						/>
						<Image
							src="/images/shape14.png"
							width={217}
							height={217}
							className="shape-2"
							alt="image"
						/>
						<Image
							src="/images/shape7.png"
							width={105}
							height={125}
							className="shape-3"
							alt="image"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
