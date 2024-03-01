import SingleReview from "@/app/components/main/SingleReview";
import React from "react";

export default async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const id = searchParams["id"];
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
  const reviews = await getReviews();

  const reviewsWithComments = reviews.filter((review: any) => review.comment);

  return (
    <div className="max-w-screen min-h-[400px] flex justify-center items-start">
      <div className="h-full w-[1000px] flex flex-col items-center mt-[100px]">
        {reviewsWithComments.map((e: any) => (
          <SingleReview key={e._id} data={e} />
        ))}
      </div>
    </div>
  );
}
