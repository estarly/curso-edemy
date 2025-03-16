import React from "react";

import { courseReviewsAndAssets, myLearningPlay } from "@/actions/myLearning";
import MainContent from "./MainContent";

const Page = async ({ params }) => {
	const { course } = await myLearningPlay(params);
	const { reviewsAndAssets } = await courseReviewsAndAssets(params);

	// console.log(reviewsAndAssets);

	return (
		<>
			<div className="mt-5 pb-5 video-area">
				<div className="container-fluid">
					<MainContent
						course={course}
						reviewsAndAssets={reviewsAndAssets}
					/>
				</div>
			</div>
		</>
	);
};

export default Page;
