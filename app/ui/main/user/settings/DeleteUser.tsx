"use client";
import { ButtonSpinner } from "@/app/components/LoadingSpinner";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

export default function UsernameEdit() {
  const [form, setForm] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { data: session }: any = useSession();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const password = e.target[0].value;
    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WEB_URL}/api/delete-user-form`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password,
          }),
        }
      );

      if (!res.ok) {
        const errorMessage = await res.text();
        setError(errorMessage);
      } else {
        setError("");
        await signOut();
      }
    } catch (error) {
      return setError("An error occurred. Please try again.");
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
          <div className="z-40 overflow-hidden w-[30%] h-[250px] bg-bodyTheme border-[1px] border-[#ccc] shadow-xl rounded-2xl flex flex-col">
            <div className="w-full px-6 bg-red-500 h-[60px] text-2xl font-bold flex items-center justify-between text-[#444]">
              <p>DELETE ACCOUNT</p>
              <button
                onClick={() => {
                  setError(""), setForm(false);
                }}
              >
                <XMarkIcon className="w-8" />
              </button>
            </div>
            <form
              onSubmit={handleSubmit}
              className="p-6 flex flex-col flex-grow justify-between"
            >
              <div className="relative my-2">
                <input
                  id="password"
                  type="password"
                  className={`w-full bg-inherit border-[1px] border-${
                    error && error.includes("Invalid") ? "red-500" : "[#ccc]"
                  } placeholder:text-[#bebebe82] text-[#333] rounded-lg px-3 py-2 focus:outline-none`}
                  required
                  placeholder="Enter your current password"
                />
                <span className="absolute top-[-8px] px-1 left-[8px] text-[#888] bg-bodyTheme text-xs">
                  Password
                </span>
              </div>
              {error && <div className="text-red-500 ml-1 my-2">{error}</div>}
              <button
                disabled={loading}
                type="submit"
                className="w-[100%] bg-red-500 mt-2 rounded-lg py-2 text-center flex justify-center"
              >
                {loading ? (
                  <div className="w-6 h-6">
                    <ButtonSpinner />
                  </div>
                ) : (
                  <p>DELETE ACCOUNT</p>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        disabled={loading}
        onClick={() => setForm(true)}
        className="p-3 bg-red-500 rounded-lg mt-10 hover:bg-red-600 transition"
      >
        Delete Account
      </button>
    </>
  );
}
