import React from "react";
import RegisterForm from "@/app/ui/main/register/RegisterForm";

export default async function Register() {
  return (
    <main className="max-w-[100%]">
      <div className="h-[100svh] flex justify-center items-center">
        <RegisterForm />
      </div>
    </main>
  );
}
