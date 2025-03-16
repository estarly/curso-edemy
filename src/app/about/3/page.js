import CourseAdvisor from "@/components/DistanceLearning/CourseAdvisor";
import Features from "@/components/Index/Features";
import AboutArea from "@/components/OnlineTrainingSchool/AboutArea";
import FeedbackSlider from "@/components/OnlineTrainingSchool/FeedbackSlider";
import FunFactsTwo from "@/components/Shared/FunFactsTwo";
import PageBanner from "@/components/Shared/PageBanner";
import PremiumAccess from "@/components/VendorCertificationTraining/PremiumAccess";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="About Us"
				homePageUrl="/"
				homePageText="Home"
				activePageText="About Us"
			/>
			<Features />
			<AboutArea />
			<FeedbackSlider />
			<CourseAdvisor />
			<FunFactsTwo />
			<div className="ptb-100">
				<PremiumAccess />
			</div>
		</>
	);
};

export default page;
