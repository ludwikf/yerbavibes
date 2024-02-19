import { ProductDetailsPage } from "@/app/components/Skeletons";
import React from "react";

export default function loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <ProductDetailsPage />
    </div>
  );
}
