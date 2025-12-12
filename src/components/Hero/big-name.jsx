"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useCallback } from "react";

export default function BigName() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  const xPercent = useRef(0);
  const direction = useRef(1);

  const animation = useCallback(() => {
    if (xPercent.current <= -100) xPercent.current = 0;
    if (xPercent.current > 0) xPercent.current = -100;

    gsap.set(firstText.current, { xPercent: xPercent.current });
    gsap.set(secondText.current, { xPercent: xPercent.current });

    xPercent.current += 0.1 * direction.current;
    requestAnimationFrame(animation);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    requestAnimationFrame(animation);

    const tween = gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.2,
        onUpdate: (e) => (direction.current = e.direction * -1),
      },
      x: "-=300px",
    });

    return () => {
      tween.kill();
      ScrollTrigger.killAll();
    };
  }, [animation]);

  return (
    <div className="z-50 w-screen">
      <div
        ref={slider}
        className="absolute whitespace-nowrap w-screen overflow-hidden font-main-light top-[calc(100%-20rem)]"
      >
        <p
          ref={firstText}
          className="text-[12rem] lg:text-[14rem] inline-block text-white"
        >
          Sohan Deemantha -
        </p>

        <p
          ref={secondText}
          className="text-[12rem] lg:text-[14rem] inline-block text-white"
        >
          Sohan Deemantha -
        </p>
      </div>
    </div>
  );
}
