"use client";

import React from "react";

const Curriculum = ({ assets }) => {
	return (
		<>
			<div className="courses-curriculum">
				<ul>
					{assets.map((asst) => (
						<li key={asst.id}>
							<a
								href="#"
								className="d-flex justify-content-between align-items-center"
							>
								<span className="courses-name">
									{asst.title}
								</span>
								<div className="courses-meta">
									<span className="status locked">
										<i className="flaticon-password"></i>
									</span>
								</div>
							</a>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Curriculum;
