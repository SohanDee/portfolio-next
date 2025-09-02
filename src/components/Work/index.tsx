"use client"
import React, { useState } from "react";
import WorkGalleryItem from "./WorkGalleryItem";
import Modal from "./Modal";

const projects = [
  {
    title: "Portfolio",
    src: "/images/banner.jpg",
    description: "Design and Development",
    color: "#444234"
  },
  {
    title: "Portfolio",
    src: "/images/hero.png",
    description: "Design and Development",
    color: "#aaa583"
  },
  {
    title: "Portfolio",
    src: "/images/banner.jpg",
    description: "Design and Development",
    color: "#22211a"
  },
];

const WorkGallery = () => {
  const [modal, setModal] = useState<{ active: boolean; index: number}>({
  active: false,
  index: 0,
});
  return (
    <div className="my-30 mx-44 relative">
      <div>
      {projects.map((project, index) => (
        <WorkGalleryItem
          key={index}
          index={index}
          title={project.title}
          desc={project.description}
          setModal = {setModal}
        />
      ))}
      </div>
      <Modal modal={modal} projects={projects}/>
    </div>
  );
};

export default WorkGallery;
