import React, { Suspense } from "react";
import Yom from "@/app/ui/main/home/Yom";
import Hero from "@/app/ui/main/home/Hero";
import Popular from "../../ui/main/home/Popular";
import NavHome from "../../components/main/NavHome";
import { YomSkeleton } from "../../components/Skeletons";

export default async function page() {
  return (
    <main className="overflow-hidden">
      <NavHome />
      <Hero />
      <Suspense fallback={<YomSkeleton />}>
        <Yom />
      </Suspense>
      <Suspense fallback={<YomSkeleton />}>
        <Popular />
      </Suspense>
    </main>
  );
}
