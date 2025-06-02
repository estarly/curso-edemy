"use client";

import React, { useEffect, useState } from "react";
import CourseOverview from "@/components/Learning/CourseOverview";
import CourseAsset from "@/components/Learning/CourseAsset";
import CourseRating from "@/components/Learning/CourseRating";
import CourseRequirements from "@/components/Learning/CourseRequirements";
import CourseWhatYouWillLearn from "@/components/Learning/CourseWhatYouWillLearn";
import CourseWhoIsThisCourseFor from "@/components/Learning/CourseWhoIsThisCourseFor";

const Content = ({
	description,
	requirements,
	what_you_will_learn,
	who_is_this_course_for,
	assets,
	reviews,
	indexAsset,
	activeTab,
	setActiveTab,
	onContinue,
}) => {
	const [activeTabLocal, setActiveTabLocal] = useState(activeTab || indexAsset);

	useEffect(() => {
		setActiveTabLocal(activeTab);
	}, [activeTab]);
	
	const handleTabClick = (index) => {
		setActiveTabLocal(index);
		if (setActiveTab) {
			setActiveTab(index);
		}
	};

	return (
		<>
			<ul className="nav-style1 learning-course-nav">
				<li
					onClick={() => handleTabClick(0)}
					className={`${activeTabLocal === 0 ? "active" : ""}`}
				>
					Acerca del curso
				</li>
				<li
					onClick={() => handleTabClick(1)}
					className={`${activeTabLocal === 1 ? "active" : ""}`}
				>
					Lecciones y Evaluación
				</li>
				<li
					onClick={() => handleTabClick(2)}
					className={`${activeTabLocal === 2 ? "active" : ""}`}
				>
					Reseñas
				</li>
			</ul>

			<div>
				{activeTabLocal === 0 && (
					<>
						<CourseOverview content={description} />
						<CourseRequirements content={requirements} />
						<CourseWhatYouWillLearn content={what_you_will_learn} />
						<CourseWhoIsThisCourseFor content={who_is_this_course_for} />
					</>
				)}
				{activeTabLocal === 1 && <CourseAsset assets={assets} onContinue={onContinue} />}
				{activeTabLocal === 2 && <CourseRating reviews={reviews} />}
			</div>
		</>
	);
};

export default Content;
