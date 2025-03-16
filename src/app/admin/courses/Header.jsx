"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
	const pathname = usePathname();
	return (
		<ul className="nav-style1">
			<li>
				<Link
					href="/admin/courses/"
					className={pathname === "/admin/courses" ? "active" : null}
				>
					Approved Courses
				</Link>
			</li>
			<li>
				<Link
					href="/admin/courses/new-arrival/"
					className={
						pathname === "/admin/courses/new-arrival"
							? "active"
							: null
					}
				>
					Pending Courses
				</Link>
			</li>
		</ul>
	);
};

export default Header;
