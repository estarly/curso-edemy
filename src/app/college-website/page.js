import Banner from "@/components/CollegeWebsite/Banner";
import CollegeAmissions from "@/components/CollegeWebsite/CollegeAmissions";
import CollegeStaff from "@/components/CollegeWebsite/CollegeStaff";
import CoursesSlider from "@/components/CollegeWebsite/CoursesSlider";
import Cta from "@/components/CollegeWebsite/Cta";
import FeedbackSlider from "@/components/CollegeWebsite/FeedbackSlider";
import FunFacts from "@/components/CollegeWebsite/FunFacts";
import LatestBlogPost from "@/components/CollegeWebsite/LatestBlogPost";
import UpcomingEvents from "@/components/CollegeWebsite/UpcomingEvents";
import WelcomeToeDemyCollege from "@/components/CollegeWebsite/WelcomeToeDemyCollege";

const page = () => {
	return (
		<>
			<Banner />
			<CoursesSlider />
			<WelcomeToeDemyCollege />
			<FunFacts />
			<CollegeAmissions />
			<FeedbackSlider />
			<UpcomingEvents />
			<CollegeStaff />
			<Cta />
			<LatestBlogPost />
		</>
	);
};

export default page;
