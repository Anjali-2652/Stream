import React from 'react'

const Card = (props) => {
    const {propData} = props
    const {poster_path, id} = propData
     return (
    <div>
         <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}/>
         <div>moana2</div>

    </div>
  )
}

export default Card
