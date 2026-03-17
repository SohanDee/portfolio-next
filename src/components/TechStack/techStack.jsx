"use client";
import gsap from "gsap";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { technologies } from "./technologies";
import {motion, useScroll, useTransform } from "framer-motion";

export default function TechStack() {
  const container = useRef(null);
  const track = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const width = track.current.scrollWidth / 2;

      gsap.to(track.current, {
        x: "-=50%",
        duration: 20,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(
            (x) => parseFloat(x) % (track.current.scrollWidth / 2),
          ),
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <div ref={container} className="z-10 mt-[10vw] w-screen overflow-x-clip">
      <div ref={track} className="flex gap-20 w-max">
        {technologies.map((tech, i) => (
          <div key={"a" + i} className="relative w-[10vh] h-[10vh] shrink-0">
            <Image src={tech} alt="Tech" fill className="object-contain" />
          </div>
        ))}

        {technologies.map((tech, i) => (
          <div key={"b" + i} className="relative w-[10vh] h-[10vh] shrink-0">
            <Image src={tech} alt="Tech" fill className="object-contain" />
          </div>
        ))}
      </div>
      <motion.div
        style={{ height }}
        className="relative mt-5 overflow-visible"
      >
        <div className="z-5 absolute -left-[10%] w-[120%] h-[1500%] rounded-b-[50%] bg-white shadow-[0_60px_50px_rgba(0,0,0,0.75)]"></div>
      </motion.div>
    </div>
  );
}
