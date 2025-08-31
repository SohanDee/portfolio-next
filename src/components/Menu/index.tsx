import React, { useState } from "react";
import Slider from "./Slider";
import { AnimatePresence } from "motion/react";

const MenuButton = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="fixed h-[100vh] w-[25vw] top-0 right-0 z-50">
      <div
        onClick={() => setIsActive(!isActive)}
        className={`z-10 flex flex-col items-center justify-center top-8 right-8 w-[80px] h-[80px] bg-amber-500 absolute rounded-full ${
          !isActive && "gap-1"
        }`}
      >
        <div
          className={`w-[40%] h-[2px] bg-black rounded-full transition duration-200 ${
            isActive && "rotate-45 translate-y-[1px]"
          }`}
        ></div>
        <div
          className={`w-[40%] h-[2px] bg-black rounded-full transition duration-200 ${
            isActive && "-rotate-45 -translate-y-[1px]"
          }`}
        ></div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Slider />}</AnimatePresence>
    </div>
  );
};

export default MenuButton;
