import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Slider from "./Slider";
import { AnimatePresence } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "../Magnetic";
import {motion} from 'framer-motion'

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
    <div className="fixed h-full w-fulltop-0 right-0 z-40">
        <Magnetic
          className="absolute top-8 right-8 z-40"
        >
          <div
            ref={burgerMenu}
            onClick={() => setIsActive(!isActive)}
            className={`flex flex-col items-center justify-center w-[80px] h-[80px] bg-amber-500 rounded-full cursor-pointer ${
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
        </Magnetic>
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsActive(false)}
            className="fixed inset-0 bg-black"
          ></motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">{isActive && <Slider />}</AnimatePresence>
    </div>
  );
};

export default MenuButton;
