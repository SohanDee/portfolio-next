import Magnetic from "../Magnetic";

const About = () => {
  return (
    <div className="mt-36 mx-44 relative data-scroll-section">
      <div className="flex gap-20 items-start">
        <div className="text-3xl font-light align-text-top leading-[1.5] w-[70%]">
          A passionate web developer and graphic designer blending creativity
          with technology to craft engaging experiences. I bring ideas to life
          through clean code and visuals.
        </div>
        <p className="text-lg w-[30%] font-extralight pt-2">
          Focused on innovation, seamless user experiences, and bringing ideas
          to life with precision.
        </p>
      </div>
      <div className="absolute top-32 right-16" data-scroll
          data-scroll-speed={0.2}>
        <Magnetic className="h-[12vw] w-[12vw] bg-black rounded-full">
          <div className="h-[100%] w-[100%] text-white font-light text-xl flex justify-center items-center">
            About me
          </div>
        </Magnetic>
      </div>
      <hr className="border-t-1 border-gray-400 mt-40" />
    </div>
  );
};

export default About;
