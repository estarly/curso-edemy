import AboutUs from "@/components/ModernSchooling/AboutUs";
import Banner from "@/components/ModernSchooling/Banner";
import Courses from "@/components/ModernSchooling/Courses";
import DistanceLearning from "@/components/ModernSchooling/DistanceLearning";
import FeaturedCourses from "@/components/ModernSchooling/FeaturedCourses";
import FeedbackSlider from "@/components/ModernSchooling/FeedbackSlider";
import UpcomingEvents from "@/components/ModernSchooling/UpcomingEvents";
import TopCategories from "@/components/OnlineTrainingSchool/TopCategories";
import FunFactsTwo from "@/components/Shared/FunFactsTwo";
import Partner from "@/components/Shared/Partner";
import SubscribeForm from "@/components/Shared/SubscribeForm";

const page = () => {
	return (
		<>
			<Banner />
			<FeaturedCourses />
			<AboutUs />
			<Courses />
			<FeedbackSlider />
			<TopCategories />
			<FunFactsTwo />
			<DistanceLearning />
			<UpcomingEvents />
			<SubscribeForm mainClsAtts="subscribe-area ptb-100" />
			<Partner mainClsAtts="partner-area bg-fe4a55 ptb-70" />
		</>
	);
};

export default page;
