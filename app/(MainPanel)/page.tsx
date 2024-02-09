import React from "react";
import Yom from "@/app/ui/main/home/Yom";
import Hero from "@/app/ui/main/home/Hero";
import Navbar from "../components/main/Navbar";
import Popular from "../ui/main/home/Popular";
import Footer from "../ui/main/Footer";

export default function Page() {
  return (
    <main className=" overflow-hidden">
      <Hero />
      <Yom />
      <Popular />
    </main>
  );
}
