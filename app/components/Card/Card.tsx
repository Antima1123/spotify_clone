"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {motion} from 'framer-motion'
import { FaPlay } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { AiOutlinePlusCircle } from "react-icons/ai";


const CardPage = (
  {
    serialNo,
    title,
    singer,
    date,
    timestp,
  }:{
    serialNo : number,
    title : string,
    singer : string,
    date : string,
    timestp : string
  }
) => {
  const [play,setplay] = useState(false);

  const duration = "4:31"
  return (
    //song card
    <motion.div className="w-full flex justify-between items-center h-[4rem] px-5 hover:bg-[#535353] rounded-md" onHoverStart={()=>setplay(true)} onHoverEnd={()=>setplay(false)}>

        <div className="flex gap-[4rem] items-center w-full">
          <div className="flex items-center gap-4">
            <div className="w-4">
            {play 
            ? <FaPlay color="white" size={12}/> 
            : <div>{serialNo}</div>}
            </div>
            <div className="flex gap-3">
              <Image
                src="/animal.jpg"
                alt="animal"
                height={100}
                width={100}
                className="h-[3rem] object-cover w-[3rem] rounded-md "
              />
              <div className="flex flex-col w-full">
                <Link href="/" className="text-[#1db954] hover:underline text-md w-[18rem] line-clamp-1">{title}</Link>
                <Link href="#" className="text-sm w-[16rem] line-clamp-1 ">{singer}</Link>
              </div>
            </div>
          </div>

          <Link href="#">
              <p className="text-sm w-[16rem] line-clamp-1">
                {title}
              </p>
          </Link>
          <button className="text-sm line-clamp-1 w-[7rem] justify-start flex">{date}</button>
        </div>
        <div className="flex gap-4 items-center w-[8rem]">
         <div className="w-4">
           {play &&
            <AiOutlinePlusCircle color="white" size={18}/>
          }
         </div>
          <div className="text-sm">{timestp}</div>
          {play && 
            <IoIosMore color="white" size={18}/>}
        </div>
    </motion.div>
  )
}

export default CardPage