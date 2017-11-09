import { FETCH_SHOW, FETCH_SHOW_FULFILLED, FETCH_SHOW_SEASON, FETCH_SHOW_SEASON_FULFILLED  } from '../constants/actions'

export default function reducer(
  state = {
    fetching: false,
    data: null,
    season: {
      episodes: [],
      fetching: false
    }
  },
  action
) {
  switch (action.type) {
    case FETCH_SHOW: {
      return { ...state, fetching: true };
    }
    case FETCH_SHOW_FULFILLED: {
      return { ...state, fetching: false, data: action.payload };
    }
    case FETCH_SHOW_SEASON: {
      return { ...state, season: {
        ...state.season,
        fetching: true
      }}
    }
    case FETCH_SHOW_SEASON_FULFILLED: {
      return { ...state, season: {
        fetching: false,
        ...action.payload
      }}
    }

    default:
      return state;
  }
}