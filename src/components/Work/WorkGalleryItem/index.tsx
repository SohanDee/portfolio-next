import React, { useEffect, useRef } from "react";

type ModalType = { active: boolean; index: number };

declare global {
  interface Window {
    mouseX: number;
    mouseY: number;
  }
}

const WorkGalleryItem = ({
  index,
  title,
  desc,
  setModal,
}: {
  index: number;
  title: string;
  desc: string;
  setModal: React.Dispatch<React.SetStateAction<ModalType>>;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkHover = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = window.mouseX ?? -1;
      const y = window.mouseY ?? -1;

      if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
        setModal({ active: true, index });
      } else {
        setModal((prev) => (prev.index === index ? { active: false, index } : prev));
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      window.mouseX = e.clientX;
      window.mouseY = e.clientY;
      checkHover();
    };

    const handleScroll = () => {
      checkHover();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [index, setModal]);

  return (
    <div
      ref={ref}
      className="group pt-20 px-10 hover:text-gray-500 cursor-pointer"
      data-scroll-speed={0.1}
    >
      <div className="flex justify-between items-center pb-20">
        <p className="text-6xl group-hover:-translate-x-2 transition-transform duration-200">
          {title}
        </p>
        <p className="group-hover:translate-x-2 transition-transform duration-200">
          {desc}
        </p>
      </div>
      <hr className="border-t-1 border-gray-400" />
    </div>
  );
};

export default WorkGalleryItem;
