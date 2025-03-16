import CoursesContent2 from "@/components/Courses/CoursesContent2";
import PageBanner from "@/components/Shared/PageBanner";

const page = async () => {
	return (
		<>
			<PageBanner
				pageTitle="Courses Grid 02"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Courses Grid 02"
			/> 

      <CoursesContent2 />
		</>
	);
};

export default page;
