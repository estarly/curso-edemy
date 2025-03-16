import ApplyNowForm from "@/components/CollegeWebsiteInnerPages/ApplyNow/ApplyNowForm";
import PageBanner from "@/components/CollegeWebsiteInnerPages/PageBanner";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="Apply Now"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Apply Now"
			/>
			<ApplyNowForm />
		</>
	);
};

export default page;
