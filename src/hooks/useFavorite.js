import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

const useFavourite = ({ courseId, currentUser }) => {
	const router = useRouter();

	const hasFauvorited = useMemo(() => {
		const list = currentUser?.favourites || [];

		// const objectWithId2 = objectsArray.find(obj => obj.id === objectId);
		return list.find((fav) => fav.courseId === parseInt(courseId));
	}, [currentUser, courseId]);

	const toggleFavourite = useCallback(
		async (e) => {
			e.stopPropagation();
			if (!currentUser) {
				router.push("/auth");
			}

			try {
				let request;
				if (hasFauvorited) {
					request = () => axios.delete(`/api/favourites/${courseId}`);
				} else {
					request = () => axios.post(`/api/favourites/${courseId}`);
				}

				await request();
				router.refresh();
				toast.success("Success");
			} catch (error) {
				toast.error("Something went wrong");
			}
		},
		[currentUser, hasFauvorited, courseId, router]
	);

	return {
		hasFauvorited,
		toggleFavourite,
	};
};

export default useFavourite;
