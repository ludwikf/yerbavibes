"use client";
import { ButtonSpinner } from "@/app/components/LoadingSpinner";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

export default function UsernameEdit() {
  const [form, setForm] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { data: session }: any = useSession();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const currentPassword = e.target[0].value;
    const newPassword = e.target[1].value;
    const confirmPassword = e.target[2].value;

    if (!newPassword || newPassword.length < 6) {
      setError("Password is too short");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/edit-password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });

      if (!res.ok) {
        const errorMessage = await res.text();
        setError(errorMessage);
      } else {
        setError("");
        window.location.reload();
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
          <div className="z-40 overflow-hidden w-[30%] min-h-[360px] bg-bodyTheme border-[1px] border-[#ccc] shadow-xl rounded-2xl flex flex-col">
            <div className="w-full px-6 bg-[#0000000c] h-[60px] text-2xl font-bold flex items-center justify-between text-[#444]">
              <p>Change password</p>
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
                  id="currentPassword"
                  type="password"
                  className={`w-full bg-inherit border-[1px] border-${
                    (error && error.includes("Invalid")) ||
                    error.includes("different")
                      ? "red-500"
                      : "[#ccc]"
                  } placeholder:text-[#bebebe82] text-[#333] rounded-lg px-3 py-2 focus:outline-none`}
                  required
                  placeholder="Enter your current password"
                />
                <span className="absolute top-[-8px] px-1 left-[8px] text-[#888] bg-bodyTheme text-xs">
                  Current password
                </span>
              </div>
              <div className="relative my-2">
                <input
                  id="newPassword"
                  type="password"
                  className={`w-full bg-inherit border-[1px] border-${
                    error &&
                    (error.includes("match") ||
                      error.includes("short") ||
                      error.includes("different"))
                      ? "red-500"
                      : "[#ccc]"
                  } placeholder:text-[#bebebe82] text-[#333] rounded-lg px-3 py-2 focus:outline-none`}
                  required
                  placeholder="Enter your new password"
                />
                <span className="absolute top-[-8px] px-1 left-[8px] text-[#888] bg-bodyTheme text-xs">
                  New password
                </span>
              </div>
              <div className="relative my-2">
                <input
                  id="confirmPassword"
                  type="password"
                  className={`w-full bg-inherit border-[1px] border-${
                    error && error.includes("match") ? "red-500" : "[#ccc]"
                  } placeholder:text-[#bebebe82] text-[#333] rounded-lg px-3 py-2 focus:outline-none`}
                  required
                  placeholder="Confirm your new password"
                />
                <span className="absolute top-[-8px] px-1 left-[8px] text-[#888] bg-bodyTheme text-xs">
                  Confirm password
                </span>
              </div>
              {error && <div className="text-red-500 ml-1 my-2">{error}</div>}
              <button
                disabled={loading}
                type="submit"
                className="w-[100%] bg-pageTheme mt-2 rounded-lg py-2 text-center flex justify-center"
              >
                {loading ? (
                  <div className="w-6 h-6">
                    <ButtonSpinner />
                  </div>
                ) : (
                  <p>Save</p>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        onClick={() => setForm(true)}
        className="text-pageTheme cursor-pointer hover:brightness-[98%]"
      >
        Edit
      </button>
    </>
  );
}
