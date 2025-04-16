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
    
    <div 
    className="w-full h-screen bg-white flex flex-col items-center px-6 py-8 overflow-hidden rounded-2xl"
    style={{
      backgroundImage: `url(${bg3Img.src})`,
      backgroundRepeat: 'repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* 標題區塊 */}
    <div className="w-full">
      <h1 className="text-3xl font-bold text-white">AI Painting</h1>
      <h3 className="text-white">My paintings formed by AI_leonardo</h3>
    </div>
  
    {/* 圖片容器區 */}
    <div className="w-full h-full overflow-auto px-1 pt-6 pb-3">
      <div className="w-full flex flex-col items-center gap-6">
  
        {/* 第一排：一大兩小 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full snap-y md:snap-x ">
          
          <div className="sm:col-span-2 aspect-[4/2] bg-gray-200 rounded-2xl relative"
            style={{
              backgroundImage: `url(${painting4.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            <div className="w-full h-[40px] backdrop-blur absolute bottom-0 flex items-center px-2 text-white">
              my portrait
            </div>
          </div>
  
          <div className="w-full min-h-full aspect-[4/2] bg-gray-200 rounded-2xl relative"
            style={{
              backgroundImage: `url(${painting2.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            <div className="w-full h-[40px] backdrop-blur absolute bottom-0 flex items-center px-2 text-white">
              my portrait
            </div>
          </div>
        </div>
  
        {/* 第二排：兩張圖 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <div className="aspect-[4/2] bg-gray-200 rounded-2xl relative"
            style={{
              backgroundImage: `url(${painting1.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            <div className="w-full h-[40px] backdrop-blur absolute bottom-0 flex items-center px-2 text-white">
              my portrait
            </div>
          </div>
  
          <div className="aspect-[4/2] bg-gray-200 rounded-2xl relative"
            style={{
              backgroundImage: `url(${painting3.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            <div className="w-full h-[40px] backdrop-blur absolute bottom-0 flex items-center px-2 text-white">
              my portrait
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </div>
  
      );
    }
    
  
 
