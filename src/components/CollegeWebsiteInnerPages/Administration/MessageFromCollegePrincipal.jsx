"use client";

import React from "react";
import Image from "next/image";

const MessageFromCollegePrincipal = () => {
	return (
		<>
			<div className="cw-message-from-principal from pt-100 pb-70">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-xl-6">
							<div className="cw-college-admission-system mb-30">
								<Image
									src="/images/college-website/college-principal.jpg"
									width={710}
									height={463}
									alt="scholarships"
								/>
							</div>
						</div>

						<div className="col-lg-6 col-xl-6">
							<div className="cw-college-admission-system-content mb-30">
								<h3 className="playfair-display-font">
									A message from the college principal
								</h3>

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
									Mauris blandit aliquet elit, eget tincidunt
									nibh pulvinar a. Praesent sapien massa,
									convallis a pellentesque nec, egestas non
									nisi. Vivamus suscipit tortor eget felis
									porttitor volutpat. Curabitur non nulla sit
									amet nisl tempus convallis quis ac lectus.
									Quisque velit nisi, pretium ut lacinia in,
									elementum id enim. Vestibulum ac diam sit
									amet quam vehicula elementum sed sit amet
									dui.{" "}
								</p>

								<div className="mt-4">
									<p className="mb-2">Sincerely,</p>
									<h4 className="cw-number playfair-display-font">
										Joanne Nelson
									</h4>
									<p>Principal of the College</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MessageFromCollegePrincipal;
