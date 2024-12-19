import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "./Navigation";
import { LuLoaderCircle } from "react-icons/lu";
import { FaListUl } from "react-icons/fa"; 
import { VscTriangleRight } from "react-icons/vsc";
import { FaBookmark } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";





const Details = () => {
  const params = useParams();
  const [playing, setPlaying] = useState([]);
  const getDetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=3e03e1ce77256a238a84c7cb8c0f0271`);
    const jsonData = await data.json();
    console.log(jsonData);
    setPlaying(jsonData);
  };










  

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div>
      <Navigation />
      <div className="bg-blue-900 relative w-full text-white">
        <img
          className="h-[300px] sm:h-[530px] w-full mt-2 opacity-30 object-cover"
          src={`https://image.tmdb.org/t/p/w500${playing.poster_path}`}
          alt={playing.title}
        />

        <div className="absolute top-0 flex flex-col sm:flex-row p-4 sm:p-8">
          <img
            className="h-[250px] sm:h-[500px] w-auto rounded-xl"
            src={`https://image.tmdb.org/t/p/w500${playing.poster_path}`}
            alt={playing.title}
          />

          <div className="mt-4 sm:mt-0 sm:ml-8">
            <p className="text-xl sm:text-3xl font-bold">
              {playing.original_title}
              <span className="font-normal ml-2">({playing.origin_country})</span>
            </p>
            
            <ul className="flex flex-wrap gap-2 sm:gap-x-10 text-sm sm:text-lg mt-2">
              <li>{playing.release_date}</li>
              <li className="list-disc hidden sm:block">{playing.runtime} min</li>
            </ul>

            <div className="flex flex-wrap items-center gap-4 mt-4 sm:mt-5">
              <div className="flex items-center">
                <div className="text-2xl sm:text-4xl"><LuLoaderCircle /></div>
                <div className="text-lg sm:text-2xl ml-2">User Score</div>
              </div>
              <button className="bg-blue-950 px-4 py-2 rounded-3xl text-sm sm:text-base font-bold">
                What's your vibe?
              </button>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <button className="bg-blue-950 p-2 sm:p-3 rounded-full"><FaListUl /></button>
              <button className="bg-blue-950 p-2 sm:p-3 rounded-full"><FaHeart /></button>
              <button className="bg-blue-950 p-2 sm:p-3 rounded-full"><FaBookmark /></button>
              <button className="flex items-center text-lg sm:text-2xl ml-2">
                <VscTriangleRight />
                <span className="font-bold text-sm sm:text-lg">Play Trailer</span>
              </button>
            </div>

            <div className="mt-6">
              <p className="italic text-lg sm:text-xl">{playing.tagline}</p>
              <p className="font-bold text-xl sm:text-2xl mt-4">Overview</p>
              <p className="text-sm sm:text-base mt-2">{playing.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;



// {playing.genres.map((user)=>(
//   {user.name}
// ))}