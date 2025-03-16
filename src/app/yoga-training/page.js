import FunFacts from "@/components/Shared/FunFacts";
import Partner from "@/components/Shared/Partner";
import SubscribeForm from "@/components/Shared/SubscribeForm";
import AboutUs from "@/components/YogaTraining/AboutUs";
import Banner from "@/components/YogaTraining/Banner";
import Courses from "@/components/YogaTraining/Courses";
import DownloadCoursesSyllabus from "@/components/YogaTraining/DownloadCoursesSyllabus";
import FeedbackSlider from "@/components/YogaTraining/FeedbackSlider";
import JoinOurYogaTraining from "@/components/YogaTraining/JoinOurYogaTraining";
import LatestBlog from "@/components/YogaTraining/LatestBlog";
import Pricing from "@/components/YogaTraining/Pricing";
import YogaTraining from "@/components/YogaTraining/YogaTraining";

const page = () => {
	return (
		<>
			<Banner />
			<YogaTraining />
			<AboutUs />
			<Courses />
			<FeedbackSlider />
			<JoinOurYogaTraining />
			<FunFacts mainClsAtts="funfacts-area bg-fffaf3" />
			<DownloadCoursesSyllabus />
			<Pricing />
			<LatestBlog />
			<SubscribeForm mainClsAtts="subscribe-area bg-f5f7fa ptb-100" />
			<Partner mainClsAtts="partner-area bg-6ba292 ptb-70" />
		</>
	);
};

export default page;
