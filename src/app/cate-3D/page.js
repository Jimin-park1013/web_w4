import Image from "next/image";
import MeImg from "@/../public/012.png";
import IGImg from "@/../public/IG.png";
import PortfolioImg from "@/../public/portfolio.png";
import bg6Img from "@/../public/bg6.jpg"
import ThreeD1 from '@/../public/3D1.jpg'
import ThreeD2 from '@/../public/3D2.png'
import ThreeD3 from '@/../public/3D3.png'
import ThreeD4 from '@/../public/3D4.png'
import ThreeD5 from '@/../public/3D5.png'
import ThreeD6 from '@/../public/3D6.png'


{/*外距 margin m 上下左右 trbl 上下xy 內距padding p */}
{/*<Image src={painting1}> */}

export default function Home() {
  return (
<div 
  className="w-full h-screen bg-white flex flex-col items-center px-6 py-8 overflow-hidden rounded-2xl"
  style={{
    backgroundImage: `url(${bg6Img.src})`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* 標題區塊 */}
  <div className="w-full">
    <h1 className="text-3xl font-bold text-white">3D Work</h1>
    <div className="flex flex-wrap items-center gap-4 mt-2">
    <h3 className="text-white">
      My 3D works made by Blender
    </h3>
    <a
      href="https://sarah0102.weebly.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 bg-gray-300/50 text-white text-sm font-semibold rounded-full shadow-md hover:bg-gray-400/70 hover:scale-105 transition-all duration-200"
    >
      3D portfolio online
    </a>
  </div>
  </div>

  {/* 圖片容器區 */}
  <div className="w-full h-full overflow-auto px-1 pt-6 pb-3 flex justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl">

      {/* 圖1 */}
      <div
        className="aspect-[4/2] bg-gray-200 rounded-2xl relative"
        style={{
          backgroundImage: `url(${ThreeD1.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="w-full h-[40px] backdrop-blur absolute bottom-0 flex items-center px-2 text-white">
          Death Angel
        </div>
      </div>

      {/* 圖2 */}
      <div
        className="aspect-[4/2] bg-gray-200 rounded-2xl relative"
        style={{
          backgroundImage: `url(${ThreeD6.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="w-full h-[40px] backdrop-blur absolute bottom-0 flex items-center px-2 text-white">
          Death Angel
        </div>
      </div>

      {/* 圖3 */}
      <div
        className="aspect-[4/2] bg-gray-200 rounded-2xl relative"
        style={{
          backgroundImage: `url(${ThreeD3.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="w-full h-[40px] backdrop-blur absolute bottom-0 flex items-center px-2 text-white">
        NCCU Moscot - Talon
        </div>
      </div>

      {/* 圖4 */}
      <div
        className="aspect-[4/2] bg-gray-200 rounded-2xl relative"
        style={{
          backgroundImage: `url(${ThreeD5.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="w-full h-[40px] backdrop-blur absolute bottom-0 flex items-center px-2 text-white">
        NCCU Moscot - Talon
        </div>
      </div>

      {/* 圖5 */}
      <div
        className="aspect-[4/2] bg-gray-200 rounded-2xl relative"
        style={{
          backgroundImage: `url(${ThreeD2.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="w-full h-[40px] backdrop-blur absolute bottom-0 flex items-center px-2 text-white">
          Bracer Phoenix
        </div>
      </div>

      {/* 圖6 */}
      <div
        className="aspect-[4/2] bg-gray-200 rounded-2xl relative"
        style={{
          backgroundImage: `url(${ThreeD4.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="w-full h-[40px] backdrop-blur absolute bottom-0 flex items-center px-2 text-white">
          Ballnoon Dog
        </div>
      </div>

    </div>
  </div>
</div>

      );
    }
    
  
 
