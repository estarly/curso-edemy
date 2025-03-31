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
					href="/admin/modules"
					className={pathname === "/admin/modules" ? "active" : null}
				>
					Módulos
				</Link>
			</li>
		</ul>
	);
};

export default Header;
