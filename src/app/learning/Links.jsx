"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname, redirect } from "next/navigation";
import userMenuConfig from "@libs/userMenuByRole.json";
import { isMenuItemActive } from "@libs/userMenuUtils";

const Links = ({ currentUser }) => {
	const pathname = usePathname();
	const menuItems = userMenuConfig.menus.USER || [];

	useEffect(() => {
		if (!currentUser) {
			redirect("/auth");
		}
	}, [currentUser]);

	return (
		<>
			<h2 className="fw-bold mb-4">Mi Aprendizaje</h2>

			<ul className="nav-style1">
				{menuItems.map((item) => (
					<li key={item.href}>
						<Link
							className={
								isMenuItemActive(pathname, item) ? "active" : null
							}
							href={item.href}
						>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default Links;
