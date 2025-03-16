import CourseOverview from "@/components/CollegeWebsiteInnerPages/Business/CourseOverview";
import CourseSubjects from "@/components/CollegeWebsiteInnerPages/Business/CourseSubjects";
import PageBanner from "@/components/CollegeWebsiteInnerPages/PageBanner";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="Business"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Business"
			/>
			<CourseOverview />
			<CourseSubjects />
		</>
	);
};

export default page;
