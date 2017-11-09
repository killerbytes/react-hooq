import React from 'react'
import shortid from 'shortid'

import ActivityIndicator from '../ActivityIndicator'

const Episodes = ({season}) => {
  const mappedItems = season.episodes.map(item => {
    return <li key={shortid.generate()}>
       {item.episode_number}: {item.name} <span className="time">{item.air_date}</span>
      </li>;
  });
  return <div>
    <h4>Episodes</h4>
    {
      !season.fetching
      ?
        <ul className="list-episodes">{ mappedItems }</ul>
      :
        <ActivityIndicator />
    }
  </div>
}

export default Episodes