import Banner from "@/components/OnlineArt/Banner";
import Features from "@/components/OnlineArt/Features";
import FunfactsAndFeedback from "@/components/OnlineArt/FunfactsAndFeedback";
import LatestBlogPost from "@/components/OnlineArt/LatestBlogPost";
import NewsletterForm from "@/components/OnlineArt/NewsletterForm";
import QuoteText from "@/components/OnlineArt/QuoteText";
import TopSellingCourses from "@/components/OnlineArt/TopSellingCourses";
import UpcomingEvents from "@/components/OnlineArt/UpcomingEvents";

const page = () => {
	return (
		<>
			<Banner />
			<QuoteText />
			<Features />
			<TopSellingCourses />
			<FunfactsAndFeedback />
			<div className="online-art-home-with-large-bg">
				<UpcomingEvents />
				<NewsletterForm />
				<LatestBlogPost />
			</div>
		</>
	);
};

export default page;
