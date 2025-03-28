import React from "react";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { ContentPage } from "./_components/ContentPage";
import { getModules } from "./_actions";

const Page = async () => {
  const { items } = await getModules();
  const currentUser = await getCurrentUser();
  const isAdmin = currentUser?.role === "ADMIN";

  return (
    <>
      <ContentPage modules={items} isAdmin={isAdmin} />
    </>
  );
};

export default Page;
