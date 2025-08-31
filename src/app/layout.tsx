"use client";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import MenuButton from "@/components/Menu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overscroll-none">
          <Navbar />
          <MenuButton />
          {children}
      </body>
    </html>
  );
}
