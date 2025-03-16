import AboutUs from "@/components/Kindergaten/AboutUs";
import Banner from "@/components/Kindergaten/Banner";
import FeedbackSlider from "@/components/Kindergaten/FeedbackSlider";
import LatestBlog from "@/components/Kindergaten/LatestBlog";
import OurServices from "@/components/Kindergaten/OurServices";
import SelectedAgesArea from "@/components/Kindergaten/SelectedAgesArea";
import SubscribeForm from "@/components/Kindergaten/SubscribeForm";
import TopSellingCourses from "@/components/Kindergaten/TopSellingCourses";
import UpcomingEvents from "@/components/Kindergaten/UpcomingEvents";

const page = () => {
	return (
		<>
			<Banner />
			<AboutUs />
			<OurServices />
			<TopSellingCourses />
			<FeedbackSlider />
			<SelectedAgesArea />
			<UpcomingEvents />
			<LatestBlog />
			<SubscribeForm />
		</>
	);
};

export default page;
