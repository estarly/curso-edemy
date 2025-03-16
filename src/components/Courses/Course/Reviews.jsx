"use client";

import React from "react";
import FeedbackForm from "./FeedbackForm";
import {
	averageRating,
	averageStarRating,
	generateHTMLBars,
	generateStars,
	ratingLabel,
} from "@/utils/generateStars";

const Reviews = ({ currentUser, id, reviews }) => {
	return (
		<>
			<div className="courses-reviews">
				<h3>Course Rating</h3>
				{averageStarRating(reviews)}
				<div className="rating-count">
					<span>
						{reviews ? averageRating(reviews) : 0} average based on{" "}
						{reviews ? reviews.length : 0} reviews.
					</span>
				</div>

				<div className="row">
					<div
						dangerouslySetInnerHTML={{
							__html: generateHTMLBars(reviews),
						}}
					/>
				</div>
			</div>

			<div className="courses-review-comments mb-4">
				<h3>{reviews ? reviews.length : 0} Reviews</h3>

				{reviews &&
					reviews.map((review) => (
						<div key={review.id} className="user-review">
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
			<FeedbackForm currentUser={currentUser} courseId={id} />
		</>
	);
};

export default Reviews;
