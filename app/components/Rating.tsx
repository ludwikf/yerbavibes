import React, { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Rating({ postId }: any) {
  const [ratingValue, setRatingValue] = useState<any>(null);
  const [hover, setHover] = useState<any>(null);
  const [commentValue, setCommentValue] = useState<string>("");

  const { data: session }: any = useSession();
  const router = useRouter();

  const handleSubmit = async (r: any) => {
    try {
      const post = postId;
      const user = session?.user._id;
      const rating = r;
      const comment = commentValue;

      const res = await fetch("/api/add-review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ post, user, rating, comment, session }),
      });

      if (!res.ok) {
        throw new Error("Error with adding new review");
      }

      setRatingValue(ratingValue);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return <></>;
}
