import CollegeGoverningBody from "@/components/CollegeWebsiteInnerPages/Administration/CollegeGoverningBody";
import DepartmentsOfCollege from "@/components/CollegeWebsiteInnerPages/Administration/DepartmentsOfCollege";
import MessageFromCollegeChairman from "@/components/CollegeWebsiteInnerPages/Administration/MessageFromCollegeChairman";
import MessageFromCollegePrincipal from "@/components/CollegeWebsiteInnerPages/Administration/MessageFromCollegePrincipal";
import PageBanner from "@/components/CollegeWebsiteInnerPages/PageBanner";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="Administration"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Administration"
			/>
			<MessageFromCollegeChairman />
			<MessageFromCollegePrincipal />
			<CollegeGoverningBody />
			<DepartmentsOfCollege />
		</>
	);
};

export default page;
