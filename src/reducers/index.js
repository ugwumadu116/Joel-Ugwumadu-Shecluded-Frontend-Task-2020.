import { combineReducers } from "redux";
import cats from "../components/cats/cats.reducer";
import lotr from "../components/lotr/lotr.reducer";


export default combineReducers({
  cats,
  lotr
});
