"use server";

import { getCurrentUser, validateDataUser } from "@/actions/getCurrentUser";
import { getDashboardPathByRole } from "@libs/userMenuUtils";

export async function getPostLoginRedirectPath() {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return "/auth/login";
	}

	const needsProfile = await validateDataUser();

	if (needsProfile) {
		return "/profile/basic-information";
	}

	return getDashboardPathByRole(currentUser.role);
}
