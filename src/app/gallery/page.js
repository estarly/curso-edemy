import PageBanner from "@/components/Shared/PageBanner";
import SubscribeForm from "@/components/Shared/SubscribeForm";
import GalleryImage from "./GalleryImage";

const page = () => {
	return (
		<>
      <PageBanner
        pageTitle="Gallery"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Gallery"
      />

      <GalleryImage />

      <SubscribeForm />
		</>
	);
};

export default page;
