"use client";

import React from "react";
import Link from "next/link";

const Pagination = () => {
	return (
		<div className="col-lg-12 col-md-12 col-sm-12">
			<div className="pagination-area text-center">
				<Link href="#" className="prev page-numbers">
					<i className="bx bx-chevrons-left"></i>
				</Link>
				<span className="page-numbers current" aria-current="page">
					1
				</span>
				<Link href="#" className="page-numbers">
					2
				</Link>
				<Link href="#" className="page-numbers">
					3
				</Link>
				<Link href="#" className="page-numbers">
					4
				</Link>
				<Link href="#" className="next page-numbers">
					<i className="bx bx-chevrons-right"></i>
				</Link>
			</div>
		</div>
	);
};

export default Pagination;
