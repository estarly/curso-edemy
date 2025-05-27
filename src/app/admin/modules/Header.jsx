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
			<li>
				<Link
					href="/admin/modules/by-course"
					className={pathname === "/admin/modules/by-course" ? "active" : null}
				>
					Cursos por módulo
				</Link>
			</li>
			<li>
				<Link
					href="/admin/modules/asign-course"
					className={pathname === "/admin/modules/asign-course" ? "active" : null}
				>
					Asignar curso
				</Link>
			</li>
		</ul>
	);
};

export default Header;
