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
import { getCurrentUser, validateDataUser } from "@/actions/getCurrentUser";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

const page = async ({searchParams}) => {
	
	const { courses } = await getCourses(searchParams,4);
	const topCategories = await getTopCategories();
	const banners = await getBanner();
	const currentUser = await getCurrentUser();
	const validateUser = await validateDataUser();

	// Si el usuario está autenticado y no tiene información de perfil, lo redirigimos a la página de perfil
	if(currentUser && validateUser){
		redirect("/profile/basic-information");
	}

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
