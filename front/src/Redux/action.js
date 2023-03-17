import { ADD_FAVORITES, DELETE_FAVORITES } from "./action_type";
import axios from "axios";

export function addFavorites(char) {
  return function (dispatch) {
    axios
      .post("http://localhost:3001/rickandmorty/favorites")
      .then((response) => {
        return dispatch({
          type: ADD_FAVORITES,
          payload: char,
        });
      });
  };
}

export function deleteFavotires(id) {
  return function (dispatch) {
    axios
      .post(`http://localhost:3001/rickandmorty/favorites/${id}`)
      .then((response) => {
        return dispatch({
          type: DELETE_FAVORITES,
          payload: response.data,
        });
      });
  };
  return {};
}
