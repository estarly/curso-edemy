import Links from "../Links";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { getMyFavorites } from "@/actions/getMyFavorites";
import CourseCard from "@/components/Shared/CourseCard";

const Page = async () => {
	const currentUser = await getCurrentUser();
	const { favourites } = await getMyFavorites();
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
									Empty
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
