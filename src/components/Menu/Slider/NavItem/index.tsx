import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { slide } from "../../anim";


const NavItem = ({ title, href, index }: { title: string; href: string, index: number }) => {
  return (
    <motion.div custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
    <Link className="block text-5xl my-6" href={href}>
      {title}
    </Link>
    </motion.div>
  );
};

export default NavItem;
