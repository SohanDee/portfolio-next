import React, { useLayoutEffect, useRef, useState } from "react";
import Slider from "./Slider";
import { AnimatePresence } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MenuButton = () => {
  const [isActive, setIsActive] = useState(false);
  const burgerMenu = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!burgerMenu.current) return;
    gsap.set(burgerMenu.current, { scale: 0 });
    gsap.to(burgerMenu.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(burgerMenu.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(burgerMenu.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          });
        },
      },
    });
  }, []);
  return (
    <div className="fixed h-[100vh] w-[25vw] top-0 right-0 z-40 ">
      <div
        ref={burgerMenu}
        onClick={() => setIsActive(!isActive)}
        className={`z-10 flex flex-col items-center justify-center top-8 right-8 w-[80px] h-[80px] bg-amber-500 absolute rounded-full cursor-pointer ${
          !isActive && "gap-1"
        }`}
      >
        <div
          className={`w-[40%] h-[2px] bg-black rounded-full transition duration-200 ${
            isActive && "rotate-45 translate-y-[1px]"
          }`}
        ></div>
        <div
          className={`w-[40%] h-[2px] bg-black rounded-full transition duration-200 ${
            isActive && "-rotate-45 -translate-y-[1px]"
          }`}
        ></div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Slider />}</AnimatePresence>
    </div>
  );
};

export default MenuButton;
