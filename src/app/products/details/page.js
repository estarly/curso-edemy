import PageBanner from "@/components/Shared/PageBanner";
import DetailsContent from "./DetailsContent";
import RelatedProducts from "./RelatedProducts";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="Product Details"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Product Details"
			/>

			<DetailsContent />
			<RelatedProducts />
		</>
	);
};

export default page;
