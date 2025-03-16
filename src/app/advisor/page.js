import Index from "@/components/Advisor/Index";
import PremiumAccess from "@/components/OnlineTrainingSchool/PremiumAccess";
import PageBanner from "@/components/Shared/PageBanner";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="Advisor"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Advisor"
			/>

			<Index />
			<div className="pb-100">
				<PremiumAccess />
			</div>
		</>
	);
};

export default page;
