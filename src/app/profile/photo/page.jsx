import React from "react";
import Image from "next/image";
import Links from "../Links";
import { getCurrentUser } from "@/actions/getCurrentUser";
import ProfilePhotoForm from "./ProfilePhotoForm";

const Page = async () => {
	const currentUser = await getCurrentUser();

	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<Links currentUser={currentUser} />

					<ProfilePhotoForm currentUser={currentUser} />
				</div>
			</div>
		</>
	);
};

export default Page;
