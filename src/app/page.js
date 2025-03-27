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
//import FunFacts from "@/components/CollegeWebsite/FunFcts";

const page = () => {
	return (
		<>
			<Banner />
			{
				/*<FunFacts/>*/
			}
			<AboutUs />
			<TopCategories />
			<Courses />
		
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
