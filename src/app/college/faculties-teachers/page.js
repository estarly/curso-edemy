import DepartmentsOfEnglish from "@/components/CollegeWebsiteInnerPages/FacultiesTeachers/DepartmentsOfEnglish";
import PageBanner from "@/components/CollegeWebsiteInnerPages/PageBanner";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="Faculties Teachers"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Faculties Teachers"
			/>
			<DepartmentsOfEnglish />
		</>
	);
};

export default page;
