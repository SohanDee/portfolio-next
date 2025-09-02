import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { slide } from "../../anim";
import Magnetic from "@/components/Magnetic";


const NavItem = ({ title, href, index }: { title: string; href: string, index: number }) => {
  return (
    <Magnetic className="">
    <motion.div custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
    <Link className="block text-5xl my-10" href={href}>
      {title}
    </Link>
    </motion.div>
    </Magnetic>
  );
};

export default NavItem;
