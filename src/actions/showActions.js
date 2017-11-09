import { getShow, getShowSeason } from "../services/api";
import { FETCH_SHOW, FETCH_SHOW_FULFILLED, FETCH_SHOW_SEASON, FETCH_SHOW_SEASON_FULFILLED } from '../constants/actions'

export function fetchShow(id) {
  return function(dispatch) {
    dispatch({
      type: FETCH_SHOW
    });

    return getShow(id).then(res => {
      res.seasons = res.seasons.filter(i=>i.season_number !== 0)
      dispatch({
        type: FETCH_SHOW_FULFILLED,
        payload: res
      });
      return res
    });
  };
}


export function fetchShowSeason(id, season) {
  return function(dispatch) {
    dispatch({
      type: FETCH_SHOW_SEASON
    });

    return getShowSeason(id, season).then(res => {
      dispatch({
        type: FETCH_SHOW_SEASON_FULFILLED,
        payload: res
      });
    });
  };
}
