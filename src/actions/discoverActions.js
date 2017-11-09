import { getDiscoverShow } from "../services/api";
import { FETCH_COLLECTION, FETCH_COLLECTION_FULFILLED } from '../constants/actions'

export function fetchDiscoverShow(option) {
  return function(dispatch) {
    dispatch({
      type: FETCH_COLLECTION
    });

    return getDiscoverShow(option).then(res => {
      dispatch({
        type: FETCH_COLLECTION_FULFILLED,
        payload: res
      });
    });
  };
}
