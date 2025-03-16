import Content from "@/components/Blog/Content3";
import PageBanner from "@/components/Shared/PageBanner";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="Blog Grid (Full Width)"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Blog Grid (Full Width)"
			/>
			<Content />
		</>
	);
};

export default page;
