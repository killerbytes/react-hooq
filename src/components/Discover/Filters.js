import React from 'react'
import shortid from 'shortid'

import {sort_options} from '../../constants/config'

const Filters = ({onChange, checked}) =>{
  const mappedOptions = sort_options.map(item => {
    return <label key={shortid.generate()}>
        <input name="sort_options" type="radio" checked={item.value === checked} value={item.value} onChange={ onChange }/> {item.name} 
      </label>;
  });
  
  return <div className="filter">{ mappedOptions }</div>
}

export default Filters