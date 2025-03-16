import PageBanner from "@/components/Shared/PageBanner";
import Products from "./Products";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="Products"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Products"
			/>
			<Products />
		</>
	);
};

export default page;
