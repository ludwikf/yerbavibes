"use client";
import React, { useEffect, useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconActive } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";

export default function FavoriteButton({ id }: any) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { data: session }: any = useSession();
  const addFavorite = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WEB_URL}/api/add-favorite`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ session, id }),
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return setIsFavorite(true);
    } catch (error) {
      return null;
    }
  };
  const deleteFavorite = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WEB_URL}/api/delete-favorite?id=${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Session: JSON.stringify(session),
          },
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return setIsFavorite(false);
    } catch (error) {
      return null;
    }
  };
  useEffect(() => {
    const checkFavoriteStatus = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WEB_URL}/api/check-favorite?id=${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Session: JSON.stringify(session),
            },
          }
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setIsFavorite(data);
      } catch (error) {
        console.error("Error checking favorite status:", error);
      }
    };
    if (session) {
      checkFavoriteStatus();
    }
  }, [session, id]);
  return (
    <div className="group/fav cursor-pointer">
      {isFavorite ? (
        <HeartIconActive
          onClick={deleteFavorite}
          className="w-9 text-pageTheme"
        />
      ) : (
        <>
          <HeartIcon className="w-9 group-hover/fav:hidden" />
          <HeartIconActive
            onClick={addFavorite}
            className="w-9 hidden group-hover/fav:block text-pageTheme"
          />
        </>
      )}
    </div>
  );
}
