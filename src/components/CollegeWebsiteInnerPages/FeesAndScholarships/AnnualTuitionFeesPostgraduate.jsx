"use client";

import React from "react";

const AnnualTuitionFeesPostgraduate = () => {
	return (
		<>
			<div className="cw-annual-tuition-fees">
				<div className="container">
					<h2 className="title">
						Annual tuition fees (Postgraduate)
					</h2>

					<div className="table-responsive cw-annual-tuition-fees">
						<table className="table">
							<thead>
								<tr>
									<th scope="col">Course name</th>
									<th scope="col">Domestic student</th>
									<th scope="col">International student</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">Computer science</th>
									<td>$5,250</td>
									<td>$10,500</td>
								</tr>
								<tr>
									<th scope="row">Engineering</th>
									<td>$4,200</td>
									<td>$10,500</td>
								</tr>
								<tr>
									<th scope="row">Diploma of arts</th>
									<td>$3,150</td>
									<td>$7,000</td>
								</tr>
								<tr>
									<th scope="row">Diploma of engineering</th>
									<td>$2,450</td>
									<td>$6,500</td>
								</tr>
								<tr>
									<th scope="row">
										Diploma of information technology
									</th>
									<td>$1,980</td>
									<td>$3,800</td>
								</tr>
								<tr>
									<th scope="row">Diploma of business</th>
									<td>$3,250</td>
									<td>$5,500</td>
								</tr>
								{/* <tr> 
                            <td colspan="3" className="text-center">Empty</td> 
                          </tr> */}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};

export default AnnualTuitionFeesPostgraduate;
