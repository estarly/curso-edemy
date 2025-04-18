"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItem = ({ label, link, submenu }) => {
	const pathname = usePathname();
	const isActiveInit = pathname == link;
	if (submenu) {
		return (
			<li className="nav-item" key={label}>
				<Link href={link} className="nav-link">
					{label} <i className="bx bx-chevron-down"></i>
				</Link>

				<ul className="dropdown-menu">
					{submenu.map((subItem) => {
						const isActive = pathname == subItem.link;
						return (
							<li className="nav-item" key={subItem.label}>
								<Link
									href={subItem.link}
									className={`nav-link ${
										isActive ? "active" : ""
									}`}
								>
									{subItem.label}
								</Link>
							</li>
						);
					})}
				</ul>
			</li>
		);
	}

	return (
		<li className="nav-item" key={label}>
			<Link href={link} className={`nav-link ${isActiveInit && 'active'}`} >
				{label}
			</Link>
		</li>
	);
};

export default MenuItem;
