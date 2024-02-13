import Details from "@/app/ui/main/singleProduct/Details";
import Hero from "@/app/ui/main/singleProduct/Hero";
import Review from "@/app/ui/main/singleProduct/Review";
import React from "react";

export default function page() {
  return (
    <main>
      <Hero />
      <Details />
      <Review />
    </main>
  );
}
