import React from "react";
import Image from "next/image";
import { poorStory } from "@/app/components/fonts";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import Ratings from "@/app/components/Ratings";
import YomData from "./YomData";

export default async function Yom() {
  async function fetchData() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WEB_URL}/api/get-yom`,
        {
          cache: "no-store",
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      return data;
    } catch (error) {
      return null;
    }
  }
  const data = await fetchData();
  return (
    <>
      <YomData data={data} />
    </>
  );
}
