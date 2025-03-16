import React from "react";
import AboutUs from "@/components/eLearningSchool/AboutUs";
import Banner from "@/components/eLearningSchool/Banner";
import Features from "@/components/eLearningSchool/Features";
import FeedbackSliderWithFunFacts from "@/components/eLearningSchool/FeedbackSliderWithFunFacts";
import GetInstantCourses from "@/components/eLearningSchool/GetInstantCourses";
import Partner from "@/components/eLearningSchool/Partner";
import PopularCourses from "@/components/eLearningSchool/PopularCourses";
import LatestNews from "@/components/Shared/LatestNews";
import ViewAllCourses from "@/components/eLearningSchool/ViewAllCourses";
import AffordableCertification from "@/components/eLearningSchool/AffordableCertification";
import { getHomepageCourses } from "@/actions/getCourses";
import { getCurrentUser } from "@/actions/getCurrentUser";

const page = async () => {
	const { courses } = await getHomepageCourses();
	const currentUser = await getCurrentUser();
	return (
		<>
			<Banner courses={courses} currentUser={currentUser} />
			<Partner />
			<Features />
			<AboutUs />
			<PopularCourses courses={courses} currentUser={currentUser} />
			<FeedbackSliderWithFunFacts />
			<GetInstantCourses />
			<LatestNews />
			<ViewAllCourses />
			<AffordableCertification />
		</>
	);
};

export default page;
