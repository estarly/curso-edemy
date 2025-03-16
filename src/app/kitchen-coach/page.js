import AboutMe from "@/components/KitchenCoach/AboutMe";
import Banner from "@/components/KitchenCoach/Banner";
import DownloadTheKitchenBook from "@/components/KitchenCoach/DownloadTheKitchenBook";
import Features from "@/components/KitchenCoach/Features";
import FeedbackSlider from "@/components/KitchenCoach/FeedbackSlider";
import HappinessIsCookingTogether from "@/components/KitchenCoach/HappinessIsCookingTogether";
import Newsletter from "@/components/KitchenCoach/Newsletter";
import Partner from "@/components/KitchenCoach/Partner";
import TopSellingCourses from "@/components/KitchenCoach/TopSellingCourses";
import UpcomingEvents from "@/components/KitchenCoach/UpcomingEvents";

const page = () => {
	return (
		<>
			<Banner />
			<Features />
			<AboutMe />
			<Partner />
			<DownloadTheKitchenBook />
			<TopSellingCourses />
			<FeedbackSlider />
			<UpcomingEvents />
			<Newsletter />
			<HappinessIsCookingTogether />
		</>
	);
};

export default page;
