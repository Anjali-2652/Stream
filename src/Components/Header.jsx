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
    <div className="flex justify-between p-6 h-fit w-full bg-blue-950 text-white">
      <div className="flex gap-x-[80px] ">
        <div className="text-3xl font-bold tracking-widest bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
          STREAM
        </div>
        <div className="flex gap-x-6 text-[16px] font-bold ">
          <div className="realative"
           onMouseEnter={()=>setShowList(true)}
          onMouseLeave={()=>setShowList(false)}>
          <div className="hover:underline cursor-pointer">Movies</div>
          {showList && (
            <ul  className="absolute  bg-white text-black rounded-lg text-md">
              {movies.map((movie)=>(
                <li onClick={()=>{
                  navigate('movies/'+movie.id)
 
                }}
                 className=" p-4 py-2 hover:bg-blue-600 border-b-bl">
                  <Link to = {'movies'} className="block">
                  {movie.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          </div>
          <div className="hover:underline cursor-pointer">TV Shows</div>
          <div className="hover:underline cursor-pointer">People</div>
          <div className="hover:underline cursor-pointer">More</div>
          <div className="hidden">
            {" "}
            <FaBars />
          </div>
        </div>
      </div>

      <div className="flex gap-x-6  text-[16px] font-bold ">
        <div  className="cursor-pointer ">+</div>
        <div className="realtive"
        onMouseEnter={()=>setShowLang(true)}
        onMouseLeave={()=>setShowLang(false)}>
        <div className="cursor-pointer">En</div>
        {showLang && 
          <ul className="absolute bg-white text-black rounded-lg text-md">
            <li className="p-1">Ne</li>
          </ul>
}
        </div>
        <div  className="cursor-pointer hover:underline">notification</div>
        <div  className="cursor-pointer hover:underline">login</div>
        <div  className="cursor-pointer hover:underline">search</div>
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