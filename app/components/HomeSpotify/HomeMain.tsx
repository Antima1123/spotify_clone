"use client"
import { useState } from "react"
import HomeCards from "./HomeCards"
import CardPage from "../Card/Card"

const HomeMain = () => {
  const [all,setAll] = useState(true)//bydefault all page dikhega haa check krne ke lia false kiya thaok
  const [music,setMusic] =useState(false)
  const [podcast,setPodcast] = useState(false)

  const action1 = () => {
    setAll(true)
    setMusic(false)
    setPodcast(false)
  }
  const action2 = () => {
    setAll(false)
    setMusic(true)
    setPodcast(false)
  }
  const action3 = () => {
    setAll(false)
    setMusic(false)
    setPodcast(true)
  }

  const playlist = [
    {
      img_url : "/animal.jpg",
      title : "Top Hindi bollywood",
      des : "Hottest Hindi music served here cover animal",
    },
    {
      img_url : "/animal.jpg",
      title : "hot hits panjabi",
      des : "describe",
    },
    {
      img_url : "/animal.jpg",
      title : "title",
      des : "Hottest Hindi music served here cover animal",
    },
    {
      img_url : "/animal.jpg",
      title : "title",
      des : "Hottest Hindi music served here cover animal",
    },
    {
      img_url : "/animal.jpg",
      title : "title",
      des : "Hottest Hindi music served here cover animal",
    },
  ]

  const songData = [
    {
      title: "abc song cnjfvh ",
      singer: "xyz asmbjznflvi nvnxu nvkj nxhhud x jduzx  zn c h",
      date: "1 weeks a go",
      time: "4:31"
    },
    {
      title: "abc song 222",
      singer: "xyz 33",
      date: "1 weeks a go",
      time: "4:31"
    },
    {
      title: "abc song 222",
      singer: "xyz 33",
      date: "1 weeks a go",
      time: "4:31"
    },
    {
      title: "abc song 222",
      singer: "xyz 33",
      date: "1 weeks a go",
      time: "4:31"
    }
  ]
  return (
    <div className="bg-[#121212] w-full h-full p-2 rounded-md flex flex-col">
      {/* first section  */}
      <div className="flex gap-2 h-[34px] w-full ">
        <button 
        className={all ? "bg-white py-[0.5px] px-4 rounded-full text-black shadow-lg" :  "bg-[#535353] py-[0.5px] px-4 rounded-full text-white shadow-lg hover:bg-[#6a6969]"}
        onClick={action1}
        >
           <p className="text-sm">All</p>
        </button>

        <button 
        className={music ? "bg-white py-[0.5px] px-4 rounded-full text-[#535353] shadow-lg" : "bg-[#535353] py-[0.5px] px-4 rounded-full text-white shadow-lg hover:bg-[#6a6969]"}
        onClick={action2}
        >
           <p className="text-sm">Music</p>
        </button>

        <button 
        className={podcast ? "bg-white py-[0.5px] px-4 rounded-full text-[#535353] shadow-lg" : "bg-[#535353] py-[0.5px] px-4 rounded-full text-white shadow-lg hover:bg-[#6a6969]"}
        onClick={action3}
        >
           <p className="text-sm">Podcast</p>
        </button>
      </div>

      {/* Second Section  */}
      <div className="py-16 text-white">
      {all && 
        <div className="gap-4 flex flex-col">
          <p className="text-2xl font-[700] hover:underline w-[16rem]">Try Something else</p>
          <div className=" flex gap-[1px] ">
            {playlist.map((card)=>(
              <HomeCards img_url={card.img_url} title={card.title} des={card.des}/>
            ))}
            
            </div>
        </div>
        }
        {
          songData.map((item, index)=>(
            <CardPage serialNo={index+1} title={item.title} singer={item.singer} date={item.date} timestp={item.time}/>//h,m aarhe pani chal 2 sec
          ))
        }
     </div> 
    </div>
  )
}

export default HomeMain