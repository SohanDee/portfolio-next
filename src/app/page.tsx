"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";
import SlidingImages from "@/components/SlidingImages";
import WorkGallery from "@/components/Work";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0,0);
    }, 2000);
  }, []);
  return (
    <>
      <div>
        <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
        </AnimatePresence>
        <Hero />
        <About />
        <WorkGallery />
        <SlidingImages />
        <Contact />
      </div>
    </>
  );
}
