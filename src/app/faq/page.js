import PageBanner from "@/components/Shared/PageBanner";
import FaqContent from "./FaqContent";
import SubscribeForm from "@/components/Shared/SubscribeForm";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="Frequently Asked Questions"
				homePageUrl="/"
				homePageText="Home"
				activePageText="FAQ's"
			/>
			<FaqContent />
			<SubscribeForm />
		</>
	);
};

export default page;
