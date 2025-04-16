"use client"
import Image from "next/image";
import MeImg from "@/../public/012.png";
import IGImg from "@/../public/IG.png";
import PortfolioImg from "@/../public/portfolio.png";
import fbImg from "@/../public/FB.png";
import aboutmeImg from "@/../public/aboutme.jpg"
import HeartImg from "@/../public/heart.png";
import { useState } from "react";  
export default function Home() {

  const [heart, setHeart] = useState(0);

const addHeart=function(){

  setHeart(heart+1);
}


  return (
   <div className="w-full h-screen bg-white flex flex-col justify-center items-center px-6 py-8 overflow-hidden rounded-2xl">


    <div className="cursor-pointer flex flex-col justify-center items-center"
      onClick={addHeart}
    >
    <Image src={HeartImg} alt="haert" className="w-[68px] h-[68px] rounded-full " />
    </div>
    <div className="text-2xl">{ heart }</div>

    </div>
    
 
  );
}
