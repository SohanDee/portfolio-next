"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPrecent = 0;
  const direction = useRef(1);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.2,
        onUpdate: (e) => (direction.current = e.direction * -1),
      },
      x: "-=300px",
    });
  }, []);

  const animation = () => {
    if (xPrecent <= -100) {
      xPrecent = 0;
    }
    if (xPrecent > 0) {
      xPrecent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPrecent });
    gsap.set(secondText.current, { xPercent: xPrecent });
    xPrecent += 0.1 * direction.current;
    requestAnimationFrame(animation);
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-[url(/images/hero.png)] bg-center bg-cover top-0 overflow-hidden relative">
      <div
        className="absolute whitespace-nowrap"
        style={{ top: "calc(100% - 18rem)" }}
        ref={slider}
      >
        <p
          ref={firstText}
          className="text-[11rem] lg:text-[13rem] inline-block text-white"
        >
          Sohan Deemantha -
        </p>
        <p
          ref={secondText}
          className="text-[11rem] lg:text-[13rem] text-white inline-block"
        >
          Sohan Deemantha -
        </p>
      </div>
    </div>
  );
};

export default Hero;
