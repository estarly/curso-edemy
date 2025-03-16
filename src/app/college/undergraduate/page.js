import LatestBlogPost from "@/components/CollegeWebsite/LatestBlogPost";
import PageBanner from "@/components/CollegeWebsiteInnerPages/PageBanner";
import OurCoursesEventUndergraduateFees from "@/components/CollegeWebsiteInnerPages/Undergraduate/OurCoursesEventUndergraduateFees";
import UndergraduateStudyGuide from "@/components/CollegeWebsiteInnerPages/Undergraduate/UndergraduateStudyGuide";
import UndergraduateStudyOpenDay from "@/components/CollegeWebsiteInnerPages/Undergraduate/UndergraduateStudyOpenDay";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="Undergraduate"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Undergraduate"
			/>
			<UndergraduateStudyOpenDay />
			<OurCoursesEventUndergraduateFees />
			<UndergraduateStudyGuide />
			<LatestBlogPost />
		</>
	);
};

export default page;
