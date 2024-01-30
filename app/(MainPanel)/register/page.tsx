import React from "react";

import RegisterForm from "@/app/ui/main/register/RegisterForm";

export default async function Register() {
  return (
    <main className="h-[100dvh] w-[100dvw] flex justify-center items-center">
      <RegisterForm />
    </main>
  );
}
