"use client";
import React, { useState } from "react";

const ContactPage = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      content: e.target.message.value,
    };
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="w-screen min-h-screen flex justify-center items-center">
      <div className="w-[70%] h-[50%]">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 rounded-md px-4 py-2"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded-md px-4 py-2"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="border border-gray-300 rounded-md px-4 py-2 resize-none"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-pageTheme text-black py-2 px-4 rounded-md hover:brightness-90 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
