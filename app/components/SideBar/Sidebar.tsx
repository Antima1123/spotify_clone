import Image from "next/image"
import SidebarMenu from "./SidebarMenu"
import SidebarLibrary from "./SidebarLibrary"

const Sidebar = () => {
  return (
    <div className="w-[26rem] h-screen p-1 rounded-md gap-2 flex flex-col">
      <SidebarMenu/>
     <div className="h-full">
     <SidebarLibrary/>
     </div>
    </div>
  )
}

export default Sidebar