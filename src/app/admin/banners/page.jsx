import React from "react";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { ContentPage } from "./_components/ContentPage";
import { getBanners } from "./_actions";

const Page = async () => {
  const { items:banners } = await getBanners();
  const currentUser = await getCurrentUser();
  const isAdmin = currentUser?.role === "ADMIN";

  return (
    <>
      <ContentPage items={banners} isAdmin={isAdmin} />
    </>
  );
};

export default Page;
