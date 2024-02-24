import { ProductSkeleton } from "@/app/components/Skeletons";
import Yerba from "@/app/ui/main/yerba/Yerba";
import React, { Suspense } from "react";

export default async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "24";
  const producer = searchParams["producer"] ?? "";
  const flavor = searchParams["flavor"] ?? "";
  const strength = searchParams["strength"] ?? "";
  const category = searchParams["category"] ?? "";
  const origin = searchParams["origin"] ?? "";
  const tags = searchParams["tags"] ?? "";

  return (
    <div>
      <div className="min-h-screen flex justify-between pt-[130px]">
        <Suspense fallback={<ProductSkeleton />}>
          <Yerba
            page={page}
            per_page={per_page}
            producer={producer}
            flavor={flavor}
            strength={strength}
            category={category}
            origin={origin}
            tags={tags}
          />
        </Suspense>
      </div>
    </div>
  );
}
