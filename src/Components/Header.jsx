import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [showList, setShowList] = useState(false);
  const navigate = useNavigate();
  const [showLang, setShowLang] = useState(false);
  const movies = [
    { title: "Trending"},
    { title: "Upcoming"},
    { title: "Now Playing"},
    { title: "Top Rated"},
  ];


  return (
    <div className="flex flex-col sm:flex-row justify-between p-4 sm:p-6 bg-blue-950 text-white">
      <div className="flex flex-col sm:flex-row sm:gap-x-[80px]">
        <div className="text-2xl sm:text-3xl font-bold tracking-widest bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
          STREAM
        </div>
        
        <div className="hidden sm:flex gap-x-6 text-base sm:text-[16px] font-bold mt-4 sm:mt-0">
          <div className="relative" onMouseEnter={() => setShowList(true)} onMouseLeave={() => setShowList(false)}>
            <div className="hover:underline cursor-pointer">Movies</div>
            {showList && (
              <ul className="absolute z-50 bg-white text-black rounded-lg text-sm sm:text-md w-[150px]">
                {movies.map((movie) => (
                  <li key={movie.title} className="p-2 sm:p-4 hover:bg-blue-600 hover:text-white">
                    {movie.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="hover:underline cursor-pointer">TV Shows</div>
          <div className="hover:underline cursor-pointer">People</div>
          <div className="hover:underline cursor-pointer">More</div>
        </div>
        
        {/* Mobile menu button */}
        <button className="sm:hidden absolute right-4 top-4">
          <FaBars className="text-xl" />
        </button>
      </div>

      <div className="hidden sm:flex gap-x-6 text-[16px] font-bold">
        <div className="cursor-pointer">+</div>
        <div className="relative" onMouseEnter={() => setShowLang(true)} onMouseLeave={() => setShowLang(false)}>
          <div className="cursor-pointer">En</div>
          {showLang && 
            <ul className="absolute bg-white text-black rounded-lg text-md">
              <li className="p-1">Ne</li>
            </ul>
          }
        </div>
        <div className="cursor-pointer hover:underline">Login</div>
        <div className="cursor-pointer hover:underline">Search</div>
      </div>
    </div>
  );
};

export default Header;




{/* <select className=' bg-blue-950 outline-none appearance-none'>
<option value="trending">Trending</option>
<option value="upcoming">Upcoming</option>
<option value="nowplaying">Now Playing</option>
<option value="toprated">Top Rated</option>
</select> */}