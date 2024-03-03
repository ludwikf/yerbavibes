"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ButtonSpinner } from "@/app/components/LoadingSpinner";
import Link from "next/link";

export default function ResetPasswordForm({ token }: any) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const password = e.target[0].value;
    const confirmPassword = e.target[1].value;

    if (!password || password.length < 6) {
      setError("Password is too short");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/token-password-reset", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          password,
        }),
      });

      if (!res.ok) {
        const errorMessage = await res.text();
        setError(errorMessage);
      }
      if (res.status === 200) {
        setError("");

        router.push("/login");
      }
    } catch (error) {
      setError("Error, try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[100%] mt-[110px] flex flex-col items-center gap-5">
      <div className="max-w-[500px] w-[90%] lg:w-[30%] border-[1px] border-[#ccc] shadow rounded-xl py-6 px-7">
        <div className="text-2xl font-bold mb-8">Reset password</div>
        <form onSubmit={handleSubmit}>
          <input
            id="password"
            type="password"
            className={`w-full border-[1px] ${
              error && error.includes("Password")
                ? "border-[#EF4444]"
                : "border-[#aaa]"
            } bg-transparent placeholder:text-[#888] rounded-lg px-3 py-2 mb-5 focus:outline-none focus:border-pageTheme focus:shadow`}
            placeholder="New password"
            required
          />
          <input
            id="confirmPassword"
            type="password"
            className={`w-full border-[1px] ${
              error && error.includes("match")
                ? "border-[#EF4444]"
                : "border-[#aaa]"
            } bg-transparent placeholder:text-[#888] rounded-lg px-3 py-2 mb-4 focus:outline-none focus:border-pageTheme focus:shadow`}
            placeholder="Confirm new password"
            required
          />
          {error && <div className="text-red-500 ml-1">{error}</div>}
          <div className="mt-4 flex flex-col">
            <button
              type="submit"
              disabled={loading}
              className="bg-pageTheme flex justify-center p-2.5 text-white text-sm rounded-lg hover:brightness-[90%]"
            >
              {loading ? (
                <div className="w-6 h-6">
                  <ButtonSpinner />
                </div>
              ) : (
                <div className="h-6 flex items-center">
                  <p>Reset password</p>
                </div>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
