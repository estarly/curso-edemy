import LatestBlogPost from "@/components/BusinessCoach/LatestBlogPost";
import AboutMe from "@/components/Motivation/AboutMe";
import Banner from "@/components/Motivation/Banner";
import Features from "@/components/Motivation/Features";
import FeedbackSlider from "@/components/Motivation/FeedbackSlider";
import NewsletterForm from "@/components/Motivation/NewsletterForm";
import OurUpcomingEvents from "@/components/Motivation/OurUpcomingEvents";
import TopSellingCourses from "@/components/Motivation/TopSellingCourses";
import { getHomepageCourses } from "@/actions/getCourses";

const page = async () => {
	const { courses } = await getHomepageCourses();

	return (
		<>
			<Banner />
			<Features />
			<AboutMe />
			<TopSellingCourses courses={courses} />
			<FeedbackSlider />
			<OurUpcomingEvents />
			<NewsletterForm />
			<LatestBlogPost />
		</>
	);
};

export default page;
