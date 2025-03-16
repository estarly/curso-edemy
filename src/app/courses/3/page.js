import CoursesContent3 from "@/components/Courses/CoursesContent3";
import PageBanner from "@/components/Shared/PageBanner";

const page = async () => {
	return (
		<>
			<PageBanner
				pageTitle="Courses Grid 03"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Courses Grid 03"
			/> 

      <CoursesContent3 />
		</>
	);
};

export default page;
