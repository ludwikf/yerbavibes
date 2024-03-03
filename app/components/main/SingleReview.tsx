"use client";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import {
  EllipsisVerticalIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";
import Ratings from "../Ratings";
import { useSession } from "next-auth/react";
import RatingStars from "../RatingStars";
import Popup from "../Popup";
import Image from "next/image";

export default function SingleReview({ data }: any) {
  const [popup, setPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isDownvoted, setIsDownvoted] = useState(false);
  const [upVote, setUpVote] = useState(0);
  const [downVote, setDownVote] = useState(0);
  const [show, setShow] = useState(false);
  const dropRef = useRef<any>(null);

  const { data: session, status }: any = useSession();

  const handleUpvote = async () => {
    setLoading(true);
    if (isUpvoted) {
      try {
        const res = await fetch("/api/delete-vote", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ review: data._id, type: "upTrunc" }),
        });

        if (!res.ok) {
          throw new Error("Response Error");
        }
        setUpVote((prev: any) => prev - 1);
        setIsUpvoted(false);
      } catch (error) {
        throw new Error("Error upvoting");
      } finally {
        setLoading(false);
      }
    } else {
      try {
        const res = await fetch("/api/add-vote", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ review: data._id, type: "up" }),
        });

        if (!res.ok) {
          throw new Error("Response Error");
        }

        setIsUpvoted(true);
        if (isDownvoted) {
          setDownVote((prev) => prev - 1);
          setIsDownvoted(false);
        }
        setUpVote((prev: any) => prev + 1);
      } catch (error) {
        throw new Error("Error upvoting");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleDownvote = async () => {
    setLoading(true);
    if (isDownvoted) {
      try {
        const res = await fetch("/api/delete-vote", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ review: data._id, type: "downTrunc" }),
        });

        if (!res.ok) {
          throw new Error("Response Error");
        }
        setDownVote((prev: any) => prev - 1);
        setIsDownvoted(false);
      } catch (error) {
        throw new Error("Error downvoting");
      } finally {
        setLoading(false);
      }
    } else {
      try {
        const res = await fetch("/api/add-vote", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ review: data._id, type: "down" }),
        });

        if (!res.ok) {
          throw new Error("Response Error");
        }
        setDownVote((prev: any) => prev + 1);
        if (isUpvoted) {
          setUpVote((prev) => prev - 1);
          setIsUpvoted(false);
        }
        setIsDownvoted(true);
      } catch (error) {
        throw new Error("Error downvoting");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleClickOutside = (event: any) => {
    if (dropRef.current && !dropRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    const fetchVotes = async () => {
      try {
        const res = await fetch(`/api/get-votes?id=${data._id}`);

        if (!res.ok) {
          throw new Error("Response Error");
        }
        const resData = await res.json();
        const upVotes = resData.votes.filter(
          (vote: any) => vote.type === "up"
        ).length;
        const downVotes = resData.votes.filter(
          (vote: any) => vote.type === "down"
        ).length;

        setUpVote(upVotes);
        setDownVote(downVotes);

        if (resData.userVoteType === "up") {
          setIsUpvoted(true);
        }
        if (resData.userVoteType === "down") {
          setIsDownvoted(true);
        }
      } catch (error) {
        throw new Error("Error fetching votes");
      } finally {
        setLoading(false);
      }
    };
    fetchVotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const userVote = localStorage.getItem(`vote_${data._id}`);
    if (userVote === "up") {
      setIsUpvoted(true);
    }
    if (userVote === "down") {
      setIsDownvoted(true);
    }
  }, [data._id]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setUpVote(data.up);
    setDownVote(data.down);
  }, [data.up, data.down]);

  return (
    <>
      {popup && (
        <Popup message={"Review flagged"} onClose={() => setPopup(false)} />
      )}
      <div className="mb-14 relative w-[100%]">
        <div className="flex items-center gap-3">
          <div>
            {data.user.avatar ? (
              <div
                className="relative"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                }}
              >
                <Image
                  src={data.user.avatar}
                  alt="avatar"
                  fill
                  sizes="100vh"
                  className="rounded-full absolute object-cover"
                />
              </div>
            ) : (
              <UserCircleIcon className="w-12" />
            )}
          </div>
          <div>{data.user.username}</div>
        </div>
        <div className="flex gap-2 items-center my-4">
          <div className="w-[90px]">
            <RatingStars rating={data.rating} />
          </div>
          <div className="text-sm text-[#666]">
            {new Date(data.createdAt).toLocaleDateString("pl-PL")}
          </div>
        </div>
        <div>{data.comment}</div>
        <div className="flex items-center gap-5 mt-3">
          <div className="flex items-center text-[#999] gap-1">
            <div className={`${isUpvoted && "text-[#555]"}`}>{upVote || 0}</div>
            <button disabled={loading || !session || status === "loading"}>
              <PlusCircleIcon
                onClick={handleUpvote}
                className={`${
                  isUpvoted && "text-[#555]"
                } w-7 cursor-pointer hover:text-[#555] transition`}
              />
            </button>
          </div>
          <div className="flex items-center text-[#999] gap-1">
            <div className={`${isDownvoted && "text-[#555]"}`}>
              {downVote || 0}
            </div>
            <button disabled={loading || !session || status === "loading"}>
              <MinusCircleIcon
                onClick={handleDownvote}
                className={`${
                  isDownvoted && "text-[#555]"
                } w-7 cursor-pointer hover:text-[#555] transition`}
              />
            </button>
          </div>
        </div>
        <div className="absolute right-0 top-0" ref={dropRef}>
          <div className="group flex flex-col items-end">
            <button>
              <EllipsisVerticalIcon
                onClick={() => {
                  setShow((e) => !e);
                }}
                className="w-6 cursor-pointer right-0"
              />
            </button>
            <div
              onClick={() => {
                setPopup(true);
                setShow(false);
              }}
              className={` ${
                show ? "block" : "hidden"
              } select-none cursor-pointer hover:text-pageTheme transition p-4 shadow-[0_10px_50px_-10px_rgba(0,0,0,0.3)] rounded`}
            >
              Flag inappropriate
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
