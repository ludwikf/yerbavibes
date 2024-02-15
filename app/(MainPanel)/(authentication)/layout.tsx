import { Roboto } from "next/font/google";

import { getServerSession } from "next-auth/next";
import SessionProvider from "@/libs/SessionProvider";
import NavAuth from "@/app/components/main/NavAuth";
import { redirect } from "next/navigation";

const SS3 = Roboto({ subsets: ["latin"], weight: "400" });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (session) {
    redirect("/");
  }

  return (
    <main className={SS3.className}>
      <SessionProvider session={session}>
        <NavAuth />
        {children}
      </SessionProvider>
    </main>
  );
}
