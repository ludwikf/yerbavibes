import React from "react";
import Yom from "@/app/ui/main/home/Yom";
import About from "@/app/ui/main/home/MainView";
import Navbar from "../components/main/Navbar";

export default function Page() {
  return (
    <main className=" overflow-hidden">
      <Navbar />
      <About />
      <Yom />
    </main>
  );
}
