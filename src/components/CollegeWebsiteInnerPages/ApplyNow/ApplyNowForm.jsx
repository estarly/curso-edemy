"use client";

import React from "react";

const ApplyNowForm = () => {
	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<form>
						<div className="section-title">
							<h2 className="playfair-display-font">
								Student academic information
							</h2>
						</div>

						<div className="row">
							<div className="col-lg-6">
								<div className="mb-3">
									<label className="form-label">School</label>
									<input
										type="text"
										className="form-control"
										id="school"
										placeholder="Write your school name"
									/>
								</div>

								<div className="mb-3">
									<label className="form-label">
										Highest qualification
									</label>
									<input
										type="text"
										className="form-control"
										id="highestQualification"
										placeholder="Highest qualification"
									/>
								</div>

								<div className="mb-3">
									<label className="form-label">
										Select area of study
									</label>
									<select
										className="form-control"
										aria-label="Default select example"
									>
										<option defaultValue="0">
											Select study area
										</option>
										<option defaultValue="1">One</option>
										<option defaultValue="2">Two</option>
										<option defaultValue="3">Three</option>
									</select>
								</div>
							</div>

							<div className="col-lg-6">
								<div className="mb-3">
									<label className="form-label">
										Year of completion
									</label>
									<input
										type="text"
										className="form-control"
										id="YearOfCompletion"
										placeholder="Year of completion"
									/>
								</div>

								<div className="mb-3">
									<label className="form-label">
										Current status
									</label>
									<select
										className="form-control"
										aria-label="Default select example"
									>
										<option defaultValue="0">
											Select current status
										</option>
										<option defaultValue="1">One</option>
										<option defaultValue="2">Two</option>
										<option defaultValue="3">Three</option>
									</select>
								</div>

								<div className="mb-3">
									<label className="form-label">
										Degree level
									</label>
									<select
										className="form-control"
										aria-label="Default select example"
									>
										<option defaultValue="0">
											Select degree level
										</option>
										<option defaultValue="1">One</option>
										<option defaultValue="2">Two</option>
										<option defaultValue="3">Three</option>
									</select>
								</div>
							</div>
						</div>

						<div className="mb-3 form-check">
							<input
								type="checkbox"
								className="form-check-input"
								id="exampleCheck1"
							/>
							<label
								className="form-check-label"
								htmlFor="exampleCheck1"
							>
								By submitting this form, you agree to the terms
								& conditions and Privacy policy Notice.
							</label>
						</div>

						<div className="ptb-100">
							<div className="section-title">
								<h2 className="playfair-display-font">
									Student basic information
								</h2>
							</div>

							<div className="row">
								<div className="col-lg-6">
									<div className="mb-3">
										<label className="form-label">
											Student full name
										</label>
										<input
											type="text"
											className="form-control"
											id="name"
											placeholder="Write your name"
										/>
									</div>

									<div className="mb-3">
										<label className="form-label">
											Student photo
										</label>
										<input
											type="file"
											className="form-control"
											id="studentPhoto"
											style={{ paddingTop: "12px" }}
										/>

										<div className="form-text">
											Photo must be in passport (PP) size,
											Max upload size 300KB
										</div>
									</div>
								</div>

								<div className="col-lg-6">
									<div className="mb-3">
										<label className="form-label">
											Degree level
										</label>
										<select
											className="form-control"
											aria-label="Default select example"
										>
											<option defaultValue="0">
												Select degree level
											</option>
											<option defaultValue="1">
												One
											</option>
											<option defaultValue="2">
												Two
											</option>
											<option defaultValue="3">
												Three
											</option>
										</select>
									</div>

									<div className="mb-3">
										<label className="form-label">
											Upload passport or birth
											documentation
										</label>
										<input
											type="file"
											className="form-control"
											id="uploadPassportBirthDoc"
											style={{ paddingTop: "12px" }}
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="section-title">
							<h2 className="playfair-display-font">
								Student personal information
							</h2>
						</div>

						<div className="row">
							<div className="col-lg-6">
								<div className="mb-3">
									<label className="form-label">
										Father’s name
									</label>
									<input
										type="text"
										className="form-control"
										id="fathersName"
										placeholder="Write your father name"
									/>
								</div>

								<div className="mb-3">
									<label className="form-label">
										Contact no
									</label>
									<input
										type="text"
										className="form-control"
										id="contactNo"
										placeholder="+1 587 785 45789"
									/>
								</div>

								<div className="mb-3">
									<label className="form-label">
										Present address
									</label>
									<input
										type="text"
										className="form-control"
										id="presentAddress"
										placeholder="2750 Quadra Street Victoria Road, New York, Canada"
									/>
								</div>

								<div className="mb-3">
									<label className="form-label">
										National ID
									</label>
									<input
										type="text"
										className="form-control"
										id="nationalID"
										placeholder="12357894562"
									/>
								</div>
							</div>

							<div className="col-lg-6">
								<div className="mb-3">
									<label className="form-label">
										Mother’s name
									</label>
									<input
										type="text"
										className="form-control"
										id="MothersName"
										placeholder="Write your mother name"
									/>
								</div>

								<div className="mb-3">
									<label className="form-label">Email</label>
									<input
										type="email"
										className="form-control"
										id="email"
										placeholder="hello@info.com"
									/>
								</div>

								<div className="mb-3">
									<label className="form-label">
										Date of birth
									</label>
									<input
										type="date"
										className="form-control"
										id="date"
									/>
								</div>

								<div className="mb-3">
									<label className="form-label">
										Student type
									</label>
									<select
										className="form-control"
										aria-label="Default select example"
									>
										<option defaultValue="0">
											Select student type
										</option>
										<option defaultValue="1">One</option>
										<option defaultValue="2">Two</option>
										<option defaultValue="3">Three</option>
									</select>
								</div>
							</div>
						</div>

						<div className="mt-3">
							<button
								type="submit"
								className="default-btn cw-btn"
							>
								Submit Application <span></span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default ApplyNowForm;
