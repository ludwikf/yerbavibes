import Details from "@/app/ui/main/singleProduct/Details";
import Hero from "@/app/ui/main/singleProduct/Hero";
import Review from "@/app/ui/main/singleProduct/Review";
import React from "react";

export default async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const id = searchParams["id"];
  async function getData() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WEB_URL}/api/get-yerba?id=${id}`,
        { cache: "no-store" }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      return data;
    } catch (error: any) {
      return null;
    }
  }

  async function getReviews() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WEB_URL}/api/get-reviews?postId=${id}`,
        { cache: "no-store" }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      return data;
    } catch (error: any) {
      return null;
    }
  }
  const data = await getData();
  const reviews = await getReviews();
  return (
    <main className="pt-[120px] md:pt-[50px] lg:pt-0">
      <Hero data={data} review={reviews} />
      <Details data={data} />
      <Review data={reviews} />
    </main>
  );
}
