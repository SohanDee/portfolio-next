"use client";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import MenuButton from "@/components/Menu";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <html lang="en">
      <body className="overscroll-none" data-scroll-conta>
          <Navbar />
          <MenuButton />
          {children}
      </body>
    </html>
  );
}
