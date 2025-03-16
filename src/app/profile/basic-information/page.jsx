import React from "react";
import { getCurrentUser } from "@/actions/getCurrentUser";
import Links from "../Links";
import InfoForm from "./InfoForm";

const Page = async () => {
	const currentUser = await getCurrentUser();
	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<Links currentUser={currentUser} />

					<div className="basic-profile-information-form">
						<InfoForm currentUser={currentUser} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
