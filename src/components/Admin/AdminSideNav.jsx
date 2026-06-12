"use client";

import RoleSideNav from "@/components/Layout/RoleSideNav";

const AdminSideNav = ({ isAdmin }) => {
	return <RoleSideNav role="ADMIN" allowed={isAdmin} />;
};

export default AdminSideNav;
