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
      <div className="h-[280px] bg-blue-800 p-10">

        <div>
          <p className="font-bold text-white text-[40px]">Welcome.</p>
          <p className="text-white text-2xl font-bold">
            Millions of movies, TV shows and people to discover. Explore now
          </p>
        </div>
        <form className="flex" onSubmit={handleSearch}>
          <input
            className="mt-[45px] p-3 outline-none rounded-3xl w-full"
            type="text"
            placeholder="Search for a movie, tv show, person......."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button 
            type="submit"
            className="bg-sky-600 h-fit w-[100px] mt-[47px] p-2 text-white text-xl rounded-3xl absolute right-10">
            Search
          </button>

        </form>
      </div>

      <div className="p-8">
        <div className="flex">
          <div className="font-bold text-[25px] tracking-wide mr-10">
            Trending
          </div>
          <div className="flex border-2 border-blue-950 rounded-3xl w-[180px] ">
            <button className=" bg-gradient-to-r from-cyan-300 to-cyan-700 text-transparent bg-clip-text font-bold rounded-3xl p-1 ml-2 ">
              Today
            </button>
            <button className="ml-4">This Week</button>
          </div>

          
        </div>
      </div>

      
      <Trending/>
      <Upcoming/>
      <NowPlaying/>
      <TopRated/>
   
    </div>

    
  );
};

export default Home;
