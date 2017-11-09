import { FETCH_FAVORITE_SHOWS_FULFILLED } from '../constants/actions'

export default function reducer(
  state = {
    favorites: []
  },
  action
) {
  switch (action.type) {
    case FETCH_FAVORITE_SHOWS_FULFILLED: {
      return { ...state, favorites: action.payload };
    }
    default:
      return state;
  }
}