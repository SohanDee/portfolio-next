"use client";
import "./globals.css";
import Preloader from "@/components/Preloader/preloader";
import Navbar from "@/components/Navbar/navbar";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <html lang="en" className="overflow-x-hidden overscroll-none scrollbar-hide">
      <body>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
