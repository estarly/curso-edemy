"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import userMenuConfig from "@libs/userMenuByRole.json";
import { isMenuItemActive } from "@libs/userMenuUtils";

const RoleSideNav = ({ role, allowed = true }) => {
	const pathname = usePathname();
	const [isActiveSidebarNav, setActiveSidebarNav] = useState("false");
	const menuItems = userMenuConfig.menus[role] || [];

	const handleToggleSidebarNav = () => {
		setActiveSidebarNav(!isActiveSidebarNav);
	};

	useEffect(() => {
		if (!allowed) {
			redirect("/");
		}
	}, [allowed]);

	if (!menuItems.length) {
		return null;
	}

	return (
		<>
			<div className="text-end d-md-none">
				<div
					className="sidebar-menu-button"
					onClick={handleToggleSidebarNav}
				>
					Menú
				</div>
			</div>

			<div
				className={`side-nav-wrapper ${
					isActiveSidebarNav ? "" : "active"
				}`}
			>
				<div className="sticky-box">
					<div
						className="close d-md-none"
						onClick={handleToggleSidebarNav}
					>
						<i className="bx bx-x"></i>
					</div>

					<div className="side-nav">
						<ul>
							{menuItems.map((item) => (
								<li key={item.href}>
									<Link
										href={item.href}
										className={
											isMenuItemActive(pathname, item)
												? "active"
												: ""
										}
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default RoleSideNav;
