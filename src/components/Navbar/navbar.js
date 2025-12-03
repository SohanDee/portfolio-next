import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function Navbar() {
  const burgerMenu = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({ paused: true });

      tl.fromTo(
        burgerMenu.current,
        { scale: 0 },
        { scale: 1, duration: 0.15, ease: "power1.out" }
      );

      ScrollTrigger.create({
        trigger: document.documentElement,
        start: window.innerHeight/3,
        onEnter: () => tl.play(),
        onLeaveBack: () => tl.reverse(),
      });
  }, []);

  return (
    <div className="flex justify-between text-xl font-main-light mx-4 md:mx-8 py-4">
      <div>Sohan Dee</div>
      <div className="md:flex hidden gap-16 lg:gap-24">
        <div>About</div>
        <div>Projects</div>
        <div>Contact</div>
      </div>
      <div className="md:hidden">Menu</div>
      <div
        ref={burgerMenu}
        className="bg-black h-16 w-16 md:h-20 md:w-20 rounded-full fixed top-4 right-4"
      >
        Menu
      </div>
    </div>
  );
}
