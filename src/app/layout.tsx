import type { Metadata } from "next";
import Header from "@/components/Header";
import { Inter } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Todo App",
  description: "A simple Todo application built with Next.js App Router",
};

const inter = Inter({ weight: ["400", "700"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-background text-white ${inter.className}`}>
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
