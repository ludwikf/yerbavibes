import { Roboto } from "next/font/google";
import "./globals.css";

import { getServerSession } from "next-auth/next";
import SessionProvider from "@/libs/SessionProvider";
import { getWebSettings } from "@/app/components/WebSettings";
import React from "react";

const SS3 = Roboto({ subsets: ["latin"], weight: "400" });
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const webProps = await getWebSettings();
  const session = await getServerSession();
  return (
    <html>
      <head>
        <title>{webProps.websiteTitle || "Ludwik's app"}</title>
        <meta
          name="description"
          content={webProps.websiteDescription || "Ludwik's app"}
        />
      </head>
      <body className={SS3.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
