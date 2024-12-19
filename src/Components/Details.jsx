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
          className="h-[530px] w-full mt-2 opacity-30"
          src={`https://image.tmdb.org/t/p/w500${playing.poster_path}`}
        />

        <div className="absolute top-0 flex ">
          <img
            className="h-[500px] w-[400px] p-8 rounded-full "
            src={`https://image.tmdb.org/t/p/w500${playing.poster_path}`}
          />

          <div className="p-10">
            <p className="text-3xl font-bold">
              {playing.original_title}<span className="font-normal">({playing.origin_country})</span>
            </p>
            <ul className=" flex gap-x-10 text-[18px]">
              <li>{playing.release_date}<span>({playing.origin_country})</span></li>
              {/* <li className="list-disc">{playing.genres.map((type)=>(type.name))}</li> */}
              <li className="list-disc">{playing.runtime} min</li>
            </ul>

            <div className="flex  mt-5">
                <div className=" flex items-center text-4xl"><LuLoaderCircle /></div>
                <div className="flex text-2xl items-center ml-2">user score</div>
                <div className="bg-blue-950 text-center ml-8 w-[220px] p-2 rounded-3xl font-bold">what's your vibe?</div>
            </div>

            <div className="flex mt-3 gap-x-5">
                <button className="bg-blue-950 p-3 rounded-full"><FaListUl /></button>
                <button className="bg-blue-950 p-3 rounded-full"><FaHeart /></button>
                <button className="bg-blue-950 p-3 rounded-full"><FaBookmark /></button>
                <button className="flex items-center text-2xl  ml-4"><VscTriangleRight /><span className=" font-bold text-[18px]">Play Trailer</span>
                </button>
            </div>

            <div className="mt-7">
                <p className="italic text-xl">{playing.tagline}</p>
                <p className="font-bold text-2xl mt-2">Overview</p>
                <p>{playing.overview}</p>


                <div className="flex flex-wrap gap-x-[190px] gap-y-2 mt-6">
                    <div className="font-bold text-xl">Dana Ledoux Miller
                        <div className="font-normal text-[16px]">Director, Writer</div>
                    </div>
                    <div className="font-bold text-xl">Ron Clements
                        <div className="font-normal text-[16px]">Character</div>
                    </div>
                    <div className="font-bold text-xl">John Musker
                        <div className="font-normal text-[16px]">Character</div>
                    </div>
                    
                </div>
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