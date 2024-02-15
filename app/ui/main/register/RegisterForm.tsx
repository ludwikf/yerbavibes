"use client";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { ButtonSpinner } from "@/app/components/LoadingSpinner";
import Link from "next/link";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { status: sessionStatus } = useSession();

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const confirmPassword = e.target[3].value;

    if (username.length < 3) {
      setError("Username is too short");
      return;
    }

    if (username.length > 20) {
      setError("Username is too long");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

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
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
          password,
        }),
      });

      if (!res.ok) {
        res.json().then((e) => {
          setError(e.error);
        });
      }
      if (res.status === 200) {
        setError("");
        await signIn("credentials", {
          redirect: false,
          email,
          password,
        });
        router.push("/");
      }
    } catch (error) {
      setError("Error, try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[100%] flex flex-col items-center gap-5">
      <div className="w-[30%] border-[1px] border-[#ccc] shadow rounded-xl py-6 px-7">
        <div className="text-2xl font-bold mb-8">Create account</div>
        <form onSubmit={handleSubmit}>
          <input
            id="username"
            type="text"
            className={`w-full border-[1px] border-${
              error && error.includes("Username") ? "red-500" : "[#aaa]"
            } bg-transparent placeholder:text-[#888] rounded-lg px-3 py-2 mb-5 focus:outline-none focus:border-pageTheme focus:shadow`}
            placeholder="Username"
            required
          />
          <input
            id="email"
            type="text"
            className={`w-full border-[1px] border-${
              error && error.includes("Email") ? "red-500" : "[#aaa]"
            } bg-transparent placeholder:text-[#888] rounded-lg px-3 py-2 mb-5 focus:outline-none focus:border-pageTheme focus:shadow`}
            placeholder="Email"
            required
          />
          <input
            id="password"
            type="password"
            className={`w-full border-[1px] border-${
              error && error.includes("Password") ? "red-500" : "[#aaa]"
            } bg-transparent placeholder:text-[#888] rounded-lg px-3 py-2 mb-5 focus:outline-none focus:border-pageTheme focus:shadow`}
            placeholder="Password"
            required
          />
          <input
            id="confirmPassword"
            type="password"
            className={`w-full border-[1px] border-${
              error && error.includes("match") ? "red-500" : "[#aaa]"
            } bg-transparent placeholder:text-[#888] rounded-lg px-3 py-2 mb-4 focus:outline-none focus:border-pageTheme focus:shadow`}
            placeholder="Confirm password"
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
                  <p>Sign up</p>
                </div>
              )}
            </button>
          </div>
        </form>
      </div>
      <div className="">
        Already have an account?
        <Link
          href={"/login"}
          className="text-pageTheme hover:brightness-[99%] ml-1.5"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}
