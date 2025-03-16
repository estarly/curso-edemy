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
			<h2 className="fw-bold mb-4">Profile & Settings</h2>
			<ul className="nav-style1">
				<li>
					<Link
						className={
							pathname === "/profile/basic-information"
								? "active"
								: null
						}
						href="/profile/basic-information/"
					>
						Profile
					</Link>
				</li>
				<li>
					<Link
						className={
							pathname === "/profile/photo" ? "active" : null
						}
						href="/profile/photo/"
					>
						Profile Picture
					</Link>
				</li>
			</ul>
		</>
	);
};

export default Links;
