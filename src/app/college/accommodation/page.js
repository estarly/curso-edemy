import Cta from "@/components/CollegeWebsite/Cta";
import AccommodationContent from "@/components/CollegeWebsiteInnerPages/Accommodation/AccommodationContent";
import AccommodationGuarantee from "@/components/CollegeWebsiteInnerPages/Accommodation/AccommodationGuarantee";
import WhyLiveInHalls from "@/components/CollegeWebsiteInnerPages/Accommodation/WhyLiveInHalls";
import PageBanner from "@/components/CollegeWebsiteInnerPages/PageBanner";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="Accommodation"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Accommodation"
			/>
			<AccommodationContent />
			<WhyLiveInHalls />
			<Cta />
			<AccommodationGuarantee />
		</>
	);
};

export default page;
