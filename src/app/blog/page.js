import Content from "@/components/Blog/Content";
import PageBanner from "@/components/Shared/PageBanner";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="Blog Grid (2 in Row)"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Blog Grid (2 in Row)"
			/>
			<Content />
		</>
	);
};

export default page;
