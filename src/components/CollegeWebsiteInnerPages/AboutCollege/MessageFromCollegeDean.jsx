"use client";

import React from "react";
import Image from "next/image";

const MessageFromCollegeDean = () => {
	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<Image
								src="/images/college-website/college-dean.png"
								width={1092}
								height={983}
								alt="college"
							/>
						</div>

						<div className="col-lg-6">
							<div className="cw-college-dean-message">
								<h2 className="title playfair-display-font">
									A message from the college dean
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

								<p>Sincerely,</p>
								<h4 className="name playfair-display-font">
									Angel Jensen
								</h4>
								<p>Dean of the College</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MessageFromCollegeDean;
