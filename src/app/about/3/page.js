import CourseAdvisor from "@/components/DistanceLearning/CourseAdvisor";

import AboutArea from "@/components/OnlineTrainingSchool/AboutArea";
import FeedbackSlider from "@/components/OnlineTrainingSchool/FeedbackSlider";
import FunFactsTwo from "@/components/Shared/FunFactsTwo";
import PageBanner from "@/components/Shared/PageBanner";
import PremiumAccess from "@/components/VendorCertificationTraining/PremiumAccess";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="Sobre nosotros"
				homePageUrl="/"
				PageText="Inicio"
				activePageText="Sobre nosotros"
			/>
			{/*<Features />*/}
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
