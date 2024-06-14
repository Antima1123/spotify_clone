import Image from "next/image"
import { useState } from "react"
import {motion}  from 'framer-motion'
import { FaPlay } from "react-icons/fa";


const HomeCards = (
  {
    img_url,
    title,
    des
  }:{
    img_url: string,
    title: string,
    des: string
  }
) => {
  //playlist card
  const [play,setPlay] = useState(false)
  return (

      <motion.div className="flex flex-col px-2 pb-2 hover:bg-[#151515] w-[13rem] h-[18rem] font-[500] gap-[2px]" onHoverStart={()=>setPlay(true) } onHoverEnd={()=>setPlay(false)}>
       <div className="relative">
          <Image
              src={img_url}
              alt=""
              height={500}
              width={500}
              className="w-full h-[13rem] rounded-md object-cover"
            />
            {play && 
              <div 
                className="absolute bottom-2 right-2 w-12 h-12 bg-[#1db954] rounded-full flex justify-center items-center">
                <FaPlay color="black"/>
              </div>
            }
       </div>

       <div className="w-[12rem]">
        <p className="text-[16px]">{title}</p>
          <p className="text-[#535353] text-[14px]">
           {des}
          </p>
       </div>
           
    </motion.div>

  )
}

export default HomeCards