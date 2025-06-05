'use client'
import {useState} from "react";

import CourseLessons from "@/components/Instructor/CourseLessons";
import AssetItem from "./AssetItem";

const ContentPage = ({ course, params, assets, assignmentsTypes }) => {
  const [currentAsset, setCurrentAsset] = useState(null);

  const onEdit = (asset) => {
    setCurrentAsset(asset);
  }

  const onCancelEdit = () => {
    setCurrentAsset(null);
  }

  const onAssetUpdated = () => {
    setCurrentAsset(null);
  }

  return (
    <>
      <CourseLessons
        course={course}
        params={params}
        currentAsset={currentAsset}
        onCancelEdit={onCancelEdit}
        onAssetUpdated={onAssetUpdated}
      />
      <hr />
      <div className="row row-gap-4">
        {assets.map((asset, idx) => (
          <AssetItem
            key={asset.id}
            asset={asset}
            assignmentsTypes={assignmentsTypes}
            onEdit={onEdit}
          />
        ))}
      </div>
    </>
  );
};

export default ContentPage;
