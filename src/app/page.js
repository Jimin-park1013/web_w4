import Image from "next/image";
import MeImg from "@/../public/012.png";
import IGImg from "@/../public/IG.png";
import PortfolioImg from "@/../public/portfolio.png";


export default function Home() {
  return (
   <div className="w-full h-screen bg-gray-200 flex justify-center items-center">

    <div className="w-[600px] h-[90vh] rounded-2xl bg-white flex 
      justify-start items-center flex-col p-[30px] pt-[80px] overflow-y-auto overflow-x-hidden" >
      <Image src={MeImg} alt="Me" className="w-[80px] h-[80px] rounded-full " />
      <a href="/home">
        
      </a>
      
      <h1 className="mt-2">Yi Zhen Chen</h1>
      <p className="max-w-[380px] text-ce">
        應數四雙數位內容 MBTI：ENTP 摩羯座 </p>

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
            <Image src={FBImg} alt="Me" className="w-[40px] h-[40px] rounded-full " /></div>
          
        </a>
        <a href="https://google.com" target="_blank">
          <div className=" bg-gray-300 w-[40px] h-[40px] rounded-full"></div>
        </a>
        <a href="https://google.com" target="_blank">
          <div className=" bg-gray-300 w-[40px] h-[40px] rounded-full"></div>
        </a>
      </div>

      {/* 頁面切換 */}
       <div className="w-full flex flex-col gap-2 "  > 

          <div className="w-full h-[84px] bg-gray-300 rounded-xl">學經歷</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類一</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類二</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類三</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類四</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類五</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類六</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類七</div>


         </div>








    </div>
    
   </div>
  );
}
