"use client"
import { FaGripLinesVertical } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import {motion} from 'framer-motion';
import { useState } from "react";
import Sidebarcard from "./Sidebarcard";

const  SidebarLibrary = () => {
  const [lib,setLib] = useState(false)
  const [plus,setPlus] = useState(false)
  const [arrow,setArrow] = useState(false)

  const libcard = [
    {
      title: "Create your first playlist",
      des: "it's easy, we'ill help you" ,
      btn_name: "Create Playlist"
    },
    {
      title: "Lets find some podcast to follow",
      des: "we'll keep you updated on new episodes" ,
      btn_name: "Browse Podcast"
    }
  ] 
  return (
    <div className="flex flex-col bg-[#121212] text-white p-2 h-full w-full relative gap-6 ">

      <div className="flex justify-between w-full h-[2rem]">
          {/* first sec  */}
        <motion.div 
        className="flex items-center gap-3 hover:text-neutral-100  text-[#535353] font-[600]"
        onHoverStart={()=>setLib(true)}
        onHoverEnd={()=>setLib(false)}
        >
          {lib &&
            <div className="absolute z-10 -top-5  bg-[#535353] px-[6px] py-[4px] rounded-sm text-neutral-100 font-[500] text-[13px] ">Collapse Your Library</div>
          }
            <FaGripLinesVertical  size={22}/>
            <div >Your Library</div>
        </motion.div>

        {/* Second sec  */}
        <div className="flex items-center gap-4 font-[600]">
            
            <motion.div 
            className=" hover:text-white text-[#535353] p-2 hover:bg-[#1e1e1e] rounded-full "
            onHoverStart={()=>setPlus(true)}
            onHoverEnd={()=>setPlus(false)}
            >
              {plus &&
              <div className="absolute z-10 -top-5 right-0  bg-[#535353] px-[6px] py-[4px] rounded-sm text-neutral-100 font-[500] text-[13px]">Create Playlist or Folder</div>
              }
              <FaPlus size={18}/>
            </motion.div>

            <motion.div 
            className=" hover:text-white text-[#535353]  p-2 rounded-full hover:bg-[#1e1e1e]"
            onHoverStart={()=>setArrow(true)}
            onHoverEnd={()=> setArrow(false)}
            >
              {arrow &&
              <div className="absolute z-10 -top-5 right-0 bg-[#535353] px-[6px] py-[4px] rounded-sm text-neutral-100 font-[500] text-[13px]">Show More</div>
              }
              <FaArrowRight size={18}/>
            </motion.div>
        </div>

      </div>
      <div className=" flex flex-col gap-6">
        {libcard.map((card)=>(
            <Sidebarcard
            title={card.title}
            des={card.des}
            btn_name={card.btn_name}
            />
        ))}
      </div>
      
        
    </div>
  )
}

export default SidebarLibrary