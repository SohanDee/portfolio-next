"use client";
import gsap from "gsap";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

export default function ProjectCard({project}) {
  const image = useRef(null);
  const tl = useRef(null);

  useLayoutEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current.fromTo(
      image.current,
      { yPercent: 0 },
      { yPercent: -1, duration: 0.4, ease: "power2.out" },
    );
  }, []);

  const handleMouseEnter = () => {
    tl.current.play();
  };

  const handleMouseLeave = () => {
    tl.current.reverse();
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-2/3 shadow-xl cursor-pointer overflow-hidden"
    >
      <div
        ref={image}
        className="absolute inset-0 h-[105%] will-change-transform"
      >
        <Image
          src={project.image}
          alt="project"
          fill
          className="object-cover pointer-events-none"
        />
      </div>
      <div className="absolute bg-linear-to-t from-black to-transparent w-full h-full"></div>
      <div className="absolute font-extralight text-white mx-10 mb-10 bottom-0">
        <div className="text-[clamp(24px,2vw,52px)]">{project.name}</div>
        <div className="text-[clamp(12px,1vw,24px)]">{project.desc}</div>
      </div>
    </div>
  );
}
