import Content from "@/components/Blog/Content4";
import PageBanner from "@/components/Shared/PageBanner";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="Blog Right Sidebar"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Blog Right Sidebar"
			/>
			<Content />
		</>
	);
};

export default page;
