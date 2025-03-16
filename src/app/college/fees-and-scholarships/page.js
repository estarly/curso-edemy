import AnnualTuitionFeesPostgraduate from "@/components/CollegeWebsiteInnerPages/FeesAndScholarships/AnnualTuitionFeesPostgraduate";
import AnnualTuitionFeesUndergraduate from "@/components/CollegeWebsiteInnerPages/FeesAndScholarships/AnnualTuitionFeesUndergraduate";
import FeesAndScholarshipsContent from "@/components/CollegeWebsiteInnerPages/FeesAndScholarships/FeesAndScholarshipsContent";
import Scholarships from "@/components/CollegeWebsiteInnerPages/FeesAndScholarships/Scholarships";
import PageBanner from "@/components/CollegeWebsiteInnerPages/PageBanner";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="Fees and scholarships"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Fees and scholarships"
			/>
			<FeesAndScholarshipsContent />
			<AnnualTuitionFeesUndergraduate />
			<AnnualTuitionFeesPostgraduate />
			<Scholarships />
		</>
	);
};

export default page;
