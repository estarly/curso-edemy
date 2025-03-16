import AboutUs from "@/components/HealthCoaching/AboutUs";
import Banner from "@/components/HealthCoaching/Banner";
import ChooseProgram from "@/components/HealthCoaching/ChooseProgram";
import Feedback from "@/components/HealthCoaching/Feedback";
import HealthServices from "@/components/HealthCoaching/HealthServices";
import LifestyleCourses from "@/components/HealthCoaching/LifestyleCourses";
import SubscribeForm from "@/components/HealthCoaching/SubscribeForm";
import TopSellingCourses from "@/components/HealthCoaching/TopSellingCourses";
import UpcomingEvents from "@/components/HealthCoaching/UpcomingEvents";
import LatestBlog from "@/components/YogaTraining/LatestBlog";

const page = () => {
	return (
		<>
			<Banner />
			<LifestyleCourses />
			<ChooseProgram />
			<HealthServices />
			<AboutUs />
			<TopSellingCourses />
			<Feedback />
			<UpcomingEvents />
			<LatestBlog />
			<SubscribeForm />
		</>
	);
};

export default page;
