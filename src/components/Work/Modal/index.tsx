import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, easeInOut } from "framer-motion";
import gsap from "gsap";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.3, ease: easeInOut },
  },
  close: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.3, ease: easeInOut },
  },
};

const Modal = ({
  modal,
  projects,
}: {
  modal: { active: boolean; index: number};
  projects: {
    title: string;
    src: string;
    description: string;
    color: string;
  }[];
}) => {
  const { active, index } = modal;
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!container.current) return;
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.1,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.1,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
    if (!container.current) return;
    const { clientX, clientY } = e;
    console.log(e);
    moveContainerX(clientX);
    moveContainerY(clientY);    
  };

  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={container}
      variants={scaleAnimation}
      initial="initial"
      animate={active ? "open" : "close"}
      className="h-[250px] w-[300px] fixed top-200 left-0 overflow-hidden pointer-events-none"
    >
      <div
        className="h-[100%] w-[100%] absolute"
        style={{
          top: index! * -100 + "%",
          transition: "top 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={`modal_${index}`}
            className="h-[100%] flex items-center justify-center relative"
            style={{ backgroundColor: project.color }}
          >
            <Image
              src={project.src}
              alt={project.title}
              width={250}
              height={0}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Modal;
