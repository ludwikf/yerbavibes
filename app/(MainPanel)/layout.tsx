import { Roboto } from "next/font/google";
import "./globals.css";

import { getServerSession } from "next-auth/next";
import SessionProvider from "@/libs/SessionProvider";
import Navbar from "../components/main/Navbar";
import Footer from "../ui/main/Footer";

const SS3 = Roboto({ subsets: ["latin"], weight: "400" });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <main className={SS3.className}>
      <SessionProvider session={session}>
        <Navbar />
        {children}
        <Footer />
      </SessionProvider>
    </main>
  );
}
