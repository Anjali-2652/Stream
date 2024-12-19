import React, { useEffect, useState } from "react";
import Trending from "./Trending";
import Upcoming from "./Upcoming";
import NowPlaying from "./NowPlaying";
import TopRated from "./TopRated";
import {Link, useNavigate } from "react-router-dom";

const Home = () => {

  const [homeImage, setHomeImage] = useState([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();


  
  const getHomeImage = async()=>{
    const data = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=3e03e1ce77256a238a84c7cb8c0f0271");
    const jsonData = await data.json();
    console.log(jsonData);
    setHomeImage(jsonData);
  }
    const [trending, setTrending] = useState([]);
    // const navigate = useNavigate();
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
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };
  useEffect(()=>{
    getHomeImage();
  },[])
 

  return (
    <div>
      <div className="min-h-[200px] sm:h-[280px] bg-blue-800 p-4 sm:p-10">
        <div>
          <p className="font-bold text-white text-2xl sm:text-[40px]">Welcome.</p>
          <p className="text-white text-lg sm:text-2xl font-bold mt-2">
            Millions of movies, TV shows and people to discover. Explore now
          </p>
        </div>
        <form className="flex relative mt-4 sm:mt-8" onSubmit={handleSearch}>
          <input
            className="w-full p-2 sm:p-3 outline-none rounded-3xl text-sm sm:text-base"
            type="text"
            placeholder="Search for a movie, tv show, person......."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button 
            type="submit"
            className="absolute right-0 bg-sky-600 h-full px-4 sm:px-6 text-white text-sm sm:text-xl rounded-r-3xl">
            Search
          </button>
        </form>
      </div>

      <div className="p-4 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0">
          <div className="font-bold text-xl sm:text-[25px] tracking-wide sm:mr-10">
            Trending
          </div>
          <div className="flex border-2 border-blue-950 rounded-3xl w-[180px]">
            <button className="bg-gradient-to-r from-cyan-300 to-cyan-700 text-transparent bg-clip-text font-bold rounded-3xl p-1 ml-2">
              Today
            </button>
            <button className="ml-4">This Week</button>
          </div>
        </div>
      </div>

      <Trending />
      <Upcoming />
      <NowPlaying />
      <TopRated />
    </div>
  );
};

export default Home;
