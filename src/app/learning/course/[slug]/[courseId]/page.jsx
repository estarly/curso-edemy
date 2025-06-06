import React from "react";

import { myLearningPlay } from "@/actions/myLearning";
import MainContent from "./MainContent";

const Page = async ({ params }) => {
	const { course } = await myLearningPlay(params);
	
	return (
		<>
			<div className="mt-2 pb-5 video-area">
				<div className="container-fluid">
					<MainContent
						course={course}
					/>
				</div>
			</div>
		</>
	);
};

export default Page;
