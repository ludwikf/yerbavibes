"use client";
import React, { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { ButtonSpinner } from "@/app/components/LoadingSpinner";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Popup from "@/app/components/Popup";

export default function LoginForm() {
  const [popup, setPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const [form, setForm] = useState(false);
  const [error, setError] = useState("");
  const [resetError, setResetError] = useState("");

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

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

  const sendResetPasswordToken = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;

    if (!isValidEmail(email)) {
      setResetError("Email is invalid");
      return;
    }

    setResetLoading(true);
    try {
      const res: any = await fetch("/api/send-reset-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        setResetError("Account with that Email doesn't exist");
      } else {
        setResetError("");
        setForm(false);
        setPopup(true);
      }
    } catch (error) {
      console.log(error);
      setResetError("An error occurred. Please try again.");
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <>
      {popup && (
        <Popup
          message={"Email has been sent"}
          onClose={() => setPopup(false)}
        />
      )}
      {form && (
        <div className="z-20 fixed flex justify-center items-center left-0 top-0 w-screen h-screen">
          <div
            onClick={() => {
              setError(""), setForm(false);
            }}
            className="z-30 absolute left-0 top-0 w-screen h-screen backdrop-blur-[2px] bg-[#0000001c]"
          ></div>
          <div
            className={`z-40 overflow-hidden w-[90%] sm:w-[60%] lg:w-[30%] h-[240px] bg-bodyTheme border-[1px] border-[#ccc] shadow-xl rounded-2xl flex flex-col`}
          >
            <div className="w-full px-6 bg-[#0000000c] h-[60px] text-2xl font-bold flex items-center justify-between text-[#444]">
              <p>Reset password</p>
              <button
                onClick={() => {
                  setResetError(""), setForm(false);
                }}
              >
                <XMarkIcon className="w-8" />
              </button>
            </div>
            <form
              onSubmit={sendResetPasswordToken}
              className="p-6 flex flex-col flex-grow justify-between"
            >
              <div className="relative">
                <input
                  id="email"
                  type="text"
                  className={`w-full bg-inherit border-[1px] border-${
                    resetError ? "red-500" : "[#ccc]"
                  } placeholder:text-[#bebebe82] text-[#333] rounded-lg px-3 py-2 focus:outline-none`}
                  required
                />
                <span className="absolute top-[-8px] px-1 left-[8px] text-[#888] bg-bodyTheme text-xs">
                  Email
                </span>
              </div>
              {resetError && (
                <div className="text-red-500 ml-1">{resetError}</div>
              )}
              <button
                disabled={resetLoading}
                type="submit"
                className="w-[100%] bg-pageTheme rounded-lg py-2 text-center flex justify-center"
              >
                {resetLoading ? (
                  <div className="w-6 h-6">
                    <ButtonSpinner />
                  </div>
                ) : (
                  <p>Reset password</p>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="w-[100%] mt-[70px] lg:mt-0 flex flex-col lg:flex-row justify-center items-center lg:items-start lg:gap-[80px]">
        <div className="max-w-[500px] w-[90%] lg:w-[30%] min-h-[320px] border-[1px] border-[#ccc] shadow rounded-xl py-6 px-7">
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
                <div className="flex">
                  <div
                    onClick={() => {
                      setForm(true);
                    }}
                    className="text-sm text-pageTheme hover:brightness-[99%] cursor-pointer select-none"
                  >
                    Forgot password?
                  </div>
                </div>
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
        <div className="max-w-[500px] w-[90%] lg:w-1/3 flex items-center lg:items-start flex-col p-6">
          <div className="text-2xl font-bold mb-7">No account yet?</div>
          <Link
            href={"/register"}
            className="bg-transparent border-2 border-pageTheme p-2 text-center text-pageTheme text-md rounded-lg hover:text-white hover:bg-pageTheme transition w-[80%]"
          >
            Create account
          </Link>
        </div>
      </div>
    </>
  );
}
