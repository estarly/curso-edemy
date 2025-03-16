"use client";

import {
	averageRating,
	averageStarRating,
	generateHTMLBars,
	generateStars,
	ratingLabel,
} from "@/utils/generateStars";
import React from "react";

const CourseRating = ({ reviews }) => {
	return (
		<>
			<div className="courses-details-desc-style-two">
				<div className="row justify-content-center">
					<div className="col-lg-12 col-md-12">
						<div className="courses-review-comments mb-4">
							<h3>{reviews ? reviews.length : 0} Reviews</h3>

							{reviews &&
								reviews.map((review) => (
									<div
										key={review.id}
										className="user-review"
									>
										<img
											src={
												review.user.image
													? review.user.image
													: "/images/user2.jpg"
											}
											alt="image"
										/>

										<div className="review-rating">
											<div className="review-stars">
												{generateStars(review.rating)}
											</div>

											<span className="d-inline-block">
												{review.user.name}
											</span>
										</div>

										<span className="d-block sub-comment">
											{ratingLabel(review.rating)}
										</span>
										<p>{review.comment}</p>
									</div>
								))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CourseRating;
