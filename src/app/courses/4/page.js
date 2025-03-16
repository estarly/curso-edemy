import CoursesContent4 from "@/components/Courses/CoursesContent4";
import PageBanner from "@/components/Shared/PageBanner";

const page = async () => {
	return (
		<>
			<PageBanner
				pageTitle="Courses Grid 04"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Courses Grid 04"
			/> 

      <CoursesContent4 />
		</>
	);
};

export default page;
