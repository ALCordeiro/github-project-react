import { combineReducers } from "redux";
import user from "./userReducer";
import repos from "./reposReducer";

export default combineReducers({
  user,
  repos
});
