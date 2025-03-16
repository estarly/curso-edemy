import Banner from "@/components/GymCoaching/Banner";
import DigitalFitnessCoaching from "@/components/GymCoaching/DigitalFitnessCoaching";
import DownloadTheApp from "@/components/GymCoaching/DownloadTheApp";
import Features from "@/components/GymCoaching/Features";
import FeedbackSlider from "@/components/GymCoaching/FeedbackSlider";
import FunFacts from "@/components/GymCoaching/FunFacts";
import Instructor from "@/components/GymCoaching/Instructor";
import LatestBlogPost from "@/components/GymCoaching/LatestBlogPost";
import TopSellingCourses from "@/components/GymCoaching/TopSellingCourses";
import WhyChooseUs from "@/components/GymCoaching/WhyChooseUs";
import { getHomepageCourses } from "@/actions/getCourses";

const page = async () => {
	const { courses } = await getHomepageCourses();

	return (
		<>
			<Banner />
			<Features />
			<WhyChooseUs />
			<TopSellingCourses courses={courses} />
			<FunFacts />
			<FeedbackSlider />
			<Instructor />
			<DownloadTheApp />
			<LatestBlogPost />
			<DigitalFitnessCoaching />
		</>
	);
};

export default page;
