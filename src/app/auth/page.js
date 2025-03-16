import { getCurrentUser } from "@/actions/getCurrentUser";
import LoginForm from "@/components/Auth/LoginForm";
import RegisterForm from "@/components/Auth/RegisterForm";
import PageBanner from "@/components/Shared/PageBanner";
import { redirect } from "next/navigation";

const page = async () => {
	const currentUser = await getCurrentUser();
	if (currentUser) {
		redirect("/");
	}
	return (
		<>
			<PageBanner
				pageTitle="Profile Authentication"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Profile Authentication"
			/>

			<div className="profile-authentication-area ptb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<LoginForm />
						</div>

						<div className="col-lg-6 col-md-12">
							<RegisterForm />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;
