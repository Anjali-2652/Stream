import React from 'react'
import { FaBars } from "react-icons/fa";


const Header = () => {
  return (
    <div className='flex justify-between p-6 h-fit w-full bg-blue-950 text-white'>
      <div className='flex gap-x-[80px] '>
        <div className='text-3xl font-bold tracking-widest bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent'>STREAM</div>
        <div className='flex gap-x-6 text-[16px] font-bold '>
            <div>Movies</div>
            <div>TV Shows</div>
            <div>People</div>
            <div>More</div>
            <div className='hidden'>  <FaBars /></div>
          

        </div>
      </div>

      <div className='flex gap-x-6  text-[16px] font-bold '>
        <div>+</div>
        <div>En</div>
        <div>notification</div>
        <div>login</div>
        <div>search</div> 
      </div>
    </div>
  )
}

export default Header
