"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

const LinksModule = ({ currentUser, modules }) => {
	useEffect(() => {
		if (!currentUser) {
			redirect("/auth");
		}
	}, [currentUser]);

	return (
		<>
			<h2 className="fw-bold mb-4">Por Módulo</h2>
			<ul className="nav-style1">
			{modules.map((mod) => {
				return (
					<li key={mod.id}>
						<Link  href="#" className={mod.view ? 'active' : ''}>{mod.title}</Link>
					</li>
				);
				
			})}


				{/*<li>
					<Link
						className={
							pathname === "/learning/my-courses"
								? "active"
								: null
						}
						href="/learning/my-courses"
					>
						Mis Cursos
					</Link>
				</li>
				<li>
					<Link
						className={
							pathname === "/learning/wishlist" ? "active" : null
						}
						href="/learning/wishlist"
					>
						Mis Favoritos
					</Link>
				</li>*/}
			</ul>
		</>
	);
};

export default LinksModule;
