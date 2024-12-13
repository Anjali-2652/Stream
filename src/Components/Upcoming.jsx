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
    <div> <div className='flex p-8'>
    <div className="font-bold text-[25px] tracking-wide mr-10">
        Upcoming
      </div>
      <div className="flex border-2 border-blue-950 rounded-3xl w-[180px] ">
        <button className=" bg-gradient-to-r from-cyan-300 to-cyan-700 text-transparent bg-clip-text font-bold rounded-3xl p-1 ml-2 ">
          Today
        </button>
        <button className="ml-4">This Week</button>
      </div>
      </div>



      <div className="flex gap-x-4 ml-8 mb-8 overflow-x-scroll  ">
        {upcoming.map((movie) => (
          <img onClick={()=>{
            navigate('movies/' + movie.id)
          }}
            className="h-[280px] w-[300px] rounded-2xl"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Upcoming;

// onClick={()=>{
//   navigate('movies/'+movie.id)
//  }}
