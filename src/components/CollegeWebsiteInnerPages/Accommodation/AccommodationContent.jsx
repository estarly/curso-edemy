"use client";

import React from "react";
import Image from "next/image";

const AccommodationContent = () => {
	return (
		<>
			<div className="ptb-100 position-relative">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-12 col-xl-6">
							<div className="cw-accommodation-content">
								<h3 className="playfair-display-font">
									eDemy accommodation
								</h3>

								<p>
									Vestibulum ac diam sit amet quam vehicula
									elementum sed sit amet dui. Quisque velit
									nisi, pretium ut lacinia in, elementum id
									enim. Curabitur aliquet quam id dui posuere
									blandit. Curabitur aliquet quam id dui
									posuere blandit.{" "}
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
									id dui posuere blandit.
								</p>

								<ul>
									<li>Sed porttitor lectus nibh. </li>
									<li>
										Quisque velit nisi, pretium ut lacinia
										in, elementum id enim.{" "}
									</li>
									<li>Nulla porttitor accumsan tincidunt.</li>
									<li>
										Donec rutrum congue leo eget malesuada.
									</li>
								</ul>
							</div>
						</div>

						<div className="col-lg-12 col-xl-6">
							<Image
								src="/images/college-website/accommodation.png"
								width={1064}
								height={792}
								alt="accommodation"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AccommodationContent;
