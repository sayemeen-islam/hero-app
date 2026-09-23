import React from "react";
import bannerImg from "@/assets/hero.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className=" bg-base-200 flex flex-col items-center space-y-4 ">
      <div className="max-w-4xl text-center mt-20 mb-10">
        <h1 className="text-5xl font-bold">
          We Build <br /><span className="text-[#9F62F2]">Productive</span> Apps
        </h1>
        <p className="py-6 ">
        At HERO APP , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br /> Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>
     <div className="flex gap-2 justify-center">   <button className="btn btn-outline">Google Play</button>
        <button className="btn btn-outline">App Store</button></div>
      </div>
      <Image
        src={bannerImg}
        alt=" Banner Image"
        width={650}
        className="mt-auto"
      ></Image>
    </div>
  );
};

export default Banner;
