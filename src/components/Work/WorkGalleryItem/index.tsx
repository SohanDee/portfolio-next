import React from "react";

const WorkGalleryItem = ({
  index,
  title,
  desc,
  setModal,
}: {
  index: number;
  title: string;
  desc: string;
  setModal: React.Dispatch<
    React.SetStateAction<{ active: boolean; index: number}>
  >;
}) => {
  return (
    <div
      className="group pt-20 px-10 hover:text-gray-500 cursor-pointer"
      onMouseEnter={() => setModal({ active: true, index: index })}
      onMouseLeave={() => setModal({ active: false, index: index })}
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
