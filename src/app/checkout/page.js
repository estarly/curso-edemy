import PageBanner from "@/components/Shared/PageBanner";
import CheckoutContent from "./CheckoutContent";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { redirect } from "next/navigation";

const page = async () => {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}
	return (
		<>
			<PageBanner
				pageTitle="Checkout"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Checkout"
			/>
			<CheckoutContent />
		</>
	);
};

export default page;
