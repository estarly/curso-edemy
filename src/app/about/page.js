import AboutUs from "@/components/About/AboutUs";
import PremiumAccess from "@/components/OnlineTrainingSchool/PremiumAccess";
import PageBanner from "@/components/Shared/PageBanner";
import Partner from "@/components/Shared/Partner";
import CourseAdvisor from "@/components/VendorCertificationTraining/CourseAdvisor";
import Features from "@/components/eLearningSchool/Features";
import FeedbackSliderWithFunFacts from "@/components/eLearningSchool/FeedbackSliderWithFunFacts";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="Sobre nosotros"
				homePageUrl="/"
				homePageText="Inicio"
				activePageText="Sobre nosotros"
			/>
			<AboutUs />
			<FeedbackSliderWithFunFacts />
			<Features />
			<CourseAdvisor />
			<PremiumAccess />
			<Partner />
		</>
	);
};

export default page;
