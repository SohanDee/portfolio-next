"use client";
import ProjectCard from "./project-card";

const projects = [
  {name: "Eatzy", image: "/projects/eatzy.png", desc: "Food ordering and delivery system"},
  {name: "Portfolio", image: "/projects/portfolio.png", desc: "My portfolio website"},
  {name: "See More", image: "/wallpaper.jpeg", desc: "Click to see more projects."},
];

export default function Projects() {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mx-[10vw] my-[15vw] gap-[4vw]">
      {projects.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </div>
  );
}
