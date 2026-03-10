import About from "@/components/About/about";
import Hero from "@/components/Hero/hero";
import Projects from "@/components/Projects/projects";

export default function Home() {
  return <div className="w-full">
    <Hero />
    <About />
    <Projects />
  </div>;
}
