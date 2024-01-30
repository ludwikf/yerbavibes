import React from "next-auth/react";
import LoginForm from "@/app/ui/main/login/LoginForm";

export default async function page() {
  return (
    <main className="h-[100dvh] w-[100dvw] flex justify-center items-center">
      <LoginForm />
    </main>
  );
}
