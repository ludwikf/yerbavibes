import React from "react";
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
