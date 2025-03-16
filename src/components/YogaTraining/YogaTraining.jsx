"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const YogaTraining = () => {
	return (
		<div className="training-area bg-f5f7fa pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<h2 className="playfair-display-font">
						Why Online Yoga Training
					</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
				</div>

				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="single-training-box">
							<Image
								src="/images/training-img1.png"
								width={214}
								height={235}
								alt="image"
							/>
							<h3 className="playfair-display-font">
								<Link href="/courses">Flexibility</Link>
							</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore.
							</p>

							<Link href="/courses" className="link-btn">
								Start Now
							</Link>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="single-training-box">
							<Image
								src="/images/training-img2.png"
								width={214}
								height={235}
								alt="image"
							/>
							<h3 className="playfair-display-font">
								<Link href="/courses">Comfort</Link>
							</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore.
							</p>

							<Link href="/courses" className="link-btn">
								Start Now
							</Link>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
						<div className="single-training-box">
							<Image
								src="/images/training-img3.png"
								width={214}
								height={235}
								alt="image"
							/>
							<h3 className="playfair-display-font">
								<Link href="/courses">Resources</Link>
							</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore.
							</p>

							<Link href="/courses" className="link-btn">
								Start Now
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="tree-shape2">
				<Image
					src="/images/tree-shape2.png"
					width={190}
					height={315}
					alt="image"
				/>
			</div>
			<div className="tree-shape3">
				<Image
					src="/images/tree-shape3.png"
					width={150}
					height={188}
					alt="image"
				/>
			</div>
		</div>
	);
};

export default YogaTraining;
