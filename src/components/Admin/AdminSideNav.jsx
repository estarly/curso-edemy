"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

const AdminSideNav = ({ isAdmin }) => {
	// Sidebar Nav
	const [isActiveSidebarNav, setActiveSidebarNav] = useState("false");
	const handleToggleSidebarNav = () => {
		setActiveSidebarNav(!isActiveSidebarNav);
	};

	useEffect(() => {
		if (!isAdmin) {
			redirect("/");
		}
	}, [isAdmin]);

	return (
		<>
			<div className="text-end d-md-none">
				<div
					className="sidebar-menu-button"
					onClick={handleToggleSidebarNav}
				>
					Sidebar Menu
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
							<li>
								<Link href="/admin/">Dashboard</Link>
							</li>
							<li>
								<Link href="/admin/courses/">Courses</Link>
							</li>

							<li>
								<Link href="/admin/students/">Students</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminSideNav;
