import React from 'react';
import shortid from 'shortid';

const Seasons = ({season, items, onClick}) => {
  const mappedItems = items.map(item => {
    return <li key={shortid.generate()}>
       <button className={item.season_number === season.season_number ? 'active' : '' } onClick={ onClick } data-season={item.season_number}>{item.season_number}</button>
      </li>;
  });

  return <div className="seasons">
    Seasons:
    <ul className="list-seasons">{ mappedItems }</ul>
    </div>
}

export default Seasons