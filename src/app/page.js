import About from "@/components/About/about";
import Contact from "@/components/Contact/contact";
import Hero from "@/components/Hero/hero";
import Projects from "@/components/Projects/projects";
import TechStack from "@/components/TechStack/techStack";

export default function Home() {
  return <div className="w-full">
    <Hero />
    <About />
    <Projects />
    <TechStack />
    <Contact />
  </div>;
}
