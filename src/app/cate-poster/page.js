import Image from "next/image";
import MeImg from "@/../public/012.png";
import IGImg from "@/../public/IG.png";
import PortfolioImg from "@/../public/portfolio.png";
import painting1 from "@/image/painting01.jpg";
import poster1 from "@/../public/poster1.png";
import poster2 from "@/../public/poster2.png";
import poster3 from "@/../public/poster3.jpg";
import poster4 from "@/../public/poster4.jpg";
import poster5 from "@/../public/poster5.png";
import bg5Img from "@/../public/bg5.jpg"

{/*外距 margin m 上下左右 trbl 上下xy 內距padding p */}
{/*<Image src={painting1}> */}

export default function Home() {
  return (
    <div
    className="w-full h-screen bg-white flex flex-col items-center px-6 py-8 overflow-auto md:overflow-hidden rounded-2xl"
    style={{
      backgroundImage: `url(${bg5Img.src})`,
      backgroundRepeat: 'repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* 標題區 */}
    <div className="w-full">
      <h1 className="text-3xl font-bold">Poster</h1>
      <h3>My Posters created by PS or Illustrator</h3>
    </div>
  
    {/* 圖集區塊 */}
    <div className="w-full h-full flex flex-col items-center py-4 px-3 overflow-auto md:overflow-visible">
      <div className="h-full flex flex-col md:flex-row gap-4 scroll-smooth snap-x md:snap-x items-start overflow-x-auto md:overflow-x-auto w-full">
        <img src="poster1.png" className="h-auto max-h-[70vh] w-auto flex-shrink-0 rounded object-contain" />
        <img src="poster6.png" className="h-auto max-h-[70vh] w-auto flex-shrink-0 rounded object-contain" />
        <img src="poster2.png" className="h-auto max-h-[70vh] w-auto flex-shrink-0 rounded object-contain" />
        <img src="poster12.png" className="h-auto max-h-[70vh] w-auto flex-shrink-0 rounded object-contain" />
        <img src="poster13.png" className="h-auto max-h-[70vh] w-auto flex-shrink-0 rounded object-contain" />
        <img src="poster16.png" className="h-auto max-h-[70vh] w-auto flex-shrink-0 rounded object-contain" />
        <img src="poster3.jpg" className="h-auto max-h-[70vh] w-auto flex-shrink-0 rounded object-contain" />
        <img src="poster14.png" className="h-auto max-h-[70vh] w-auto flex-shrink-0 rounded object-contain" />
        <img src="poster4.jpg" className="h-auto max-h-[70vh] w-auto flex-shrink-0 rounded object-contain" />
        <img src="poster11.png" className="h-auto max-h-[70vh] w-auto flex-shrink-0 rounded object-contain" />
        <img src="poster8.png" className="h-auto max-h-[70vh] w-auto flex-shrink-0 rounded object-contain" />
        <img src="poster9.png" className="h-auto max-h-[70vh] w-auto flex-shrink-0 rounded object-contain" />
        <img src="poster5.png" className="h-auto max-h-[70vh] w-auto flex-shrink-0 rounded object-contain" />
        <img src="poster10.png" className="h-auto max-h-[70vh] w-auto flex-shrink-0 rounded object-contain" />
      </div>
    </div>
  </div>
  
  
  );
} 
