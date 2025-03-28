import AboutUs from "@/components/Index/AboutUs";
import Banner from "@/components/Index/Banner";
import Courses from "@/components/Index/Courses";
import DistanceLearning from "@/components/Index/DistanceLearning";
import Totals from "@/components/Index/Totals";
import FeedbackSlider from "@/components/Index/FeedbackSlider";
import UpcomingEvents from "@/components/Index/UpcomingEvents";
import TopCategories from "@/components/OnlineTrainingSchool/TopCategories";
import FunFactsTwo from "@/components/Shared/FunFactsTwo";
import Partner from "@/components/Shared/Partner";
import SubscribeForm from "@/components/Shared/SubscribeForm";
import FunFacts from "@/components/CollegeWebsite/FunFacts";
import { getBanner } from "@/actions/principal/getBanner";
import { getTopCategories } from "@/actions/principal/getTopCategories";
import { getCourses } from "@/actions/getCourses";
import { getCurrentUser } from "@/actions/getCurrentUser";

const page = async ({searchParams}) => {
	const banners = await getBanner();
	const topCategories = await getTopCategories();
	const { courses } = await getCourses(searchParams,4);
	console.log(courses,'courses');
	const currentUser = await getCurrentUser();

	return (
		<>
			<Banner banners={banners} />
			<FunFacts/>
			<AboutUs />
			<TopCategories categories={topCategories} />
			<Courses courses={courses} currentUser={currentUser} />
		
			{/*<FeedbackSlider />			
			<FunFactsTwo />
			<DistanceLearning />
			<UpcomingEvents />
			<SubscribeForm mainClsAtts="subscribe-area ptb-100" />
			<Partner mainClsAtts="partner-area bg-fe4a55 ptb-70" />
			*/}
		</>
	);
};

export default page;
