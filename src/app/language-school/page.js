import Banner from "@/components/LanguageSchool/Banner";
import FeedbackSlider from "@/components/LanguageSchool/FeedbackSlider";
import HowToApply from "@/components/LanguageSchool/HowToApply";
import LanguageCourses from "@/components/LanguageSchool/LanguageCourses";
import SignUpForm from "@/components/LanguageSchool/SignUpForm";
import TopSellingCourses from "@/components/LanguageSchool/TopSellingCourses";
import UpcomingEvents from "@/components/LanguageSchool/UpcomingEvents";
import WhyChooseUs from "@/components/LanguageSchool/WhyChooseUs";
import FunFactsTwo from "@/components/Shared/FunFactsTwo";
import Partner from "@/components/Shared/Partner";
import SubscribeForm from "@/components/Shared/SubscribeForm";
import { getHomepageCourses } from "@/actions/getCourses";

const page = async () => {
	const { courses } = await getHomepageCourses();

	return (
		<>
			<Banner />
			<LanguageCourses />
			<WhyChooseUs />
			<FeedbackSlider />
			<TopSellingCourses courses={courses} />
			<FunFactsTwo />
			<HowToApply />
			<SignUpForm />
			<UpcomingEvents />
			<SubscribeForm />
			<Partner mainClsAtts="partner-area bg-fe4a55 ptb-70" />
		</>
	);
};

export default page;
