import Image from "next/image";

const handleMouseOver = (e) => {
    console.log(e.target);
}

export default function ProjectCard({imageUrl}){
    return (
        <div
        onMouseOver = {(e) => handleMouseOver(e)}
         className="relative w-full aspect-2/3 shadow-xl cursor-pointer border-2 border-amber-300">
            <Image src={imageUrl} alt="project" fill={true} className="object-cover pointer-events-none"/>
        </div>
    )
}