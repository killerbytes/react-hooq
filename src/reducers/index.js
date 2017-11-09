import { combineReducers } from "redux";

import discover from './discover'
import show from './show'
import user from './user'

export default combineReducers({
  discover,
  show,
  user
});