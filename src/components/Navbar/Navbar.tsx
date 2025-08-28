import Link from "next/link";
import React from "react";
import ReorderRoundedIcon from "@mui/icons-material/ReorderRounded";
import About from "@/app/about/page";

export const Navbar = () => {
  return (    
    <div className="flex z-50 text-white justify-between py-6 px-10 bg-transparent items-center fixed w-full">
      <div className="text-xl">
        <Link href="/">
          SOHAN DEE
        </Link>
      </div>
      <div className="flex gap-10">
        <div className="lg:hidden">
          <ReorderRoundedIcon />
        </div>
        <div className="hidden lg:flex gap-10">
          <Link href='/about'>ABOUT</Link>
          <Link href="">PROJECTS</Link>
          <Link href="">CONTACT</Link>
        </div>
      </div>
    </div>
  );
};
