import React from 'react'

const Card = ({ propData }) => {
  const { poster_path, id, title } = propData;
  
  return (
    <div className="flex-shrink-0 cursor-pointer transition-transform hover:scale-105">
      <img 
        className="h-[200px] w-[150px] sm:h-[280px] sm:w-[200px] rounded-2xl"
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
      />
      <p className="mt-2 text-sm sm:text-base font-medium text-gray-800 truncate max-w-[150px] sm:max-w-[200px]">
        {title}
      </p>
    </div>
  );
};

export default Card
