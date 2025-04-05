import React from "react";

import { myLearningPlay } from "@/actions/myLearning";
import MainContent from "./MainContent";

const Page = async ({ params }) => {
	const { course } = await myLearningPlay(params);
	
	//console.log(course.assets[0].assignments, "course");
	return (
		<>
			<div className="mt-5 pb-5 video-area">
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
