"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations } from "@/hooks/useTranslations";

const UserMenu = ({ currentUser }) => {
	const pathname = usePathname();
	const [isClient, setIsClient] = useState(false);
	const { t } = useTranslations();
	const isAdmin = currentUser?.role === "ADMIN";
	const isInstructor = currentUser?.role === "INSTRUCTOR";//currentUser?.is_instructor;
	const isStudent = currentUser?.role === "USER";

	// Verificar que estamos en el cliente
	useEffect(() => {
		setIsClient(true);
	}, []);

	//console.log(currentUser,'UserMenu');
	//console.log(currentUser.role, currentUser.is_instructor,'UserMenu');
	const dummyImage =
		"/images/landing/profile/profile01.png";

	// Renderizar placeholder mientras se carga en el cliente
	if (!isClient) {
		return (
			<>
				{!currentUser && (
					<div className="option-item">
						<Link href="/auth/login" className="default-btn">
							<i className="flaticon-user"></i> {t('auth.login')}{" "}
							<span></span>
						</Link>
					</div>
				)}
				{currentUser && (
					<div className="option-item">
						<div className="dropdown profile-dropdown">
							<div className="img ptb-15">
								<Image
									src={
										currentUser?.image && currentUser.image !== "" 
											? currentUser.image 
											: dummyImage
									}
									alt={currentUser.role}
									width={35}
									height={35}
								/>
							</div>
						</div>
					</div>
				)}
			</>
		);
	}

	return (
		<>
			{!currentUser && (
				<div className="option-item">
					<Link href="/auth/login" className="default-btn">
						<i className="flaticon-user"></i> {t('auth.login')}{" "}
						<span></span>
					</Link>
				</div>
			)}
			{currentUser && (
				<>
					<div className="option-item">
						<div className="dropdown profile-dropdown">
							<div className="img ptb-15">
								<Image
									src={
										currentUser?.image && currentUser.image !== "" 
											? currentUser.image 
											: dummyImage
									}
									alt={currentUser.role}
									width={35}
									height={35}
								/>
							</div>

							<ul className="dropdown-menu">
								<li>
									<Link
										className="dropdown-item author-dropdown-item"
										href="/profile/basic-information/"
									>
										<div className="d-flex align-items-center">
											<div className="img">
												<Image
													src={
														currentUser?.image && currentUser.image !== "" 
															? currentUser.image 
															: dummyImage
													}
													alt={currentUser.role}
													width={35}
													height={35}
												/>
											</div>

											<span className="ps-3">
												<span className="fw-semibold fs-16 mb-1 d-block">
													{currentUser.name}
												</span>
												<span className="d-block fs-13 mt-minus-2">
													{currentUser.email}
												</span>
											</span>
										</div>
									</Link>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>

								{isAdmin && (
									<li>
										<Link
											className="dropdown-item"
											href="/admin"
										>
											<i className="bx bxs-dashboard"></i>{" "}
											{t('admin.dashboard')}
										</Link>
									</li>
									//asignar cursos a un modulo
									//asignar modulos a un usuario
									//


								)}
								{isInstructor && (
									<>
										<li>
											<Link
												className="dropdown-item"
												href="/instructor/courses"
											>
												<i className="bx bxs-dashboard"></i> {t('user.myCourses')}
											</Link>
										</li>
										<li>
											<Link
												className="dropdown-item"
												href="/instructor/assignments"
											>
												<i className="bx bxs-dashboard"></i>
												{t('user.assignments')}
											</Link>
										</li>
									</>
								)}
								{isStudent && (

									<>
										<li>
											<Link
												className={`dropdown-item ${pathname === "/learning/my-courses" ? "active" : ""}`}
												href="/learning/my-courses"
											>
												<i className="bx bx-book"></i>{t('user.myLearning')}
											</Link>
										</li>
										<li>
											<Link
												className={`dropdown-item ${pathname === "/learning/by-module" ? "active" : ""}`}
												href="/learning/by-module"
											>
												<i className="bx bx-book"></i>{t('user.byModule')}
											</Link>
										</li>
										{/*Tareas de un curso*/}

									</>
								)}


								{/* <li>
									<Link
										className="dropdown-item"
										href="/instructor/courses"
									>
										<i className="bx bxs-dashboard"></i> My
										Courses
									</Link>
								</li>

								<li>
									<Link
										className="dropdown-item"
										href="/learning/my-courses/"
									>
										<i className="bx bx-book"></i>My
										Learning
									</Link>
								</li>

								<li>
									<Link
										className="dropdown-item"
										href="/learning/my-purchase-history/"
									>
										<i className="bx bx-credit-card-front"></i>
										My Purchases
									</Link>
								</li>

								<li>
									<Link
										className="dropdown-item"
										href="/learning/wishlist/"
									>
										<i className="bx bxs-heart"></i>Wishlist
									</Link>
								</li> */}

								<li>
									<Link
										className={`dropdown-item ${pathname === "/profile/basic-information" ? "active" : ""}`}
										href="/profile/basic-information"
									>
										<i className="bx bx-user-circle"></i>{" "}
										{t('auth.accountSettings')}
									</Link>
								</li>

								<li>
									<hr className="dropdown-divider" />
								</li>

								<li>
									<button
										type="submit"
										className="dropdown-item"
										onClick={() => signOut()}
									>
										<i className="bx bx-log-out"></i> {t('auth.logout')}
									</button>
								</li>
							</ul>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default UserMenu;
