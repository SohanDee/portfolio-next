import React from "react";
import { motion } from "motion/react";
import { menuSlide } from "../anim";
import NavItem from "./NavItem";
import Curve from "./Curve";

const navItems = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About",
    href: "/about",
  },
  {
    id: 3,
    title: "Work",
    href: "/projects",
  },
  {
    id: 4,
    title: "Contact",
    href: "/contact",
  }
];

const Slider = () => {
  return (
    <motion.div
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
      className="absolute z-0 bg-[#121212] h-[100%] w-[100%] flex flex-col justify-center gap-10 px-12 text-white"
    >
      <div className="text-[#555555]">
        <h1 className="font-light text-sm mb-2 ">Navigation</h1>
        <hr />
      </div>
      <div>
        {navItems.map((item) => (
          <NavItem key={item.id} title={item.title} href={item.href} index={item.id}/>
        ))}
      </div>
      <Curve />
    </motion.div>
  );
};

export default Slider;
