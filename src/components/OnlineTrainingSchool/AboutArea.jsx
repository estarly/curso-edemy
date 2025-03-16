"use client";

import React from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import Image from "next/image";

const AboutArea = () => {
	// Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
	const openModal = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div className="about-area-two pb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-5 col-md-12">
							<div className="about-content-box">
								<span className="sub-title">
									Distance Learning
								</span>
								<h2>
									Build Your Project Management Skills Online,
									Anytime
								</h2>
								<p>
									Want to learn and earn PDUs or CEUs on your
									schedule — anytime, anywhere? Or, pick up a
									new skill quickly like, project team
									leadership or agile? Browse our most popular
									online courses.
								</p>
								<p>
									<strong>
										Grow your knowledge and your
										opportunities with thought leadership,
										training and tools.
									</strong>
								</p>

								<Link href="/contact" className="link-btn">
									Explore Learning
								</Link>
							</div>
						</div>

						<div className="col-lg-7 col-md-12">
							<div className="about-video-box">
								<div className="image">
									<Image
										src="/images/about-img6.jpg"
										width={720}
										height={489}
										alt="image"
									/>
								</div>

								<div
									onClick={(e) => {
										e.preventDefault();
										openModal();
									}}
									className="video-btn"
								>
									<i className="flaticon-play"></i>
								</div>

								<div className="shape10">
									<Image
										src="/images/shape9.png"
										width={147}
										height={392}
										alt="image"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="shape3">
					<Image
						src="/images/shape3.png"
						width={150}
						height={150}
						alt="image"
					/>
				</div>
				<div className="shape4">
					<Image
						src="/images/shape4.png"
						width={62}
						height={62}
						alt="image"
					/>
				</div>
				<div className="shape2">
					<Image
						src="/images/shape2.png"
						width={206}
						height={258}
						alt="image"
					/>
				</div>
			</div>

			{/* If you want to change the video need to update videoID */}
			<ModalVideo
				channel="youtube"
				isOpen={!isOpen}
				videoId="bk7McNUjWgw"
				onClose={() => setIsOpen(!isOpen)}
			/>
		</>
	);
};

export default AboutArea;
