"use client";

import React from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";

const IntroVideo = () => {
	// Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
	const openModal = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<div className="success-story-area pb-100">
				<div className="container">
					<div className="video-box mt-0">
						<div className="image">
							<Image
								src="/images/success-story.jpg"
								width={1500}
								height={1001}
								className="shadow"
								alt="image"
							/>
						</div>

						<div
							onClick={(e) => {
								e.preventDefault();
								openModal();
							}}
							className="video-btn popup-youtube"
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

				<div className="shape2">
					<Image
						src="/images/shape2.png"
						width={206}
						height={258}
						alt="image"
					/>
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
				<div className="shape9">
					<Image
						src="/images/shape8.svg"
						width="22"
						height="22"
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

export default IntroVideo;
