import { redirect } from "next/navigation";
import { getPostLoginRedirectPath } from "@/actions/auth/getPostLoginRedirect";

const PostLoginPage = async () => {
	redirect(await getPostLoginRedirectPath());
};

export default PostLoginPage;
