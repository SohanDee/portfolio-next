import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";

export default function Navbar() {
  const burgerMenu = useRef(null);
  const [isActive, setIsActive] = useState(false);

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
      start: window.innerHeight / 3,
      onEnter: () => tl.play(),
      onLeaveBack: () => tl.reverse(),
    });
  }, []);

  return (
    <div className="z-50 flex justify-between text-xl font-main-light px-8 md:px-12 py-8 bg-transparent w-full absolute">
      <div className="cursor-pointer">Sohan Dee</div>
      <div className="md:flex hidden gap-16 lg:gap-24">
        <Link href="/about">
            About
        </Link>  
        <div className="cursor-pointer">Projects</div>
        <div className="cursor-pointer">Contact</div>
      </div>
      <div className="md:hidden">Menu</div>
      <div
        ref={burgerMenu}
        onClick={() => setIsActive(!isActive)}
        className={`flex flex-col items-center justify-center bg-black h-16 w-16 md:h-20 md:w-20 rounded-full fixed top-4 right-4 
        ${!isActive && "gap-1"} cursor-pointer`}
      >
        <div
          className={`w-[40%] h-0.5 bg-white rounded-full transition duration-200 ${
            isActive && "rotate-45 translate-y-px"
          }`}
        ></div>
        <div
          className={`w-[40%] h-0.5 bg-white rounded-full transition duration-200 ${
            isActive && "-rotate-45 -translate-y-px"
          }`}
        ></div>
      </div>
    </div>
  );
}
