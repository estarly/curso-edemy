import Banner from "@/components/SingleInstructor/Banner";
import EducationForEveryone from "@/components/SingleInstructor/EducationForEveryone";
import Features from "@/components/SingleInstructor/Features";
import FeedbackSlider from "@/components/SingleInstructor/FeedbackSlider";
import Funfacts from "@/components/SingleInstructor/Funfacts";
import LatestBlogPost from "@/components/SingleInstructor/LatestBlogPost";
import NewsletterForm from "@/components/SingleInstructor/NewsletterForm";
import PromoVideo from "@/components/SingleInstructor/PromoVideo";
import QuoteText from "@/components/SingleInstructor/QuoteText";
import TopSellingCourses from "@/components/SingleInstructor/TopSellingCourses";
import UpcomingEvents from "@/components/SingleInstructor/UpcomingEvents";
import { getHomepageCourses } from "@/actions/getCourses";

const page = async () => {
	const { courses } = await getHomepageCourses();

	return (
		<>
			<Banner />
			<Features />
			<QuoteText />
			<TopSellingCourses courses={courses} />
			<Funfacts />
			<FeedbackSlider />
			<EducationForEveryone />
			<PromoVideo />
			<UpcomingEvents />
			<LatestBlogPost />
			<NewsletterForm />
		</>
	);
};

export default page;
