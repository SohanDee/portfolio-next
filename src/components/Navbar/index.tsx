import Link from "next/link";
import React from "react";
import ReorderRoundedIcon from "@mui/icons-material/ReorderRounded";
import Magnetic from "../Magnetic";

export const Navbar = () => {
  return (
    <div className="flex z-50 text-white font-light text-lg justify-between pt-8 px-10 bg-transparent items-center absolute w-full">
      <div className="text-center">
        <Magnetic className="">
        <Link className="flex items-center gap-1" href="/">
          <span className="text-2xl font-extralight">&copy;</span>Sohan Dee
        </Link>
        </Magnetic>
      </div>
      <div className="flex gap-10">
        <div className="lg:hidden">
          <ReorderRoundedIcon />
        </div>
        <div className="hidden lg:flex gap-10">
          <Magnetic className=""><Link href="/about">About</Link></Magnetic>
          <Magnetic className=""><Link href="/projects">Projects</Link></Magnetic>
          <Magnetic className=""><Link href="/contact">Contact</Link></Magnetic>
        </div>
      </div>
    </div>
  );
};
