"use client";
import React, { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { ButtonSpinner } from "@/app/components/LoadingSpinner";
import Link from "next/link";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    setLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError("Invalid email or password");
      } else {
        setError("");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[100%] flex justify-center gap-[80px]">
      <div className="w-[30%] min-h-[320px] border-[1px] border-[#ccc] shadow rounded-xl py-6 px-7">
        <div className="text-2xl font-bold mb-8">Sign In</div>
        <form onSubmit={handleSubmit}>
          <input
            id="email"
            type="text"
            className={`w-full border-[1px] ${
              error && error.includes("Invalid")
                ? "border-[#EF4444]"
                : "border-[#aaa]"
            } bg-transparent placeholder:text-[#888] rounded-lg px-3 py-2 mb-5 focus:outline-none focus:border-pageTheme focus:shadow`}
            placeholder="Email"
            required
          />
          <input
            id="password"
            type="password"
            className={`w-full border-[1px] ${
              error && error.includes("Invalid")
                ? "border-[#EF4444]"
                : "border-[#aaa]"
            } bg-transparent placeholder:text-[#888] rounded-lg px-3 py-2 mb-5 focus:outline-none focus:border-pageTheme focus:shadow`}
            placeholder="Password"
            required
          />
          <div className="mt-2 flex flex-col">
            <div className="mb-3">
              <Link
                href={"/"}
                className="text-sm text-pageTheme hover:brightness-[99%]"
              >
                Forgot password?
              </Link>
            </div>
            {error && <div className="text-red-500">{error}</div>}
            <button
              type="submit"
              disabled={loading}
              className="bg-pageTheme flex justify-center p-2.5 text-white text-sm rounded-lg hover:brightness-[90%] mt-4"
            >
              {loading ? (
                <div className="w-6 h-6 flex items-center justify-center">
                  <ButtonSpinner />
                </div>
              ) : (
                <div className="h-6 flex items-center justify-center">
                  <p>Sign in</p>
                </div>
              )}
            </button>
          </div>
        </form>
      </div>
      <div className="w-1/3 flex flex-col p-6">
        <div className="text-2xl font-bold mb-7">No account yet?</div>
        <Link
          href={"/register"}
          className="bg-transparent border-2 border-pageTheme p-2 text-center text-pageTheme text-md rounded-lg hover:text-white hover:bg-pageTheme transition w-[80%]"
        >
          Create account
        </Link>
      </div>
    </div>
  );
}
