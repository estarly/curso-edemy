import React from "react";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { ContentPage } from "./_components/ContentPage";

const Page = async () => {
	const currentUser = await getCurrentUser();
	const isAdmin = currentUser?.role === "ADMIN";

	return <ContentPage isAdmin={isAdmin} />;
};

export default Page;
