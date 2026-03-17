"use client"
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
// import Magnetic from "../Magnetic";

const Contact = () => {
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    // const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const x = useTransform(scrollYProgress, [0,1], [-100, 0]);
  return (
    <div ref={container} className="z-10 h-screen w-screen bg-[#1a1a1a] relative overflow-hidden">
        <div className="text-white font-light p-[15vw] md:p-[12vw]">
            <div className="flex flex-col items-center md:items-start text-7xl md:text-8xl mx-auto md:mx-0">
          <div className="flex flex-col md:flex-row items-center gap-5 justify-center md:justify-start text-center md:text-start">
            <div className="bg-[url('/profile.png')] bg-cover bg-center w-[20vw] h-[20vw] max-w-[100px] max-h-[100px] rounded-full"></div>
            <div>Let&#39;s work</div>
          </div>
          <div>Together</div>
          </div>
          <div className="my-[6vh] md:my-[10vh] flex flex-col justify-center relative">
            <motion.div style={{x}} className="text-sm md:text-lg w-1/2 max-w-[180px] aspect-square bg-black flex items-center justify-center rounded-full absolute start-1/3 md:start-1/2">
              Get in touch
            </motion.div>
            <hr className="my-8 w-full" />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm">
            <a
              href="mailto:sohandeemantha@gmail.com"
              className="border p-5 rounded-full cursor-pointer"
            >
              sohandeemantha@gmai.com
            </a>
            <a
              href="https://wa.me/94766397534"
              target="_blank"
              rel="noopener noreferrer"
              className="border p-5 rounded-full cursor-pointer"
            >
              +94 76 639 7534
            </a>
          </div>
        </div>
      <div className="absolute bottom-3 left-6">
        <p className="text-sm text-gray-500">Socials</p>
        <div className="flex gap-5 text-white my-3">
          <a href="https://www.linkedin.com/in/sohan-wijemanna-202615221/" target="_blank">LinkedIn</a>
          <a href="https://github.com/SohanDee" target="_blank">Github</a>
          <a href="https://www.fiverr.com/s/P2eX4zP" target="_blank">Fiverr</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
