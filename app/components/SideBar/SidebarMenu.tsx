"use client"
import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"
import Image from "next/image"
import { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion"



const SidebarMenu = () => {
  const [home,setHome] = useState(true)
  const [search,setSearch] = useState(false)
  const [hvIc, setHvIc] = useState(false)
  const [srchIc,setSrchIc] = useState(false)


  const action1 = () =>{
    setHome(true)
    setSearch(false)
  }
  const action2 = () => {
    setSearch(true)
    setHome(false)
  }
  return (
    <div className=" bg-[#121212] flex flex-col gap-6 p-2 h-[8rem] rounded-md">
        <motion.div onHoverEnd={()=> setHvIc(false)} onHoverStart={()=> setHvIc(true)} className="flex-1 flex items-center group">
          <button 
          className=" justify-start flex gap-4 font-[600] bg-[#121212] items-center h-full w-full"
          onClick={action1}
          >
            {home
            ? <GoHomeFill color="white" size={24}/>
            :
              <GoHome color={hvIc? "white": "#535353"} size={24}/>}
              <div className={home? "text-white w-full flex justify-start":"text-[#535353] flex justify-start group-hover:text-white w-full"}>Home</div>
          </button>
        </motion.div>

      <motion.div onHoverStart={()=> setSrchIc(true)} onHoverEnd={()=> setSrchIc(false)} className="w-full h-full flex flex-1 group">
          <button 
            className="justify-start flex gap-4 font-[600] bg-[#121212] items-center h-full w-full"
            onClick={action2}
            >

                  {
                    search?
                    <div className="relative">
                      <FiSearch size={24} color="white"/>
                      <div className=" absolute w-[10px] h-[10px] bg-white rounded-full top-[6px] left-[6px]"/>
                    </div>
                    :
                    <FiSearch color={srchIc? "white" : "#535353" } size={24}/>
                  }
                  
                  <div className={search ? "w-full flex justify-start text-white font-[600]" :"w-full text-[#535353] group-hover:text-white flex justify-start font-[600]"}>
                    Search  
                  </div>    
              
          </button>
      </motion.div>
    </div>
  )
}

export default SidebarMenu