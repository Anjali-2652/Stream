import React from 'react'
import { VscTriangleDown } from "react-icons/vsc";


const Navigation = () => {
  return (
    <div className="pt-2 overflow-x-auto">
      <div className="flex justify-center gap-x-4 sm:gap-x-[50px] px-4 sm:px-0">
        <div className="flex items-center gap-x-1 sm:gap-x-2">
          <div className="text-sm sm:text-xl capitalize">overview</div>
          <div className="text-sm sm:text-xl"><VscTriangleDown /></div>
        </div>
        <div className="flex items-center gap-x-1 sm:gap-x-2">
          <div className="text-sm sm:text-xl capitalize">media</div>
          <div className="text-sm sm:text-xl"><VscTriangleDown /></div>
        </div>
        <div className="flex items-center gap-x-1 sm:gap-x-2">
          <div className="text-sm sm:text-xl capitalize">fandom</div>
          <div className="text-sm sm:text-xl"><VscTriangleDown /></div>
        </div>
        <div className="flex items-center gap-x-1 sm:gap-x-2">
          <div className="text-sm sm:text-xl capitalize">share</div>
          <div className="text-sm sm:text-xl"><VscTriangleDown /></div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
