import Image from "next/image";

export default function BgImage() {
  return (
    <div className="flex justify-center items-end pt-[5vh] max-[430px]:pl-[25vw] w-screen bg-linear-to-tr from-neutral-400 to-neutral-300 overflow-hidden ">
      <div className="flex justify-center  min-w-[630px] w-full h-screen">
        <Image
          src="/Hero.png"
          alt="Hero image"
          width={650}
          height={550}
          quality={100}
          className="object-contain object-bottom"
        />
      </div>
    </div>
  );
}
