"use client";
import "./globals.css";
import Preloader from "@/components/Preloader/preloader";
import Navbar from "@/components/Navbar/navbar";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <html lang="en" className="overflow-x-hidden overscroll-none scrollbar-hide" data-scroll-container>
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
