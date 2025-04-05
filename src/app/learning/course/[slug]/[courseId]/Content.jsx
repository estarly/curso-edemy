"use client";

import React, { useEffect, useState } from "react";
import CourseOverview from "@/components/Learning/CourseOverview";
import CourseAsset from "@/components/Learning/CourseAsset";
import CourseRating from "@/components/Learning/CourseRating";
import CourseRequirements from "@/components/Learning/CourseRequirements";
import CourseWhatYouWillLearn from "@/components/Learning/CourseWhatYouWillLearn";
import CourseWhoIsThisCourseFor from "@/components/Learning/CourseWhoIsThisCourseFor";

const Content = ({ description,requirements,  what_you_will_learn, who_is_this_course_for, assets, reviews }) => {

	const [activeTab, setActiveTab] = useState(1);

	const handleTabClick = (index) => {
		setActiveTab(index);
	};
	return (
		<>
			<ul className="nav-style1 learning-course-nav">
				<li
					onClick={() => handleTabClick(0)}
					className={` ${activeTab === 0 ? "active" : ""}`}
				>
					Acerca del curso
				</li>
				<li
					onClick={() => handleTabClick(1)}
					className={` ${activeTab === 1 ? "active" : ""}`}
				>
					Leccion y Evaluación
				</li>
				<li
					onClick={() => handleTabClick(2)}
					className={` ${activeTab === 2 ? "active" : ""}`}
				>
					Reseñas
				</li>
			</ul>

			<div>
				{activeTab === 0 && (
					<>
						<CourseOverview content={description} />
						<CourseRequirements content={requirements} />
						<CourseWhatYouWillLearn content={what_you_will_learn} />
						<CourseWhoIsThisCourseFor content={who_is_this_course_for} />
					</>
				)}
				{activeTab === 1 && <CourseAsset assets={assets[0]} />}
				{activeTab === 2 && <CourseRating reviews={reviews} />}
			</div>
		</>
	);
};

export default Content;
