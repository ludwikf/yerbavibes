import { Roboto } from "next/font/google";

import { getServerSession } from "next-auth/next";
import SessionProvider from "@/libs/SessionProvider";
import Footer from "../components/main/Footer";
import NextTopLoader from "nextjs-toploader";

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
        <NextTopLoader color="#22c55e" showSpinner={false} />
        {children}
        <Footer />
      </SessionProvider>
    </main>
  );
}
