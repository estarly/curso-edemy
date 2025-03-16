"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
	return (
		<div className="kindergarten-main-banner">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-6 col-md-12">
						<div className="kindergarten-banner-content">
							<div className="image">
								<Image
									src="/images/bird1.png"
									width={173}
									height={147}
									alt="image"
								/>
							</div>

							<h1>
								A lifetime of <span>Confidence</span> starts
								here
							</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>

							<Link
								href="/auth"
								className="default-btn-style-two"
							>
								<i className="flaticon-user"></i> Join For Free
							</Link>

							<div className="circle-shape">
								<Image
									src="/images/circle.png"
									width={900}
									height={646}
									alt="image"
								/>
							</div>
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="kindergarten-banner-image">
							<div className="row">
								<div className="col-lg-6 col-md-6 col-sm-6">
									<div className="image">
										<Image
											src="/images/kids1.png"
											width={300}
											height={414}
											alt="image"
										/>
									</div>
								</div>

								<div className="col-lg-6 col-md-6 col-sm-6">
									<div className="image">
										<Image
											src="/images/kids2.png"
											width={370}
											height={415}
											alt="image"
										/>
									</div>
								</div>

								<div className="col-lg-6 col-md-6 col-sm-6">
									<div className="image">
										<Image
											src="/images/kids3.png"
											width={384}
											height={353}
											alt="image"
										/>
									</div>
								</div>

								<div className="col-lg-6 col-md-6 col-sm-6">
									<div className="image text-left">
										<Image
											src="/images/kids4.png"
											width={330}
											height={324}
											className="mt-4"
											alt="image"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="kindergarten-shape1">
				<Image
					src="/images/kindergarten-shape/k-shape1.png"
					width={292}
					height={141}
					alt="image"
				/>
			</div>
			<div className="kindergarten-shape2">
				<Image
					src="/images/kindergarten-shape/k-shape2.png"
					width={184}
					height={215}
					alt="image"
				/>
			</div>
			<div className="kindergarten-shape3">
				<Image
					src="/images/kindergarten-shape/k-shape3.png"
					width={199}
					height={260}
					alt="image"
				/>
			</div>
			<div className="kindergarten-shape4">
				<Image
					src="/images/kindergarten-shape/k-shape4.png"
					width={59}
					height={57}
					alt="image"
				/>
			</div>
			<div className="kindergarten-shape5">
				<Image
					src="/images/kindergarten-shape/k-shape5.png"
					width={64}
					height={66}
					alt="image"
				/>
			</div>
			<div className="kindergarten-shape6">
				<Image
					src="/images/kindergarten-shape/k-shape6.png"
					width={110}
					height={109}
					alt="image"
				/>
			</div>
		</div>
	);
};

export default Banner;
