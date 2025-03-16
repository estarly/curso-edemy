import PageBanner from "@/components/Shared/PageBanner";
import CartContent from "./CartContent";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="Cart"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Cart"
			/>
			<CartContent />
		</>
	);
};

export default page;
