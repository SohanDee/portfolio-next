import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import Magnetic from "../Magnetic";

const Contact = () => {
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0,1], [-100, 0]);
  return (
    <div ref={container} className="z-0 h-[100vh] bg-[#1a1a1a] flex flex-col justify-between">
      <div className="text-white">
        <div className="relative text-8xl font-light py-30 px-60 flex flex-col">
          <div className="flex gap-5">
            <div className="bg-[url('/images/hero.png')] bg-cover bg-center w-[100px] h-[100px] inline-block rounded-full"></div>
            <div>Let&#39;s work</div>
          </div>
          <div>together</div>
          <div className="flex flex-col justify-center items-end">
            <Magnetic className="cursor-pointer absolute  h-[15vw] w-[15vw] m-12">
            <motion.div style={{x}} className="text-lg w-full h-full bg-black flex items-center justify-center rounded-full">
              Get in touch
            </motion.div>
            </Magnetic>
            <hr className="my-14 w-[100%]" />
          </div>
          <div className="flex gap-12 text-sm">
            <Magnetic className="">
            <a
              href="mailto:sohandeemantha@gmail.com"
              className="border-1 p-5 rounded-full cursor-pointer"
            >
              sohandeemantha@gmai.com
            </a>
            </Magnetic>
            <Magnetic className="">
            <a
              href="https://wa.me/94766397534"
              target="_blank"
              rel="noopener noreferrer"
              className="border-1 p-5 rounded-full cursor-pointer"
            >
              +94 76 639 7534
            </a>
            </Magnetic>
          </div>
        </div>
      </div>
      <div className="my-4 mx-6">
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
