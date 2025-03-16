"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const Features = () => {
	// To open the lightbox change the value of the "toggler" prop.
	const [toggler, setToggler] = useState(false);

	return (
		<>
			{/* Use here youtube Embed video link */}
			<FsLightbox
				toggler={toggler}
				sources={[
					"https://www.youtube.com/embed/z3FA2kALScU?si=nLBQDyTJbGQFA_52",
				]}
			/>

			<div className="oa-features-area pt-100">
				<div className="container">
					<div className="section-title oa-title-color">
						<span className="sub-title">
							EDUCATION FOR EVERYONE
						</span>
						<h2>Artists Spend Time for Your Enjoyment</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipiscing
							elit sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
					</div>

					<div className="row justify-content-center align-items-center">
						<div className="col-lg-3 col-sm-6">
							<div className="oa-features-card">
								<Image
									src="/images/online-art/features/img1.png"
									width={87}
									height={128}
									alt="image"
								/>
								<h3>Latest Skills</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor.
								</p>
							</div>
						</div>

						<div className="col-lg-3 col-sm-6">
							<div className="oa-features-card">
								<Image
									src="/images/online-art/features/img2.png"
									width={112}
									height={77}
									alt="image"
								/>
								<h3>Industry Experts</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor.
								</p>
							</div>
						</div>

						<div className="col-lg-3 col-sm-6">
							<div className="oa-features-card">
								<Image
									src="/images/online-art/features/img3.png"
									width={109}
									height={82}
									alt="image"
								/>
								<h3>Online Courses</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor.
								</p>
							</div>
						</div>

						<div className="col-lg-3 col-sm-6">
							<div className="oa-features-card">
								<Image
									src="/images/online-art/features/img4.png"
									width={90}
									height={90}
									alt="image"
								/>
								<h3>One to One</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor.
								</p>
							</div>
						</div>
					</div>

					{/* PromoVideo */}
					<div className="oa-video-box">
						<div className="image">
							<Image
								src="/images/online-art/video/video.jpg"
								width={1500}
								height={1000}
								className="shadow"
								alt="image"
							/>
						</div>

						<div
							className="video-btn"
							onClick={() => setToggler(!toggler)}
						>
							<i className="flaticon-play"></i>
						</div>

						<div className="oa-video-shape-1">
							<Image
								src="/images/online-art/video/shape1.png"
								width={485}
								height={484}
								alt="image"
							/>
						</div>
						<div className="oa-video-shape-2">
							<Image
								src="/images/online-art/video/shape2.png"
								width={327}
								height={327}
								alt="image"
							/>
						</div>
						<div className="oa-video-shape-3">
							<Image
								src="/images/online-art/video/shape3.png"
								width={195}
								height={195}
								alt="image"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Features;
