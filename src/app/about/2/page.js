import FunFacts from "@/components/Shared/FunFacts";
import PageBanner from "@/components/Shared/PageBanner";
import Partner from "@/components/Shared/Partner";
import Testimonials from "@/components/Shared/Testimonials";
import AboutArea from "@/components/VendorCertificationTraining/AboutArea";
import CourseAdvisor from "@/components/VendorCertificationTraining/CourseAdvisor";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="About Us"
				homePageUrl="/"
				homePageText="Home"
				activePageText="About Us"
			/>
			<AboutArea />
			<FunFacts />
			<Testimonials />
			<CourseAdvisor />
			<Partner />
		</>
	);
};

export default page;
