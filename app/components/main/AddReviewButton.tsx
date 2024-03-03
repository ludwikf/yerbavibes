"use client";
import React, { TextareaHTMLAttributes, useEffect, useState } from "react";

import { PlusCircleIcon } from "@heroicons/react/24/outline";
import {
  PlusCircleIcon as PlusCircleIconActive,
  StarIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { ButtonSpinner } from "../LoadingSpinner";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function AddReviewButton({ data }: any) {
  const [form, setForm] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [rating, setRating] = useState<any>(null);
  const [hover, setHover] = useState<any>(null);
  const { data: session, status }: any = useSession();

  const searchParams = useSearchParams();
  const post = searchParams.get("id");

  const handleSubmit = async () => {
    if (!post) {
      console.error("Post is not available");
      return;
    }
    const descriptionElement = document.getElementById(
      "description"
    ) as HTMLTextAreaElement;
    const description = descriptionElement.value;

    if (description?.length > 500) {
      setError("Dsername is too long");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/add-review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post,
          rating,
          description,
        }),
      });

      if (!res.ok) {
        setError("An error occurred. Please try again.");
      }
      setError("");
      window.location.reload();
    } catch (error) {
      console.log(error);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (form) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [form]);

  return (
    <>
      {form && (
        <div className="z-20 fixed flex justify-center items-center left-0 top-0 w-screen h-screen">
          <div
            onClick={() => {
              setError(""), setForm(false);
            }}
            className="z-30 absolute left-0 top-0 w-screen h-screen backdrop-blur-[2px] bg-[#0000001c]"
          ></div>
          <div
            className={`z-40 overflow-hidden w-[90%] lg:w-[60%] h-[400px] lg:h-[500px] bg-bodyTheme border-[1px] border-[#ccc] shadow-xl rounded-2xl flex flex-col`}
          >
            <div className="w-full px-6 bg-pageTheme h-[45px] text-2xl font-bold flex items-center justify-end text-[#444]">
              <button
                onClick={() => {
                  setError(""), setForm(false);
                }}
              >
                <XMarkIcon className="w-8" />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="p-6 flex flex-col flex-grow "
            >
              <div className="w-[150px] lg:w-[200px]">
                <div className="flex">
                  {[...Array(5)].map((star, index) => {
                    const currentRating = index + 1;
                    return (
                      <label key={index}>
                        <input
                          type="radio"
                          name="rating"
                          value={currentRating}
                          onClick={() => setRating(currentRating)}
                          className="hidden"
                          required
                        />
                        <StarIcon
                          className={`w-[100%] cursor-pointer`}
                          color={
                            currentRating <= (hover || rating)
                              ? "#22c55e"
                              : "#00000020"
                          }
                          onMouseEnter={() => setHover(currentRating)}
                          onMouseLeave={() => setHover(null)}
                        />
                      </label>
                    );
                  })}
                </div>
              </div>
              <div className="relative my-7 flex flex-grow">
                <textarea
                  id="description"
                  className={`w-full h-[100%] bg-inherit border-[1px] resize-none ${
                    error && error.includes("Description")
                      ? "border-[#EF4444]"
                      : "border-[#ccc]"
                  } placeholder:text-[#bebebe82] text-[#333] rounded-lg px-3 py-3 focus:outline-none`}
                />
                <span className="absolute top-[-10px] px-1 left-[8px] text-[#888] bg-bodyTheme text-sm">
                  Description (optional)
                </span>
              </div>
              {error && <div className="text-red-500 mb-2">{error}</div>}
              <button
                disabled={loading}
                type="submit"
                className="w-[100%] bg-pageTheme rounded-lg py-2 text-center flex justify-center"
              >
                {loading ? (
                  <div className="w-6 h-6 my-[2px]">
                    <ButtonSpinner />
                  </div>
                ) : (
                  <p className="text-black">Submit</p>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
      {session ? (
        <div
          onClick={() => setForm(true)}
          className="group cursor-pointer flex items-center gap-1 select-none text-[#888]"
        >
          <PlusCircleIcon className="w-9 group-hover:hidden" />
          <PlusCircleIconActive className="w-9 hidden group-hover:block text-pageTheme" />
          <div className="group-hover:text-pageTheme">Add review</div>
        </div>
      ) : (
        <Link
          href={"/login"}
          className="group cursor-pointer flex items-center gap-1 select-none text-[#888]"
        >
          <PlusCircleIcon className="w-9 group-hover:hidden" />
          <PlusCircleIconActive className="w-9 hidden group-hover:block text-pageTheme" />
          <div className="group-hover:text-pageTheme">Add review</div>
        </Link>
      )}
    </>
  );
}
