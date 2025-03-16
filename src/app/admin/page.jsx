import AdminSideNav from "@/components/Admin/AdminSideNav";
import { getAdminStats } from "@/actions/getAdminStats";
import { getCurrentUser } from "@/actions/getCurrentUser";

const Page = async () => {
	const { students, instructors, courses, enrolments, videos, assets } =
		await getAdminStats();

	const currentUser = await getCurrentUser();
	const isAdmin = currentUser?.role === "ADMIN";

	return (
		<>
			<div className="main-content">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-3 col-md-4">
							<AdminSideNav isAdmin={isAdmin} />
						</div>

						<div className="col-lg-9 col-md-8">
							<div className="main-content-box">
								<div className="row justify-content-center">
									<div className="col-lg-4 col-sm-6">
										<div className="info-box-card">
											<i className="bx bx-group"></i>
											<h1>{students}</h1>
											<p>Total Students</p>
										</div>
									</div>

									<div className="col-lg-4 col-sm-6">
										<div className="info-box-card">
											<i className="bx bxs-file"></i>
											<h1>{courses}</h1>
											<p>Total Courses</p>
										</div>
									</div>

									<div className="col-lg-4 col-sm-6">
										<div className="info-box-card">
											<i className="bx bx-group"></i>
											<h1>{instructors}</h1>
											<p>Total Instructors</p>
										</div>
									</div>

									<div className="col-lg-4 col-sm-6">
										<div className="info-box-card">
											<i className="bx bx-cart"></i>
											<h1>{enrolments}</h1>
											<p>Course Enrolled</p>
										</div>
									</div>

									<div className="col-lg-4 col-sm-6">
										<div className="info-box-card">
											<i className="bx bx-cart"></i>
											<h1>$2941.56</h1>
											<p>Total Sale</p>
										</div>
									</div>

									<div className="col-lg-4 col-sm-6">
										<div className="info-box-card">
											<i className="bx bx-cart"></i>
											<h1>{videos}</h1>
											<p>Course Videos</p>
										</div>
									</div>

									<div className="col-lg-4 col-sm-6">
										<div className="info-box-card">
											<i className="bx bx-cart"></i>
											<h1>{assets}</h1>
											<p>Course Assets</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
