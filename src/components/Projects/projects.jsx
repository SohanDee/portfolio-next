"use client";
import { useLayoutEffect, useRef } from "react";
import ProjectCard from "./project-card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    name: "Eatzy",
    image: "/projects/eatzy.png",
    desc: "Food ordering and delivery system",
  },
  {
    name: "Portfolio",
    image: "/projects/portfolio.png",
    desc: "My portfolio website",
  },
  {
    name: "See More",
    image: "/wallpaper.jpeg",
    desc: "Click to see more projects.",
  },
];

export default function Projects() {
  const container = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({paused: true});

      tl.fromTo(
        ".project-card",
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power1.inOut",
          stagger: 0.15,
        },
      );

      ScrollTrigger.create({
        trigger: container.current,
        start: "top 90%",
        onEnter: () => tl.play(),
        onLeaveBack: () => tl.reverse(),
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={container}
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mx-[10vw] my-[10vw] gap-[4vw]"
    >
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
