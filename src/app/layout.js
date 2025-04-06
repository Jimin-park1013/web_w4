import Image from "next/image";
import MeImg from "@/../public/012.png";
import IGImg from "@/../public/IG.png";
import PortfolioImg from "@/../public/portfolio.png";
import fbImg from "@/../public/FB.png";
import aboutImg from "@/../public/yzc.png";
import my3dworkImg from "@/../public/3d.png";
import paintImg from "@/../public/paint.png";
import threadsImg from "@/../public/threads.jpg";
import posterImg from "@/../public/poster.png";
import bgImg from "@/../public/bg.jpg"
import bg2Img from "@/../public/bg2.jpg"

import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

 <div className="w-screen h-screen flex gap-5  bg-gray-200 p-8 ">

     <div className="min-w-[450px] w-[450px] h-full rounded-2xl flex 
      justify-start items-center flex-col p-[30px] pt-[80px] overflow-y-auto overflow-x-hidden" 
      style={{backgroundImage:`url(${bg2Img.src})`, backgroundSize:'cover', backgroundPosition:'top'}}>
       
        <Link href="/home">
        <Image src={MeImg} alt="Me" className="w-[80px] h-[80px] rounded-full " />
        </Link>

      <h1 className="mt-2 text-xl text-white font-serif" >Yi Zhen Chen</h1>
      <p className="max-w-[380px] text-ce text-sm text-white">
        應數四雙數位內容 110701024 MBTI：ENTP  </p>
        <p className="max-w-[380px]  text-white text-ce text-sm"> Born in 2003. All time fav singner is Justin Bieber.</p>
       
      {/* 社群連結 */}
      {/* 物件間距 */}
      <div className="flex gap-2 my-5">
        {/* _blank 是開新分頁 */}
        <a href="https://www.instagram.com/yzc.sarah__/?hl=zh-tw" target="_blank">
          <div className=" bg-gray-300 w-[40px] h-[40px] rounded-full">
            <Image src={IGImg} alt="Me" className="w-[40px] h-[40px] rounded-full " /></div>
        </a>
        <a href="https://sarah0102.weebly.com/" target="_blank">
          <div className=" bg-gray-300 w-[40px] h-[40px] rounded-full">
          <Image src={PortfolioImg} alt="Me" className="w-[40px] h-[40px] rounded-full " />
          </div>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100004087580088" target="_blank">
          <div className=" bg-gray-300 w-[40px] h-[40px] rounded-full">
          <Image src={fbImg} alt="Me" className="w-[40px] h-[40px] rounded-full"/></div>
       </a>
        <a href="https://www.threads.net/@yzc.sarah__" target="_blank">
          <div className=" bg-gray-300 w-[40px] h-[40px] rounded-full">
          <Image src={threadsImg} alt="Me" className="w-xl h-full rounded-full " /></div>

        </a>
        
       
      </div>

      {/* 頁面切換 */}
       <div className="w-full flex flex-col gap-2 "  > 
       
          <Link href="/about">
          <div className="w-full h-[84px] bg-gray-300 rounded-xl" 
          style={{backgroundImage:`url(${aboutImg.src})`, backgroundSize:'cover', backgroundPosition:'center'}} > 
            <p className="font-mono text-black p-1" ></p>
            
            </div>
          </Link>
         
          <Link href="/cate-web">
          <div className="w-full h-[84px] bg-gray-300 rounded-xl" 
          style={{backgroundImage:`url(${my3dworkImg.src})`, backgroundSize:'cover', backgroundPosition:'center'}}>
            <p className="font-mono text-black p-1" > </p>
            </div>
          </Link>

          <Link href="/cate-painting">
          <div className="w-full h-[84px] bg-gray-300  rounded-xl"
          style={{backgroundImage:`url(${paintImg.src})`, backgroundSize:'cover', backgroundPosition:'center'}}>

          </div>
          </Link>
          <Link href="/cate-poster">
          <div className="w-full h-[84px] bg-gray-300 rounded-xl"
          style={{backgroundImage:`url(${posterImg.src})`, backgroundSize:'cover', backgroundPosition:'center'}}>
            </div>
            </Link>
          


         </div>








    








 {/* 左邊欄位 */}
      </div>
      {children}
      </div>










      
      </body>
    </html>
  );
}
