"use client";
import React from "react";
import Image from "next/image";

const Partner = () => {
	return (
		<>
			<div className="pb-100">
				<div className="container">
					<div className="row justify-content-center align-items-center">
						<div className="col-lg-2 col-6 col-sm-3 col-md-3">
							<div className="single-partner-item my-3">
								<Image
									src="/images/kitchen-home/partner-img1.png"
									width={144}
									height={22}
									alt="image"
								/>
							</div>
						</div>
						<div className="col-lg-2 col-6 col-sm-3 col-md-3">
							<div className="single-partner-item my-3">
								<Image
									src="/images/kitchen-home/partner-img2.png"
									width={144}
									height={22}
									alt="image"
								/>
							</div>
						</div>
						<div className="col-lg-2 col-6 col-sm-3 col-md-3">
							<div className="single-partner-item my-3">
								<Image
									src="/images/kitchen-home/partner-img3.png"
									width={144}
									height={22}
									alt="image"
								/>
							</div>
						</div>
						<div className="col-lg-2 col-6 col-sm-3 col-md-3">
							<div className="single-partner-item my-3">
								<Image
									src="/images/kitchen-home/partner-img4.png"
									width={144}
									height={22}
									alt="image"
								/>
							</div>
						</div>
						<div className="col-lg-2 col-6 col-sm-3 col-md-3">
							<div className="single-partner-item my-3">
								<Image
									src="/images/kitchen-home/partner-img5.png"
									width={144}
									height={22}
									alt="image"
								/>
							</div>
						</div>
						<div className="col-lg-2 col-6 col-sm-3 col-md-3">
							<div className="single-partner-item my-3">
								<Image
									src="/images/kitchen-home/partner-img6.png"
									width={144}
									height={22}
									alt="image"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Partner;
