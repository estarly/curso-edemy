import AboutMe from "@/components/OnlinePhotography/AboutMe";
import Banner from "@/components/OnlinePhotography/Banner";
import Courses from "@/components/OnlinePhotography/Courses";
import Features from "@/components/OnlinePhotography/Features";
import NewsletterForm from "@/components/OnlinePhotography/NewsletterForm";
import Partner from "@/components/OnlinePhotography/Partner";
import PhotoGallery from "@/components/OnlinePhotography/PhotoGallery";
import Testimonials from "@/components/OnlinePhotography/Testimonials";

const page = () => {
	return (
		<>
			<Banner />
			<Features />
			<AboutMe />
			<Courses />
			<Partner />
			<Testimonials />
			<PhotoGallery />
			<NewsletterForm />
		</>
	);
};

export default page;
