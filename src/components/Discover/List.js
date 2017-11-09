import React from 'react'
import shortid from 'shortid'

import Card from './Card'

const List = ({items}) =>{
  const mappedItems = items.map(item => {
    return <li key={shortid.generate()}>
      <Card item={item} />
      </li>;
  });

  return <ul className="list-grid">{ mappedItems }</ul>
}

export default List

