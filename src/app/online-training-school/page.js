import AboutArea from "@/components/OnlineTrainingSchool/AboutArea";
import Banner from "@/components/OnlineTrainingSchool/Banner";
import CourseAdvisor from "@/components/OnlineTrainingSchool/CourseAdvisor";
import CoursesArea from "@/components/OnlineTrainingSchool/CoursesArea";
import Features from "@/components/OnlineTrainingSchool/Features";
import FeedbackSlider from "@/components/OnlineTrainingSchool/FeedbackSlider";
import PremiumAccess from "@/components/OnlineTrainingSchool/PremiumAccess";
import TopCategories from "@/components/OnlineTrainingSchool/TopCategories";
import FunFactsTwo from "@/components/Shared/FunFactsTwo";
import LatestNews from "@/components/Shared/LatestNews";
import Partner from "@/components/Shared/Partner";
import SubscribeForm from "@/components/Shared/SubscribeForm";

const page = () => {
	return (
		<>
			<Banner />
			<CoursesArea />
			<Features />
			<AboutArea />
			<FeedbackSlider />
			<TopCategories />
			<FunFactsTwo />
			<CourseAdvisor />
			<PremiumAccess />
			<LatestNews />
			<SubscribeForm />
			<Partner />
		</>
	);
};

export default page;
