import PageBanner from "@/components/Shared/PageBanner";
import DetailsContent from "./DetailsContent";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="Blog Details"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Blog Details"
			/>
			<DetailsContent />
		</>
	);
};

export default page;
