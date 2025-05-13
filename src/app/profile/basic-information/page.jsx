import React from "react";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { getCountries } from "@/actions/getCountries";
import Links from "../Links";
import InfoForm from "./InfoForm";
import { redirect } from "next/navigation";
const Page = async () => {
	const currentUser = await getCurrentUser();
	const countries = await getCountries();
	
	if (!currentUser) {
		redirect("/");
	}
	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<Links currentUser={currentUser} />

					<div className="basic-profile-information-form">
						<InfoForm currentUser={currentUser} countries={countries} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
