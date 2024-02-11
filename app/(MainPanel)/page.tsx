import React from "react";
import Yom from "@/app/ui/main/home/Yom";
import Hero from "@/app/ui/main/home/Hero";
import Popular from "../ui/main/home/Popular";
import NavHome from "../components/main/NavHome";

export default function Page() {
  return (
    <main className="overflow-hidden">
      <NavHome />
      <Hero />
      <Yom />
      <Popular />
    </main>
  );
}
