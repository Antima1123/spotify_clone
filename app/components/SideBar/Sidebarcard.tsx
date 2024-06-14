const Sidebarcard = (
    {
        title,
        des,
        btn_name
    }:{
        title: string,
        des: string,
        btn_name: string
    }
) => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-[#212121] rounded-md">
        <div className=" flex flex-col gap-2">
            <div className="text-md font-[600]">{title}</div>
            <div className="text-sm">{des}</div>
        </div>
            <button className="py-2 px-4 rounded-full bg-white text-black text-sm font-[600] w-[10rem]">
                {btn_name}
            </button>
    </div>
  )
}

export default Sidebarcard