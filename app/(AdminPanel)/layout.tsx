import { Roboto } from "next/font/google";

import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import Navbar from "@/app/components/admin/Navbar";
import { authOptions } from "@/libs/authOptions";

const SS3 = Roboto({ subsets: ["latin"], weight: "400" });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  if ((session.user as { role?: string })?.role !== "admin") {
    redirect("/");
  }

  return (
    <main
      className={SS3.className}
      style={{ background: "#161616", color: "white" }}
    >
      <Navbar />
      {children}
    </main>
  );
}
