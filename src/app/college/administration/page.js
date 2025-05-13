import CollegeGoverningBody from "@/components/CollegeWebsiteInnerPages/Administration/CollegeGoverningBody";
import DepartmentsOfCollege from "@/components/CollegeWebsiteInnerPages/Administration/DepartmentsOfCollege";
import MessageFromCollegeChairman from "@/components/CollegeWebsiteInnerPages/Administration/MessageFromCollegeChairman";
import MessageFromCollegePrincipal from "@/components/CollegeWebsiteInnerPages/Administration/MessageFromCollegePrincipal";
import PageBanner from "@/components/CollegeWebsiteInnerPages/PageBanner";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="Administración"
				homePageUrl="/"
				homePageText="Inicio"
				activePageText="Administración"
			/>
			<MessageFromCollegeChairman />
			<MessageFromCollegePrincipal />
			<CollegeGoverningBody />
			<DepartmentsOfCollege />
		</>
	);
};

export default page;
