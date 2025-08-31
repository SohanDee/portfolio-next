import React from 'react'
import { motion, easeInOut } from "motion/react";

const Curve = () => {
    const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight/2} 100 0`;
    const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight/2} 100 0`;

    const pathAnimation = {
        initial: {
            d: initialPath
        },
        enter: {
            d: targetPath,
            transition: {duration: 0.5, ease: easeInOut}
        },
        exit: {
            d: initialPath,
            transition: {duration: 0.5, ease: easeInOut}
        }
    }
  return (
    <svg className='-z-10 absolute top-0 -left-[99px] width-[100px] h-[100%] fill-[#121212]'>
    <motion.path variants={pathAnimation} initial="initial" animate="enter" exit="exit"></motion.path>
    </svg>
  )
}

export default Curve