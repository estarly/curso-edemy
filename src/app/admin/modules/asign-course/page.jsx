import React from "react";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { ContentPage } from "./_components/ContentPage";
import { getModulesByStatus } from "../_actions";
import { getCategories } from "./_actions";
import { getCoursesByCategory } from "./_actions";

const Page = async () => {
  const { items: modules } = await getModulesByStatus(1);//active
  const { items: categories } = await getCategories();
  const moduleId = modules[0]?.id;
  const categoryId = categories[0]?.id;
  const { items: courses } = await getCoursesByCategory(categoryId);


  const currentUser = await getCurrentUser();
  const isAdmin = currentUser?.role === "ADMIN";
  return ( 
    <>
      <ContentPage
        modules={modules}
        isAdmin={isAdmin}
        categories={categories}
        initialCourses={courses}
        initialModuleId={moduleId}
        initialCategoryId={categoryId}
      />
    </>
  );
};

export default Page;
