import Image from "next/image";
import MeImg from "@/../public/012.png";
import IGImg from "@/../public/IG.png";
import PortfolioImg from "@/../public/portfolio.png";
import painting1 from "@/image/painting01.jpg"
import painting2 from "@/image/painting02.jpg"
import painting3 from "@/image/painting03.jpg"
import painting4 from "@/image/painting04.jpg"
import bg3Img from "@/../public/bg3.jpg"

{/*外距 margin m 上下左右 trbl 上下xy 內距padding p */}
{/*<Image src={painting1}> */}

export default function Home() {
  return (
   <div className="w-full h-full flex flex-col rounded-2xl justify-start  items-center py-8 px-6">
    <div className="flex flex-col w-full ">
<h1 className="text-2xl font-bold text-white">
  AI Painting
</h1>
<h3 className="text-white">
  My paintings formed by AI_leonardo
</h3>
</div>

<div className="flex flex-col w-full gap-2 mt-3">

  <div className="grid grid-cols-3 w-full h-[33vh]  gap-4 ">  
  <div className="col-span-2 bg-gray-200 rounded-2xl relative " 
       style={{backgroundImage:`url(${painting1.src})`, backgroundSize:'cover', backgroundPosition:'center'}}>
        
        <div className="w-full h-[40px]  backdrop-blur absolute bottom-0 ">
        <h3 className="font-light text-amber-50  justify-start  items-center p-[5px]">   my portrait </h3> 
        </div>


    </div>

    <div className="bg-gray-200 rounded-2xl relative"
     style={{backgroundImage:`url(${painting2.src})`, backgroundSize:'cover', backgroundPosition:'center'}}>

       <div className="w-full h-[40px]  backdrop-blur absolute bottom-0 ">
        <h3 className="font-light text-amber-50  justify-ce  items-center p-[5px]">   my portrait </h3> 
        </div>
    </div>
  </div>
{/*33(%) vh：viewhigh */}
 <div className="grid grid-cols-2 w-full h-[33vh] gap-4 mt-3 relative">  
    <div className="bg-gray-200 rounded-2xl"
    style={{backgroundImage:`url(${painting3.src})`, backgroundSize:'cover', backgroundPosition:'center'}}>
      <div className="w-full h-[40px]  backdrop-blur absolute bottom-0 ">
        <h3 className="font-light text-amber-50  justify-ce  items-center p-[5px]">   my portrait </h3> 
        </div>
    </div>
    <div className="bg-gray-200 rounded-2xl relative"
    style={{backgroundImage:`url(${painting4.src})`, backgroundSize:'cover', backgroundPosition:'center'}}>
      <div className="w-full h-[40px]  backdrop-blur absolute bottom-0 ">
        <h3 className="font-light text-amber-50  justify-ce  items-center p-[5px]">   my portrait </h3> 
        </div>
    </div>

    </div>
    </div>
    </div>
    
  
  );
} 
