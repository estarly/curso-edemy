import Content from "@/components/Blog/Content2";
import PageBanner from "@/components/Shared/PageBanner";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="Blog Grid (3 in Row)"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Blog Grid (3 in Row)"
			/>
			<Content />
		</>
	);
};

export default page;
