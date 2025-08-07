import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { SessionProvider } from "./components/SessionProvider";
import UserButton from "./components/UserButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chat GPT",
  description: "My chat gpt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased px-2 md:px-5`}
        >
          <header className="bg-foreground text-white flex gap-3 px-2 sm:px-5 rounded shadow-lg">
            <div className="flex flex-grow">
              <Link href={"/"}>Main</Link>
              <Link href={"/about"}>About</Link>
            </div>
            <div><UserButton /></div>
          </header>
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
