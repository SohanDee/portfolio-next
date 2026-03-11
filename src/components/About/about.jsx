"use client";
import { useLayoutEffect, useRef } from "react";
import Title from "./title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export default function About() {
  const container = useRef(null);
  const paragraph = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const split = SplitText.create(paragraph.current, {
        type: "words",
      });

      const tl = gsap.timeline({ paused: true });

      tl.fromTo(
        split.words,
        { scaleY: 0, opacity: 0 },
        {
          scaleY: 1,
          opacity: 1,
          duration: 0.1,
          ease: "power1.in",
          stagger: 0.01,
        },
      );

      ScrollTrigger.create({
        trigger: container.current,
        start: "top 95%",
        onEnter: () => tl.play(),
        onLeaveBack: () => tl.reverse(),
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={container}
      className="flex flex-col md:flex-row m-[10vw] gap-[4vw] relative text-start items-baseline"
      data-scroll-section
    >
      <p
        ref={paragraph}
        className="text-[clamp(24px,2vw,52px)] font-light align-text-top leading-loose"
      >
        A passionate web developer and graphic designer blending creativity with
        technology to craft engaging experiences. I bring ideas to life through
        clean code and visuals.
      </p>
      <p
        className="align-text-top font-thin text-[clamp(12px,1vw,24px)]"
      >
        Focused on innovation, seamless user experiences, and bringing ideas to
        life with precision.
      </p>
      <Title />
    </div>
  );
}
