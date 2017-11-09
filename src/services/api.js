import axios from 'axios'
import {tmdb} from '../constants/config'

const headers = ()=>{
  return {
    params: {
      api_key: tmdb.api_key,
      sort_by: 'first_air_date.desc'
    }
  }
}

export function getDiscoverShow(option){
  const config = Object.assign(headers(), { params: {
    api_key: tmdb.api_key,
    sort_by: option
  }});

  return new Promise((resolve, reject)=>{
    axios
      .get(`${tmdb.api_url}/discover/tv`, config)
      .then(res=> resolve(res.data))
      .catch(err=> reject(err) )
  })
}

export function getShow(id){
  const config = Object.assign(headers(), {})
  return new Promise((resolve, reject)=>{
    axios
      .get(`${tmdb.api_url}/tv/${id}`, config)
      .then(res=> resolve(res.data))
      .catch(err=> reject(err) )
  })
}

export function getShowSeason(id, season){
  const config = Object.assign(headers(), {})
  return new Promise((resolve, reject)=>{
    axios
      .get(`${tmdb.api_url}/tv/${id}/season/${season}`, config)
      .then(res=> resolve(res.data))
      .catch(err=> reject(err) )
  })
}
