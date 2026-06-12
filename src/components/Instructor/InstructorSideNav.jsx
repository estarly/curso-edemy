"use client";

import RoleSideNav from "@/components/Layout/RoleSideNav";

const InstructorSideNav = ({ isInstructor }) => {
	return <RoleSideNav role="INSTRUCTOR" allowed={isInstructor} />;
};

export default InstructorSideNav;
