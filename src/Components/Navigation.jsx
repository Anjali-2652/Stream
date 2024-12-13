import React from 'react'
import { VscTriangleDown } from "react-icons/vsc";


const Navigation = () => {
  return (
    <div className='pt-2'>
      <div className='flex justify-center gap-x-[50px] capitalize text-xl '>
        <div className='flex items-center gap-x-2'>
            <div>overview</div>
            <div className=''><VscTriangleDown /></div>
        </div>
        <div className='flex items-center gap-x-2'>
            <div>media</div>
            <div><VscTriangleDown /></div>
        </div>
        <div className='flex items-center gap-x-2'>
            <div>fandom</div>
            <div><VscTriangleDown /></div>
        </div>
        <div className='flex items-center gap-x-2'>
            <div>share</div>
            <div><VscTriangleDown /></div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
