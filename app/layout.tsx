import { Roboto } from "next/font/google";
import { getServerSession } from "next-auth/next";
import SessionProvider from "@/libs/SessionProvider";
import React from "react";
import "./globals.css";
import { Metadata } from "next";

const SS3 = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "YerbaVibes | Yerba Mate Hub",
  description: "Your Hub for Yerba Mate Enthusiasts",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html>
      <body className={SS3.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
