import React, { useState } from 'react'

const Home = () => {

  const[trending, setTrending] = useState([]);


  const trendingmovies = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc');

    const jsonData = await data.json();
    console.log(jsonData);
  }

  return (
    <div>
    <div  className='bg-blue-600 h-[280px] p-10'>
      <div>
        <p className='font-bold text-white text-[40px]'>Welcome.</p>
        <p className='text-white text-2xl font-bold'>Millions of movies, TV shows and people to discover. Explore now</p>
      </div>
      <form className='flex' action="submit">
        <input className='mt-[45px] p-3 rounded-3xl w-full' type="text" placeholder='Search for a movie, tv show, person.......' />
        <button className='bg-sky-400 h-fit w-[100px] mt-[47px] p-2  text-white text-xl rounded-3xl absolute right-10 '>Search</button>
      </form>
    </div>

    <div className='p-8'>
      <div className='flex'>
        <div className='font-bold text-[25px] tracking-wide mr-10'>Trending</div>
        <div className='flex border-2 border-blue-950 rounded-3xl w-[180px] '>
          <button className=' bg-gradient-to-r from-cyan-300 to-cyan-700 text-transparent bg-clip-text font-bold rounded-3xl p-1 ml-2 '>Today</button>
          <button className='ml-4'>This Week</button>
        </div>
      </div>
    </div>

    <div className='pl-8 pb-5'>
      <div className='h-[230px] bg-blue-950 w-[160px] rounded-xl' >image</div>
    </div>


    </div>

  )
}

export default Home
