import React from "react";
import { getCurrentUser, validateDataUser } from "@/actions/getCurrentUser";
import { getCountries } from "@/actions/getCountries";
import Links from "../Links";
import InfoForm from "./InfoForm";
import { redirect } from "next/navigation";

const Page = async () => {
	const currentUser = await getCurrentUser();
	const countries = await getCountries();
	const validateUser = await validateDataUser();
	
	if (!currentUser) {
		redirect("/");
	}
	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<Links currentUser={currentUser} />

					<div className="basic-profile-information-form">
						<InfoForm currentUser={currentUser} countries={countries} validateUser={validateUser} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
