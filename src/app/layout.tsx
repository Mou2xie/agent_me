import type { Metadata } from "next";
import { Anton, Roboto_Flex } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
});

export const metadata: Metadata = {
  title: "Agent Yong - Digital Version of Yong Xie",
  description: "I'm Yong Xie's AI agent, feel free to chat with me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${anton.variable} ${robotoFlex.variable}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

const NavBar = () => {
  return (
    <nav className=" fixed top-0 left-0 right-0 h-18 flex items-center justify-between px-5 lg:px-20 bg-bg ">
      <div className=" flex items-center gap-4">
        <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
        <p className=" font-anton text-text-highlight text-2xl hidden lg:block"> Agent Yong</p>
      </div>
      <Link href="https://yongxie.dev/" target="_blank" className=" hover:text-accent-green transition-colors"> 👋 Visit My Portfolio</Link>
    </nav>
  )
}
