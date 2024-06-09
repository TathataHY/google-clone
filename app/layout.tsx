import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Google Clone",
  description: "Clone of Google search engine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"dark"}>
      <body
        className={`${inter.className} dark:bg-[#262626] w-full min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
