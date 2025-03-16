import CoursesContent6 from "@/components/Courses/CoursesContent6";
import PageBanner from "@/components/Shared/PageBanner";

const page = async () => {
	return (
		<>
			<PageBanner
				pageTitle="Courses Right Sidebar"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Courses Right Sidebar"
			/> 

      <CoursesContent6 />
		</>
	);
};

export default page;
