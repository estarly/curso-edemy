"use client";
import React from "react";
import Image from "next/image";

const AccommodationGuarantee = () => {
	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="cw-accommodation-guarantee-img">
								<Image
									src="/images/college-website/accommodation-guarantee.png"
									width={879}
									height={832}
									alt="accommodation"
								/>

								<div className="cw-pdf-file d-flex align-items-center">
									<Image
										src="/images/college-website/icon9.png"
										width={30}
										height={30}
										alt="icon9"
									/>
									<p>
										Need all information download{" "}
										<a href="#">PDF file</a>
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-6">
							<div className="cw-accommodation-guarantee">
								<h2 className="title playfair-display-font">
									Accommodation guarantee
								</h2>

								<p>
									Vestibulum ante ipsum primis in faucibus
									orci luctus et ultrices posuere cubilia
									Curae; Donec velit neque, auctor sit amet
									aliquam vel, ullamcorper sit amet ligula.
									Curabitur aliquet quam id dui posuere
									blandit. Curabitur non nulla sit amet nisl
									tempus convallis quis ac lectus. Cras
									ultricies ligula sed magna dictum porta.
								</p>

								<p>
									Proin eget tortor risus. Donec rutrum congue
									leo eget malesuada. Vivamus magna justo,
									lacinia eget consectetur sed, convallis at
									tellus. Lorem ipsum dolor sit amet,
									consectetur adipiscing elit. Mauris blandit
									aliquet elit, eget tincidunt nibh pulvinar
									a. Cras ultricies ligula sed magna dictum
									porta. Vivamus suscipit tortor eget felis
									porttitor volutpat. Curabitur aliquet quam
									id dui posuere blandit. Sed porttitor lectus
									nibh. Quisque velit nisi, pretium ut lacinia
									in, elementum id enim. Nulla porttitor
									accumsan tincidunt. Sed porttitor lectus
									nibh.
								</p>

								<div className="row">
									<div className="col-sm-6">
										<div className="cw-ag-list-card d-flex align-items-center">
											<div className="icon">
												<i className="bx bx-check-double"></i>
											</div>
											<h5 className="playfair-display-font">
												Register your interest
											</h5>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="cw-ag-list-card d-flex align-items-center">
											<div className="icon">
												<i className="bx bx-check-double"></i>
											</div>
											<h5 className="playfair-display-font">
												Receive an invite
											</h5>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="cw-ag-list-card d-flex align-items-center">
											<div className="icon">
												<i className="bx bx-check-double"></i>
											</div>
											<h5 className="playfair-display-font">
												Book your room
											</h5>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="cw-ag-list-card d-flex align-items-center">
											<div className="icon">
												<i className="bx bx-check-double"></i>
											</div>
											<h5 className="playfair-display-font">
												Sign your contract
											</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AccommodationGuarantee;
