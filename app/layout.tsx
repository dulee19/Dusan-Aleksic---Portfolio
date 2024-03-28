import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import NextTopLoader from 'nextjs-toploader';
import Aos from "@/components/Aos";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dušan Aleksić - Portfolio",
  description: "A web developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-peach-600 ${manrope.className}`}>
        <NextTopLoader />
        <Aos />
        {children}
      </body>
    </html>
  );
}
