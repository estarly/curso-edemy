

import React from "react";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { ContentPage } from "./_components/ContentPage";
import { getModulesByStatus } from "../_actions";
import { getCourseModules } from "./_actions";


const Page = async () => {
  const { items: modules } = await getModulesByStatus(1);//active
  const { courses } = await getCourseModules(1);
  const moduleId = modules[0].id;

  console.log(courses,'courses');
  const currentUser = await getCurrentUser();
  const isAdmin = currentUser?.role === "ADMIN";

  return (
    <>
      <ContentPage modules={modules} isAdmin={isAdmin} courseModules={courses} moduleId={moduleId} />
    </>
  );
};

export default Page;
