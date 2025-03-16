"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

const AboutMe = () => {
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

			<div className="motivation-about-area ptb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="motivation-about-image">
								<Image
									src="/images/motivation/motivation-about.jpg"
									width={912}
									height={974}
									alt="image"
								/>

								<div className="video-btn-box">
									<div
										onClick={() => setToggler(!toggler)}
										className="video-btn"
									>
										<i className="flaticon-play"></i> Watch
										Video
									</div>
								</div>

								<div className="motivation-shape-4">
									<Image
										src="/images/motivation/motivation-shape-4.png"
										width={261}
										height={295}
										alt="image"
									/>
								</div>
							</div>
						</div>

						<div className="col-lg-6 col-md-12">
							<div className="motivation-about-me-content">
								<span className="sub-title">ABOUT ME</span>

								<h2 className="jost-font">
									Keep you accountable for your goals as a
									business and as a leader within your
									organization
								</h2>

								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</p>

								<div className="quote">
									“I wake up every morning and think to
									myself, ‘how far can I push this company in
									the next 24 hours.’”
								</div>

								<p>
									There are many variations of passages of
									Lorem Ipsum available, but the majority have
									suffered alteration in some form, by
									injected humour, or randomised words which
									don't look even slightly believable.
								</p>

								<Link
									href="/authentication"
									className="default-btn"
								>
									<i className="flaticon-user"></i>Join For
									Free<span></span>
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="motivation-shape-5">
					<Image
						src="/images/motivation/motivation-shape-5.png"
						width={284}
						height={301}
						alt="image"
					/>
				</div>
			</div>
		</>
	);
};

export default AboutMe;
