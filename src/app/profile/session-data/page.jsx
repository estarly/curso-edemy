import React from "react";
import { getCurrentUser } from "@/actions/getCurrentUser";
import Links from "../Links";
import FormSessionData from "./Form";
import { redirect } from "next/navigation";
const Page = async () => {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/auth/login");
	}

	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<Links currentUser={currentUser} />

					<div className="basic-profile-information-form">
						<FormSessionData currentUser={currentUser} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
