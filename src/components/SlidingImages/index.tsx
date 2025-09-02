"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const slider1: {
  src: string;
  color: string;
}[] = [
  {
    src: "/images/designs/1.jpg",
    color: "#C3C7CA",
  },
  {
    src: "/images/designs/2.jpg",
    color: "#E2E3E5",
  },
  {
    src: "/images/designs/3.jpg",
    color: "#F0F3F4",
  },
  {
    src: "/images/designs/4.jpg",
    color: "#D5D6D9",
  },
  // {
  //   src: "/images/banner.jpg",
  //   color: "#E6E4D8",
  // },
];
const slider2: {
  src: string;
  color: string;
}[] = [
  {
    src: "/images/designs/5.jpg",
    color: "#B3B6BB",
  },
  {
    src: "/images/designs/6.jpg",
    color: "#E2E3E5",
  },
  {
    src: "/images/designs/7.jpg",
    color: "#F0F3F4",
  },
  {
    src: "/images/designs/8.jpg",
    color: "#E2E3E5",
  },
  // {
  //   src: "/images/banner.jpg",
  //   color: "#DCDCDC",
  // },
];

const SlidingImages = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <div
      
      className="mt-40 overflow-x-clip"
    >
      <div ref={container} className="flex flex-col gap-10">
        <motion.div
          style={{ x: x1 }}
          className="flex gap-10 relative w-[120vw] -left-[10vw]"
        >
          {slider1.map((project, index) => (
            <div
              className="w-[25%] aspect-[4/3] flex items-center justify-center"
              key={`sl1_${index}`}
              style={{ backgroundColor: project.color }}
            >
              <div className="w-[80%] h-[80%] relative">
                <Image
                  src={project.src}
                  fill={true}
                  objectFit="cover"
                  alt="image"
                ></Image>
              </div>
            </div>
          ))}
        </motion.div>
        <motion.div
          style={{ x: x2 }}
          className="flex gap-10 relative w-[120vw] -left-[10vw]"
        >
          {slider2.map((project, index) => (
            <div
              className="w-[25%] aspect-[4/3] flex items-center justify-center"
              key={`sl1_${index}`}
              style={{ backgroundColor: project.color }}
            >
              <div className="w-[80%] h-[80%] relative">
                <Image
                  src={project.src}
                  fill={true}
                  objectFit="cover"
                  alt="image"
                ></Image>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <motion.div
        style={{ height }}
        className="relative mt-5 overflow-visible"
      >
        <div className="z-5 absolute -left-[10%] w-[120%] h-[1550%] rounded-b-[50%] bg-white shadow-[0_60px_50px_rgba(0,0,0,0.75)]"></div>
      </motion.div>
    </div>
  );
};

export default SlidingImages;
