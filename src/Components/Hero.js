import React from "react";
import HeroImg from "../Assets/Hero.svg";

const Hero = () => {
  return (
    <div className="bg-[#0071C5] flex justify-between pl-40 pt-10">
      <h1 className="m-auto text-white text-5xl font-bold">
        Optimize your workloads to its full potential with Intel.
      </h1>

      <img className="w-3/5 h-1/3 relative" src={HeroImg} />
    </div>
  );
};

export default Hero;
