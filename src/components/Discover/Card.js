import React from 'react'
import { Link } from 'react-router-dom'



const Card = ({item}) =>{
  const img = item.poster_path ? `https://image.tmdb.org/t/p/w154/${item.poster_path}` : 'http://via.placeholder.com/160x235?text=No+Image'
  return <div className="card">
    <Link to={`/catalog/${item.id}`}>
      <div className="poster-bg" style={{backgroundImage: `url(${img})`}}>
        <img src={img} alt=""/>
      </div>
    </Link>
    <h4>{item.name}</h4>
  
  </div>
}

export default Card