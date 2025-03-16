import AboutMe from "@/components/BusinessCoach/AboutMe";
import Banner from "@/components/BusinessCoach/Banner";
import CoachingTypes from "@/components/BusinessCoach/CoachingTypes";
import Features from "@/components/BusinessCoach/Features";
import FeedbackSlider from "@/components/BusinessCoach/FeedbackSlider";
import Funfacts from "@/components/BusinessCoach/Funfacts";
import LatestBlogPost from "@/components/BusinessCoach/LatestBlogPost";
import NewsletterForm from "@/components/BusinessCoach/NewsletterForm";
import TopSellingCourses from "@/components/BusinessCoach/TopSellingCourses";
import UpcomingEvents from "@/components/BusinessCoach/UpcomingEvents";
import { getHomepageCourses } from "@/actions/getCourses";

const page = async () => {
	const { courses } = await getHomepageCourses();

	return (
		<>
			<Banner />
			<Features />
			<AboutMe />
			<CoachingTypes />
			<Funfacts />
			<FeedbackSlider />
			<TopSellingCourses courses={courses} />
			<UpcomingEvents />
			<LatestBlogPost />
			<NewsletterForm />
		</>
	);
};

export default page;
