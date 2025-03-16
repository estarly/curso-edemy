"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname, redirect } from "next/navigation";

const Links = ({ currentUser }) => {
	const pathname = usePathname();

	useEffect(() => {
		if (!currentUser) {
			redirect("/auth");
		}
	}, [currentUser]);
	return (
		<>
			<h2 className="fw-bold mb-4">My Learning</h2>

			<ul className="nav-style1">
				<li>
					<Link
						className={
							pathname === "/learning/my-courses"
								? "active"
								: null
						}
						href="/learning/my-courses"
					>
						All Courses
					</Link>
				</li>
				<li>
					<Link
						className={
							pathname === "/learning/wishlist" ? "active" : null
						}
						href="/learning/wishlist"
					>
						Wishlist
					</Link>
				</li>
			</ul>
		</>
	);
};

export default Links;
