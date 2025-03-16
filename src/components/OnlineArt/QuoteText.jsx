"use client";
import React from "react";
import Image from "next/image";

const QuoteText = () => {
	return (
		<>
			<div className="oa-quote-area ptb-100">
				<div className="container">
					<div className="oa-quote-inner-box">
						<div className="row align-items-center">
							<div className="col-lg-5 col-md-12">
								<div className="oa-quote-image">
									<img
										src="/images/online-art/quote/quote.jpg"
										width={650}
										height={650}
										alt="image"
									/>
								</div>
							</div>

							<div className="col-lg-7 col-md-12">
								<div className="oa-quote-content">
									<Image
										src="/images/online-art/quote/quotation.svg"
										width={98.55}
										height={90.523}
										alt="image"
									/>
									<p>
										The artist world is limitless. It can be
										found anywhere, far from where he lives
										or a few feet away. It is always on his
										doorstep.
									</p>
									<span>Paul Strand</span>
								</div>
							</div>
						</div>
						<div className="quote-shape">
							<Image
								src="/images/online-art/quote/shape.png"
								width={115}
								height={125}
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
