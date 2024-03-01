import { Roboto } from "next/font/google";

import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  return <main>{children}</main>;
}
