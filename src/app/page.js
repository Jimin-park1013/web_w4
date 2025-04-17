"use client"
import Image from "next/image";
import MeImg from "@/../public/012.png";
import IGImg from "@/../public/IG.png";
import PortfolioImg from "@/../public/portfolio.png";
import fbImg from "@/../public/FB.png";
import aboutmeImg from "@/../public/aboutme.jpg"
import HeartImg from "@/../public/heart.png";
import bg10 from "@/image/bg10.jpg"

import BlurText from "../component/BlurText";

import { useState } from "react";  
export default function Home() {

  const [heart, setHeart] = useState(0);

const addHeart=function(){

  setHeart(heart+1);
}

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

  return (
   <div className="w-full h-screen bg-white flex flex-col justify-end items-center px-6 py-8 overflow-hidden rounded-2xl"
   style={{
    backgroundImage: `url(${bg10.src})`,
    backgroundRepeat: 'reapeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>


    <div className="cursor-pointer flex flex-col justify-center items-center overflow-auto p-x-10"
      onClick={addHeart}
    >
      <p className="text-white flex flex-col font-bold text-[25px] "> Hello! I'm Yi Zhen Chen, or you can call me Sarah! 
        </p>
        <p className="text-white flex flex-col mt-1.5  mb-2.5 ">
        ​I'm a senior at National Chengchi University, navigating both academia and the adventure of life—yes, 
        I’m taking an extra year. As an ENTP, I thrive on excitement and bold experiences. My ultimate dream? 
        To travel the world! Current progress... about 2% ?)
        </p>

        <BlurText
  text="Isn't this so cool?!"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>
    <Image src={HeartImg} alt="haert" className="w-[68px] h-[68px] rounded-full  " />
    </div>
    <div className="text-2xl text-white">{ heart }</div>

    </div>
    
 
  );
}
