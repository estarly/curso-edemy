"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const PromoVideo = () => {
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

			<div className="instructor-video-area">
				<div className="container">
					<div className="instructor-video-box">
						<div className="image">
							<Image
								src="/images/instructor-home/video.jpg"
								width={1050}
								height={700}
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
					</div>
				</div>

				<div className="video-wave-shape">
					<Image
						src="/images/instructor-home/video-wave.png"
						width={1920}
						height={378}
						alt="image"
					/>
				</div>
				<div className="instructor-video-shape">
					<Image
						src="/images/instructor-home/events/shape.png"
						width={160}
						height={162}
						alt="image"
					/>
				</div>
			</div>
		</>
	);
};

export default PromoVideo;
