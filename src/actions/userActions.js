import { addOrRemoveFavoriteShow, getFavoriteShows } from "../services/localStorage";
import { FETCH_FAVORITE_SHOWS, FETCH_FAVORITE_SHOWS_FULFILLED } from '../constants/actions'

export function favoriteShow(data) {
  return function(dispatch){
    
    return addOrRemoveFavoriteShow(data).then(res=>{
      dispatch({
        type: FETCH_FAVORITE_SHOWS_FULFILLED,
        payload: res
      });
    
    })
  }
}


export function fetchFavoritesShows(id, season) {
  return function(dispatch) {
    dispatch({ type: FETCH_FAVORITE_SHOWS })
    return getFavoriteShows().then(res => {
      dispatch({
        type: FETCH_FAVORITE_SHOWS_FULFILLED,
        payload: res
      });
    });
  };
}

function shouldFetchFavorites(state){
  const {user} = state
  if(!user.favorites.length){
    return true
  }else{
    return false
  }
}

export function fetchFavoritesIfNeeded(){
  return function(dispatch, getState){
    if(shouldFetchFavorites(getState())){
      return dispatch(fetchFavoritesShows())
    }else{
      const {user: { favorites } } = getState()
      return Promise.resolve( favorites )
    }
  }
}