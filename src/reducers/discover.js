import { FETCH_COLLECTION, FETCH_COLLECTION_FULFILLED } from '../constants/actions'

export default function reducer(
  state = {
    fetching: false,
    collection: {
      results: []
    }
  },
  action
) {
  switch (action.type) {
    case FETCH_COLLECTION: {
      return { ...state, fetching: true };
    }
    case FETCH_COLLECTION_FULFILLED: {
      return { ...state, fetching: false, collection: action.payload };
    }
    default:
      return state;
  }
}