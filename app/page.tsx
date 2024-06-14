import Image from "next/image";
import Sidebar from "./components/SideBar/Sidebar";
import HomeMain from "./components/HomeSpotify/HomeMain";

export default function Home() {
  return (
   <div className=" w-full h-full flex p-2 gap-2 bg-[#000000]">
    {/* sideBar here */}
    <div className=" sticky">
      <Sidebar/>
    </div>
    {/* home content here */}
    <div className=" flex flex-col h-full w-full">
      <HomeMain/>
    </div>

   </div>
  );
}
