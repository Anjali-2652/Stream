import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Details from "./Details";
import { useNavigate } from "react-router-dom";
const SearchResult = () => {
  const [params] = useSearchParams();
  const query = params.get("query");
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getSearch = async () => {
    try {
      setLoading(true);
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=3e03e1ce77256a238a84c7cb8c0f0271&query=${query}&include_adult=false&language=en-US&page=1`
      );
      const jsonData = await data.json();
      setSearch(jsonData.results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      getSearch();
    }
  }, [query]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Search Results for "{query}"
        </h2>
        
        {search.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No results found for your search.</p>
            <p className="text-gray-500 mt-2">Try different keywords or check the spelling.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {search.map((movie) => (
              <div 
                key={movie.id}
                className="group relative transition-transform duration-200 hover:scale-105"
                onClick={() => navigate(`/movies/${movie.id}`)}
              >
                {movie.poster_path ? (
                  <img
                    className="w-full h-[300px] object-cover rounded-lg shadow-lg cursor-pointer"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                ) : (
                  <div className="w-full h-[300px] bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">No Image</span>
                  </div>
                )}
                <div className="mt-2 px-2">
                  <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 truncate">
                    {movie.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {new Date(movie.release_date).getFullYear()}
                  </p>
                  <div className="flex items-center mt-1">
                    <span className="text-sm text-yellow-500">★</span>
                    <span className="text-sm text-gray-600 ml-1">
                      {movie.vote_average.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default SearchResult;
