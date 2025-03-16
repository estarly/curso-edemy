import CollegeStaff from "@/components/CollegeWebsite/CollegeStaff";
import Cta from "@/components/CollegeWebsite/Cta";
import FunFacts from "@/components/CollegeWebsite/FunFacts";
import AboutUsContent from "@/components/CollegeWebsiteInnerPages/AboutCollege/AboutUsContent";
import Features from "@/components/CollegeWebsiteInnerPages/AboutCollege/Features";
import MessageFromCollegeDean from "@/components/CollegeWebsiteInnerPages/AboutCollege/MessageFromCollegeDean";
import WelcomeToCollege from "@/components/CollegeWebsiteInnerPages/AboutCollege/WelcomeToCollege";
import PageBanner from "@/components/CollegeWebsiteInnerPages/PageBanner";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="About college"
				homePageUrl="/"
				homePageText="Home"
				activePageText="About college"
			/>
			<WelcomeToCollege />
			<Features />
			<AboutUsContent />
			<FunFacts />
			<div className="pt-100">
				<CollegeStaff />
			</div>
			<Cta />
			<MessageFromCollegeDean />
		</>
	);
};

export default page;
