"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { menus } from "../../../libs/menus";
import MenuItem from "./MenuItem";
import MegaMenu from "./MegaMenu";
import { usePathname } from "next/navigation";
import UserMenu from "./UserMenu";
import { useCartStore } from "@/store/cart";
import SearchForm from "./SearchForm";

const Navbar = ({ currentUser }) => {
	const [menu, setMenu] = React.useState(true);
	const pathname = usePathname();
	const { count } = useCartStore();

	React.useEffect(() => {
		let elementId = document.getElementById("navbar");
		document.addEventListener("scroll", () => {
			if (window.scrollY > 170) {
				elementId.classList.add("is-sticky");
			} else {
				elementId.classList.remove("is-sticky");
			}
		});
	});

	// Drawer menu
	const [isActiveDrawerMenu, setActiveDrawerMenu] = useState("false");
	const handleToggleDrawerMenu = () => {
		setActiveDrawerMenu(!isActiveDrawerMenu);
	};

	const classOne = menu
		? "collapse navbar-collapse"
		: "collapse navbar-collapse show";
	const classTwo = menu
		? "navbar-toggler navbar-toggler-right collapsed"
		: "navbar-toggler navbar-toggler-right";

	if (pathname === "/coming-soon") {
		return;
	}

	return (
		<>
			<div id="navbar" className="navbar-area">
				<div className="edemy-nav">
					<div className="container-fluid">
						<div className="navbar navbar-expand-lg navbar-light">
							<Link href="/" className="navbar-brand">
								<Image
									src="/images/logo.png"
									width={87}
									height={24}
									alt="logo"
								/>
							</Link>

							<button
								className={classTwo}
								type="button"
								data-toggle="collapse"
								data-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
								onClick={handleToggleDrawerMenu}
							>
								<span className="icon-bar top-bar"></span>
								<span className="icon-bar middle-bar"></span>
								<span className="icon-bar bottom-bar"></span>
							</button>

							<div
								className={classOne}
								id="navbarSupportedContent"
							>
								<SearchForm />

								<ul className="navbar-nav">
									{menus.map((menuItem) => (
										<MenuItem
											key={menuItem.label}
											{...menuItem}
										/>
									))}

									<MegaMenu />
								</ul>
							</div>

							<div className="others-option d-flex align-items-center">
								<div className="option-item">
									<div className="cart-btn">
										<Link href="/cart">
											<i className="flaticon-shopping-cart"></i>{" "}
											<span>{count()}</span>
										</Link>
									</div>
								</div>

								<UserMenu currentUser={currentUser} />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Drawer Menu */}
			<div
				className={`modal drawer-menu ${
					isActiveDrawerMenu ? "" : "show"
				}`}
			>
				<div className="modal-dialog modal-dialog-scrollable">
					<div className="modal-content">
						<div className="modal-header d-flex align-items-center justify-content-between">
							<div>
								<Image
									src="/images/logo.png"
									width={87}
									height={24}
									alt="logo"
								/>
							</div>

							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
								onClick={handleToggleDrawerMenu}
							>
								<i className="bx bx-x"></i>
							</button>
						</div>

						<div className="modal-body">
							<SearchForm />
							<ul>
								{menus.map((menuItem) => (
									<MenuItem
										key={menuItem.label}
										{...menuItem}
									/>
								))}

								<MegaMenu />
							</ul>
						</div>
					</div>
				</div>
				<div
					className="close-overlay"
					onClick={handleToggleDrawerMenu}
				></div>
			</div>
		</>
	);
};

export default Navbar;
