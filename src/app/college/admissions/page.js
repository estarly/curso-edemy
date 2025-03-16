import Cta from "@/components/CollegeWebsite/Cta";
import FunFacts from "@/components/CollegeWebsite/FunFacts";
import AdmissionsStaff from "@/components/CollegeWebsiteInnerPages/CollegeAdmissions/AdmissionsStaff";
import CollegeAdmissionSystem from "@/components/CollegeWebsiteInnerPages/CollegeAdmissions/CollegeAdmissionSystem";
import CollegeAdmissionsContent from "@/components/CollegeWebsiteInnerPages/CollegeAdmissions/CollegeAdmissionsContent";
import PageBanner from "@/components/CollegeWebsiteInnerPages/PageBanner";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="College Admissions"
				homePageUrl="/"
				homePageText="Home"
				activePageText="College Admissions"
			/>
			<CollegeAdmissionSystem />
			<FunFacts />
			<CollegeAdmissionsContent />
			<Cta />
			<AdmissionsStaff />
		</>
	);
};

export default page;
