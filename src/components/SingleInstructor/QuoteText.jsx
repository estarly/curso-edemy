"use client";
import React from "react";
import Image from "next/image";

const QuoteText = () => {
	return (
		<>
			<div className="instructor-quote-area ptb-100">
				<div className="container">
					<div className="instructor-quote-inner-box">
						<div className="row align-items-center">
							<div className="col-lg-5 col-md-12">
								<div className="instructor-quote-image">
									<Image
										src="/images/instructor-home/quote/quote.png"
										width={416}
										height={435}
										alt="image"
									/>
								</div>
							</div>

							<div className="col-lg-7 col-md-12">
								<div className="instructor-quote-content">
									<Image
										src="/images/instructor-home/quote/quotation.svg"
										width={98.55}
										height={90.523}
										alt="image"
									/>
									<p>
										The dream begins, most of the time, with
										a teacher who believes in you, who tugs
										and pushes and leads you on to the next
										plateau, sometimes poking you with a
										sharp stick called truth.
									</p>
									<span>Dan Rather</span>
								</div>
							</div>
						</div>
						<div className="quote-shape">
							<Image
								src="/images/instructor-home/quote/shape.png"
								width={110}
								height={150}
								alt="image"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default QuoteText;
