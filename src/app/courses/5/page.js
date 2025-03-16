import CoursesContent5 from "@/components/Courses/CoursesContent5";
import PageBanner from "@/components/Shared/PageBanner";

const page = async () => {
	return (
		<>
			<PageBanner
				pageTitle="Courses List 01"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Courses List 01"
			/> 

      <CoursesContent5 />
		</>
	);
};

export default page;
