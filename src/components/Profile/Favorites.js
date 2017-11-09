import React from 'react'
import shortid from 'shortid'
import { Link } from 'react-router-dom'



const Favorites = ({items, onClick}) =>{
  const mappedItems = items.map(item => {
    const img = item.poster_path ? `https://image.tmdb.org/t/p/w154/${item.poster_path}` : 'http://via.placeholder.com/160x235?text=No+Image'
    return <li key={shortid.generate()}>
      <div className="card">
          <div className="poster-bg" style={{backgroundImage: `url(${img})`}}>
            <img src={img} alt=""/>
          </div>
          <button className="fa fa-times" onClick={ onClick.bind(this, item) }></button>
        <h4>
          <Link to={`/catalog/${item.id}`}>
            {item.name}
          </Link>
        </h4>
      </div>
            

      </li>;
  });

  return <div>
      <h1>Favorites</h1>
      <ul className="list-grid">{ mappedItems }</ul>
    </div>
}

export default Favorites