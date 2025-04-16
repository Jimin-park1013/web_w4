import Image from "next/image";
import MeImg from "@/../public/012.png";
import IGImg from "@/../public/IG.png";
import PortfolioImg from "@/../public/portfolio.png";
import bg4Img from "@/../public/bg4.jpg";
import bg3Img from "@/../public/bg3.jpg"
import aboutme from "@/../public/aboutme.jpg"
import Img from "@/../public/ID1.png"
import YZC01 from "@/../public/YZC01.png"
import schoolID from "@/../public/110701024.png"
import nccu from "@/../public/nccu.png"
import IDcardbg from "@/../public/IDcardbg.png"
import bg7 from "@/../public/bg7.jpg"



export default function Home() {
  return (
    <div className="w-full min-w-[320px] h-screen bg-gray-200 flex flex-col items-center justify-start overflow-y-auto">
  <div
    className="w-full bg-white flex flex-col md:flex-row px-11 py-8 gap-4 backdrop-blur-md border border-gray-300 rounded-2xl shadow-md overflow-auto"
    style={{
      backgroundImage: `url(${bg7.src})`,
      backgroundRepeat: 'repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* 左側圖片與文字區塊 */}
    <div className="flex flex-col items-center justify-start flex-[0.4] max-w-[300px] w-full gap-4">
      {/* 第一張圖 */}
      <div className="aspect-[3/4] w-full max-h-[450px] transition duration-300 transform hover:-translate-2 hover:shadow-2xl">
        <Image
          src={Img}
          alt="My Photo"
          className="object-contain w-full h-full rounded-2xl"
        />
      </div>

      {/* 第二張圖 */}
      <div className=" w-full max-h-[450px]">
        <Image
          src={schoolID}
          alt="School ID"
          className="object-contain w-full h-full rounded-2xl"
        />
      </div>

      {/* 說明文字 */}
      <div className="w-full px-2">
        <p className="text-left text-l font-black font-mono">
          This card grants access to lectures, deadlines, and existential dread—courtesy of NCCU.
        </p>
      </div>
    </div>

    {/* 右側資訊區塊（維持原樣） */}
    <div className="sm:col-span-2 flex-[0.6] p-6 flex flex-col gap-y-4 gap-x-6">
      {/* Logo 區塊 */}
      <div>
        <Image src={YZC01} alt="School Logo" className="object-cover" />
      </div>

      

      {/* 資訊雙欄 */}
      <div className="flex flex-col sm:flex-row w-full mt-6 gap-x-8">
        {/* 左欄 */}
        
        
        <div className="flex flex-col gap-y-4 w-full sm:w-1/2">
        <div className="rounded-lg p-2 transition duration-300 transform hover:-translate-2 hover:shadow-2xl">
            <p className="text-m font-bold font-mono text-red-700 uppercase">School</p>
            <p className="text-m font-bold text-gray-800 ">National Chengchi University (NCCU) </p>
          </div>
          <div className="rounded-lg p-2 transition duration-300 transform hover:-translate-2 hover:shadow-2xl">
            <p className="text-m font-bold font-mono text-red-700 uppercase">Name</p>
            <p className="text-m font-bold text-gray-800 ">陳怡臻, Yi Zhen Chen</p>
          </div>
          <div className="rounded-lg p-2 transition duration-300 transform hover:-translate-2 hover:shadow-2xl">
            <p className="text-m font-bold font-mono text-red-700 uppercase">Birth Date</p>
            <p className="text-m font-bold text-gray-800">2003.01.02</p>
          </div>
          <div className="rounded-lg p-2 transition duration-300 transform hover:-translate-2 hover:shadow-2xl">
            <p className="text-m font-bold font-mono text-red-700 uppercase">Skills</p>
            <p className="text-m font-bold text-gray-800">AI / PS / Blender / Figma / Web / InDesign</p>
          </div>
        </div>

        {/* 右欄 */}
        <div className="flex flex-col gap-y-4 w-full sm:w-1/2">
        <div className="rounded-lg p-2 transition duration-300 transform hover:-translate-2 hover:shadow-2xl">
            <p className="text-m font-bold font-mono text-red-700 uppercase">Major & Second Major</p>
            <p className="text-m font-bold text-gray-800 "> B.A. in Math Science + Program in Digital Content & Technologies(DCT) </p>
          </div>
          <div className="rounded-lg p-2 transition duration-300 transform hover:-translate-2 hover:shadow-2xl">
            <p className="text-m font-bold font-mono text-red-700 uppercase">MBTI</p>
            <p className="text-m font-bold text-gray-800">ENTP</p>
          </div>
          <div className="rounded-lg p-2 transition duration-300 transform hover:-translate-2 hover:shadow-2xl">
            <p className="text-m font-bold font-mono text-red-700 uppercase">Likes</p>
            <p className="text-m font-bold text-gray-800">Dance, Travel, Music, Dessert</p>
          </div>
          <div className="rounded-lg p-2 transition duration-300 transform hover:-translate-2 hover:shadow-2xl">
            <p className="text-m font-bold font-mono text-red-700 uppercase">Mantra</p>
            <p className="text-m font-bold text-gray-800">在墓園裡當肥料</p>
          </div>
        </div>
      </div>

      {/* Important Notes 標題 */}
      <div className=" rounded-lg p-2 transition duration-300 transform hover:-translate-2 hover:shadow-2xl">
      <p className="text-m font-bold font-mono text-red-700 uppercase text-center">My Amazing Journey </p>

      {/* 底部經歷 */}
      <div className="g-y-3">
        <p className="w-full text-l text-gray-800 text-center">​2022-2023 政大熱舞社第28屆嘻哈教學</p>
        <p className="w-full text-l text-gray-800 text-center">2022-2023 應用數學系 系學會幹部 美宣</p>
        <p className="w-full text-l text-gray-800 text-center">2022-2023 應用數學系 系羽 隊長</p>
        <p className="w-full text-l text-gray-800 text-center">2023 政大熱舞社CC combat vol.10總召</p>
        <p className="w-full text-l text-gray-800 text-center">2023 大嘻哈時代2 總決賽Gummy B 伴舞</p>
        <p className="w-full text-l text-gray-800 text-center">2024 TEDxNCCU 行設部 社員 參與年展及年會主視覺設計</p>
        <p className="w-full text-l text-gray-800 text-center">2024 參與美國打工度假 WAT</p>
      </div>
      </div>

      <p className="text-right font-black bottom-0 mb-y-1.5 text-gray-800">email : as65253211@gmail.com</p>
    </div>
  </div>
</div>

   
  );
}
