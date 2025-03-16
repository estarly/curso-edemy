"use client";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";

const PhotoGallery = () => {
	return (
		<>
			<div className="ptb-100 bg-fef8ef position-relative">
				<Image
					src="/images/online-photography/shape6.png"
					width={361}
					height={352}
					alt="shape6"
					className="op-shape6 d-none d-xxl-block"
				/>

				<div className="container">
					<div className="section-title">
						<span className="sub-title">Photo gallery</span>
						<h2>
							Elevate Your Photography Game with Expert Coaching
						</h2>
					</div>

					<ResponsiveMasonry
						columnsCountBreakPoints={{
							300: 1,
							576: 2,
							992: 3,
						}}
					>
						<Masonry gutter="25px">
							<div className="op-gallery-card mb-0">
								<Image
									src="/images/online-photography/gallery1.jpg"
									width={636}
									height={498}
									alt="gallery"
								/>
							</div>

							<div className="op-gallery-card mb-0">
								<Image
									src="/images/online-photography/gallery2.jpg"
									width={636}
									height={498}
									alt="gallery"
								/>
							</div>

							<div className="op-gallery-card mb-0">
								<Image
									src="/images/online-photography/gallery3.jpg"
									width={636}
									height={498}
									alt="gallery"
								/>
							</div>

							<div className="op-gallery-card mb-0">
								<Image
									src="/images/online-photography/gallery4.jpg"
									width={636}
									height={498}
									alt="gallery"
								/>
							</div>

							<div className="op-gallery-card mb-0">
								<Image
									src="/images/online-photography/gallery6.jpg"
									width={636}
									height={498}
									alt="gallery"
								/>
							</div>

							<div className="op-gallery-card mb-0">
								<Image
									src="/images/online-photography/gallery5.jpg"
									width={636}
									height={498}
									alt="gallery"
								/>
							</div>
						</Masonry>
					</ResponsiveMasonry>
				</div>

				<Image
					src="/images/online-photography/shape7.png"
					width={175}
					height={175}
					alt="shape7"
					className="op-shape7 d-none d-xxl-block"
				/>
			</div>
		</>
	);
};

export default PhotoGallery;
