"use client";

import React from "react";
import { hasHtmlContent } from "@/utils/htmlContent";

const CourseWhatYouWillLearn = ({ content }) => {
	return (
		<>
		{hasHtmlContent(content) && (
			<div className="courses-details-desc-style-two">
				<h3>Lo que aprenderás</h3>
				<div dangerouslySetInnerHTML={{ __html: content }} />
				</div>
			)}
		</>
	);
};

export default CourseWhatYouWillLearn;
