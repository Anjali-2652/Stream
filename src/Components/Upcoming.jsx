import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Upcoming = () => {
  const [upcoming, setUpcoming] = useState([]);
  const navigate = useNavigate();

  const upcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=3e03e1ce77256a238a84c7cb8c0f0271"
    );
    const jsonData = await data.json();
    setUpcoming(jsonData.results);
  };

  useEffect(() => {
    upcomingMovies();
  }, []);

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-8">
        <div className="font-bold text-xl sm:text-[25px] tracking-wide sm:mr-10 mb-4 sm:mb-0">
          Upcoming
        </div>
        <div className="flex border-2 border-blue-950 rounded-3xl w-[180px]">
          <button className="bg-gradient-to-r from-cyan-300 to-cyan-700 text-transparent bg-clip-text font-bold rounded-3xl p-1 ml-2">
            Today
          </button>
          <button className="ml-4">This Week</button>
        </div>
      </div>

      <div className="flex overflow-x-auto pb-4 px-4 sm:px-8 gap-3 sm:gap-4 hide-scrollbar">
        {upcoming.map((movie) => (
          <div
            key={movie.id}
            onClick={() => navigate(`movies/${movie.id}`)}
            className="flex-shrink-0 cursor-pointer transition-transform hover:scale-105"
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

export default Upcoming;
