import { getCurrentUser } from "@/actions/getCurrentUser";
import LoginForm from "@/components/Auth/LoginForm";
import RegisterForm from "@/components/Auth/RegisterForm";
import PageBanner from "@/components/Shared/PageBanner";
import Link from "next/link";
import { redirect } from "next/navigation";

const page = async () => {
	const currentUser = await getCurrentUser();
	if (currentUser) {
		redirect("/");
	}
	return (
		<>
			{/*<PageBanner
				pageTitle="Registrarme"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Profile Authentication"
			/>*/}

			<div className="profile-authentication-area ptb-100">
				<div className="container">
					<div className="row">
						<div className="d-flex justify-content-center">
							<RegisterForm />
						</div>
					</div>
					<div className="row  text-center">
						
						<Link href="/auth/login" className="lost-your-password">
						<br/>
							Ya estoy registrado, Quiero iniciar sesion.
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;
