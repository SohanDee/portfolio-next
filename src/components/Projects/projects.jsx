"use client"
import ProjectCard from "./project-card";

const imageUrls = [
    "/projects/eatzy.png",
    "/projects/portfolio.png",
    "/Hero.png",
]

export default function Projects() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mx-[10vw] my-[15vw] gap-[4vw]">
        {imageUrls.map((url, index) => <ProjectCard imageUrl={url} key={index}/>)}
    </div>
  );
}
