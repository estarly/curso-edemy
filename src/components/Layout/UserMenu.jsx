"use client";

import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import Swal from "sweetalert2";
import UserAvatar from "./UserAvatar";
import userMenuConfig from "@libs/userMenuByRole.json";

const isActivePath = (pathname, href) => {
	const normalizedPath = pathname.replace(/\/$/, "");
	const normalizedHref = href.replace(/\/$/, "");
	return normalizedPath === normalizedHref;
};

const UserMenu = ({ currentUser }) => {
	const pathname = usePathname();
	const role = currentUser?.role;
	const roleItems = role ? userMenuConfig.menus[role] || [] : [];
	const commonItems = userMenuConfig.common || [];
	const roleLabel = userMenuConfig.roleLabels[role] || role;

	const handleSignOut = () => {
		Swal.fire({
			title: "¿Cerrar sesión?",
			text: "¿Estás seguro de que deseas salir?",
			icon: "question",
			showCancelButton: true,
			confirmButtonText: "Sí, salir",
			cancelButtonText: "Cancelar",
			confirmButtonColor: "#667eea",
			cancelButtonColor: "#6c757d",
		}).then((result) => {
			if (result.isConfirmed) {
				signOut({ callbackUrl: "/" });
			}
		});
	};

	const renderMenuItem = (item) => (
		<li key={item.href}>
			<Link
				className={`dropdown-item ${isActivePath(pathname, item.href) ? "active" : ""}`}
				href={item.href}
			>
				<i className={item.icon}></i> {item.label}
			</Link>
		</li>
	);

	return (
		<>
			{!currentUser && (
				<div className="option-item">
					<Link href="/auth/login" className="default-btn">
						<i className="flaticon-user"></i> Iniciar Sesion{" "}
						<span></span>
					</Link>
				</div>
			)}
			{currentUser && (
				<div className="option-item">
					<div className="dropdown profile-dropdown">
						<div className="img ptb-15">
							<UserAvatar user={currentUser} size={35} />
						</div>

						<ul className="dropdown-menu">
							<li>
								<Link
									className="dropdown-item author-dropdown-item"
									href="/profile/basic-information/"
								>
									<div className="d-flex align-items-center">
										<div className="img">
											<UserAvatar user={currentUser} size={35} />
										</div>

										<span className="ps-3">
											<span className="fw-semibold fs-16 mb-1 d-block">
												{currentUser.name}
											</span>
											<span className="d-block fs-13 text-muted">
												{roleLabel}
											</span>
											<span className="d-block fs-13 mt-minus-2">
												{currentUser.email}
											</span>
										</span>
									</div>
								</Link>
							</li>

							{roleItems.length > 0 && (
								<>
									<li>
										<hr className="dropdown-divider" />
									</li>
									{roleItems.map(renderMenuItem)}
								</>
							)}

							{commonItems.length > 0 && (
								<>
									<li>
										<hr className="dropdown-divider" />
									</li>
									{commonItems.map(renderMenuItem)}
								</>
							)}

							<li>
								<hr className="dropdown-divider" />
							</li>

							<li>
								<button
									type="button"
									className="dropdown-item"
									onClick={handleSignOut}
								>
									<i className="bx bx-log-out"></i> Cerrar Sesión
								</button>
							</li>
						</ul>
					</div>
				</div>
			)}
		</>
	);
};

export default UserMenu;
