export const dynamic = "force-dynamic";
import Links from "../Links";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { getMyFavorites } from "@/actions/getMyFavorites";
import CourseCard from "@/components/Shared/CourseCard";
import { redirect } from "next/navigation";

const Page = async () => {
	let currentUser = null;
	let favourites = [];
	try {
		currentUser = await getCurrentUser();
		const favs = await getMyFavorites();
		favourites = favs.favourites;
	} catch (error) {
		console.error("Error cargando datos:", error);
	}
	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<Links currentUser={currentUser} />

					<div className="row">
						{favourites.length > 0 ? (
							favourites.map((fav) => {
								const course = fav.course;
								return (
									<CourseCard
										key={fav.id}
										{...course}
										currentUser={currentUser}
									/>
								);
							})
						) : (
							<div className="col-lg-12 col-md-12">
								<div className="text-center border py-3 fs-5">
									No tienes cursos favoritos
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
