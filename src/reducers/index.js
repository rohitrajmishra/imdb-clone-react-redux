import { ADD_MOVIES } from "../actions";

const initialMovieState = {
  movies: [],
  favorites: [],
};

export default function movies(state = initialMovieState, action) {
  if (action.type === ADD_MOVIES) {
    return {
      ...state,
      movies: action.movies,
    };
  }
  return state;
}
