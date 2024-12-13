import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const navigate = useNavigate();
  const trendingmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=3e03e1ce77256a238a84c7cb8c0f0271"
    );

    const jsonData = await data.json();
    setTrending(jsonData.results)
  };

  useEffect(() => {
    trendingmovies();
  }, []);

  return (
    <div>
      <div className="flex gap-x-4 ml-8 overflow-x-scroll ">
        {trending.map((movie) => (
         <img onClick={()=>{
          navigate('movies/'+movie.id)
         }}  className="h-[280px] w-[300px]  rounded-2xl" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
   
         
        ))}
      </div>


    </div>
  );
};

export default Trending;
