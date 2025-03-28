import React from "react";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { ContentPage } from "./_components/ContentPage";
import { getCategories } from "./_actions";

const Page = async () => {
  const { items } = await getCategories();
  const currentUser = await getCurrentUser();
  const isAdmin = currentUser?.role === "ADMIN";
  
  return (
    <>
      <ContentPage categories={items} isAdmin={isAdmin} />
    </>
  );
};

export default Page;
