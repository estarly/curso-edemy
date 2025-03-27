"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";

const AdminSideNav = ({ isAdmin }) => {
	// Sidebar Nav
	const pathname = usePathname();
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
					className={`close d-md-none`}
						onClick={handleToggleSidebarNav}
					>
						<i className="bx bx-x"></i>
					</div>

					<div className="side-nav">
						<ul>
							<li>
								<Link href="/admin" className={`${pathname === "/admin" ? "active" : ""}`}>Dashboard</Link>
							</li>
							<li>
								<Link href="/admin/instructors" className={`${pathname === "/admin/instructors" ? "active" : ""}`}>Instructores</Link>
							</li>
							<li>
								<Link href="/admin/courses" className={`${pathname === "/admin/courses" ? "active" : ""}`}>Cursos</Link>
							</li>

							<li>
								<Link href="/admin/students" className={`${pathname === "/admin/students" ? "active" : ""}`}>Estudiantes</Link>
							</li>
							<li>
								<Link href="/admin/banner" className={`${pathname === "/admin/banner" ? "active" : ""}`}>Banners</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminSideNav;
