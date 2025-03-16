"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Scholarships = () => {
	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-12 col-xl-6">
							<div className="cw-scholarships-img">
								<Image
									src="/images/college-website/scholarships2.jpg"
									width={672}
									height={449}
									alt="scholarships"
								/>
							</div>
						</div>

						<div className="col-lg-12 col-xl-6">
							<div className="cw-scholarships-content">
								<h3>Scholarships</h3>

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
									aliquet elit, eget tincidunt nibh pulvinar.
								</p>

								<div className="cw-scholarships-list">
									<div className="cw-list-card">
										<h4>Merit aid:</h4>
										<p>
											Scholarships awarded based on
											academic merit. Amounts range from
											$700 – $1000 annually
										</p>
									</div>
									<div className="cw-list-card">
										<h4>Performance aid:</h4>
										<p>
											Scholarships awarded based on
											academic merit. Amounts range from
											$500 – $900 annually
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="cw-scholarships-pdf text-center">
						<p>
							Find more information on tuition fees, please
							download our <Link href="#">PDF file</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Scholarships;
