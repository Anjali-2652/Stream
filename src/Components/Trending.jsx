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
      <div className="flex overflow-x-auto pb-4 px-4 sm:px-8 gap-3 sm:gap-4 hide-scrollbar">
        {trending.map((movie) => (
          <div 
            key={movie.id}
            className="flex-shrink-0 cursor-pointer transition-transform hover:scale-105"
            onClick={() => navigate(`movies/${movie.id}`)}
          >
            <img 
              className="h-[200px] w-[150px] sm:h-[280px] sm:w-[200px] rounded-2xl"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <p className="mt-2 text-sm sm:text-base font-medium text-gray-800 truncate max-w-[150px] sm:max-w-[200px]">
              {movie.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
