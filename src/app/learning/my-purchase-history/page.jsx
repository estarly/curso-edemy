import Link from "next/link";
import Image from "next/image";
import PageBanner from "@/components/Shared/PageBanner";
import { myPurchase } from "@/actions/myPurchase";
import dateFormat from "@/utils/dateFormat";

const Page = async () => {
	const result = await myPurchase();
	const enrolments = result?.enrolments || [];
	return (
		<>
			<PageBanner
				pageTitle="My Purchases"
				homePageUrl="/"
				homePageText="Home"
				activePageText="My Purchases"
			/>

			<div className="checkout-area ptb-100">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-9 col-md-12">
							<div className="shopping-cart">
								{enrolments.length > 0 ? (
									enrolments.map((enrl) => (
										<div
											className="shopping-cart-list"
											key={enrl.id}
										>
											<div className="row align-items-center">
												<div className="col-lg-3">
													<Link
														className="d-block image"
														href={`/course/${enrl.course.slug}/${enrl.course.id}`}
													>
														<Image
															src={
																enrl.course
																	.image
															}
															alt="image"
															width={750}
															height={500}
														/>
													</Link>
												</div>
												<div className="col-lg-5">
													<div className="content">
														<h3>
															<Link
																href={`/course/${enrl.course.slug}/${enrl.course.id}`}
															>
																{
																	enrl.course
																		.title
																}
															</Link>
														</h3>
														<p className="fs-14 mb-2">
															{
																enrl.course.user
																	.name
															}
														</p>
														<ul className="list">
															<li>
																{
																	enrl.course
																		.duration
																}
															</li>
															<li>
																{
																	enrl.course
																		.lessons
																}
															</li>
															<li>
																{
																	enrl.course
																		.access_time
																}
															</li>
														</ul>
													</div>
												</div>
												<div className="col-lg-4 col-6">
													<div className="price text-end">
														<span className="fw-bolder fs-16">
															${enrl.price}
														</span>{" "}
														<span className="fw-bolder fs-16 d-inline-block ms-4">
															{dateFormat(
																enrl.created_at
															)}
														</span>
													</div>
												</div>
											</div>
										</div>
									))
								) : (
									<div className="text-center border p-3">
										Empty
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
