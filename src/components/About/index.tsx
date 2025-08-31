const About = () => {
  return (
    <div className="mt-36 mx-44">
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
      <div className="flex justify-end mx-15 top-0">
        <p
          className="h-[12vw] w-[12vw] rounded-full bg-black text-white font-light text-xl flex justify-center items-center"
        >
          About me
        </p>
      </div>
      <hr className="border-t-1 border-gray-400"/>
    </div>
  );
};

export default About;
