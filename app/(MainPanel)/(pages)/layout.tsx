import { Roboto } from "next/font/google";

import { getServerSession } from "next-auth/next";
import SessionProvider from "@/libs/SessionProvider";
import Navbar from "@/app/components/main/Navbar";

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
      </SessionProvider>
    </main>
  );
}
