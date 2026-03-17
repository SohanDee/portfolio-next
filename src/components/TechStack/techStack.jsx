"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

const technologies = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tomcat/tomcat-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg",
];

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

  return (
    <div ref={container} className="my-[10vw] w-screen overflow-hidden">
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
    </div>
  );
}
