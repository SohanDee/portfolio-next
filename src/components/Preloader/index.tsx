import React, { useEffect, useState } from "react";
import { easeIn, motion } from "framer-motion";

const slideUp = {
  initial: {
    y: 0,
  },
  exit: {
    y: "-100vh",
    transition: { duration: 0.4, ease: easeIn, delay: 0.2 },
  },
};

const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 0.2, delay: 0.2 },
  },
};

const words = ["Hello", "Hola", "你好", "नमस्ते", "مرحبا", "হ্যালো", "Olá"];

const Preloader = () => {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({width: window.innerWidth, height: window.innerHeight});
  }, [])

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} 
  Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} 
  Q${dimension.width / 2} ${dimension.height } 0 ${dimension.height} L0 0`;

  const curve = {
    initial: {
        d: initialPath
    },
    exit: {
        d: targetPath,
        transition: { duration: 0.4, ease: easeIn, delay: 0.2 }
    }
  }

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="z-50 w-[100vw] h-[100vh] fixed top-0 left-0 bg-[#121212] flex items-center justify-center"
    >{
        dimension.height > 0 && <>
    
      <motion.p
        className="text-6xl text-white z-10"
        variants={opacity}
        initial="initial"
        animate="enter"
      >
        {words[index]}
      </motion.p>
      <svg className="absolute top-0 left-0 w-[100%] h-[120%] z-0">
        <motion.path variants={curve} initial="initial" exit="exit" className="fill-[#121212]" d={initialPath}></motion.path>
      </svg>
      </>
      }
    </motion.div>
  );
};

export default Preloader;
