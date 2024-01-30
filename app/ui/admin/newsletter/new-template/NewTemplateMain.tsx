"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function NewTemplateMain() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();
  const { data: session }: any = useSession();

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsSubmitting(true);

    const title = e.target[0].value;
    const subject = e.target[1].value;
    const content = e.target[2].value;

    try {
      const res = await fetch("/api/add-template", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, subject, content, session }),
      });

      if (!res.ok) {
        throw new Error("Error submitting");
      }
      if (res.status === 200) {
        router.push("/admin-cp/newsletter");
      }
    } catch (error) {
      throw new Error("Error submitting");
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 2000);
    }
  };

  return (
    <>
      <div className="my-[25px] flex w-screen flex-col justify-center items-center">
        <div className="w-[90%] min-h-[100%] flex mb-5">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 w-full mt-5 lg:mt-0"
          >
            <input
              className="bg-inherit text-xl lg:text-3xl mt-10 placeholder:text-[#999] focus:outline-none"
              type="text"
              placeholder="Title"
              required
            />
            <input
              className="bg-inherit text-lg lg:text-2xl placeholder:text-[#999] focus:outline-none"
              type="text"
              placeholder="Subject"
              required
            />
            <textarea
              ref={textareaRef}
              className="bg-inherit lg:text-xl placeholder:text-[#999] focus:outline-none resize-none"
              placeholder="Content"
              onInput={adjustTextareaHeight}
              required
            />
            <div>
              <button
                className="bg-white text-black rounded-xl px-3 py-2 hover:brightness-50 transition-all select-none"
                disabled={isSubmitting}
                type="submit"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
