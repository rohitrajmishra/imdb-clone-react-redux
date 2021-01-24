import { ADD_MOVIES, ADD_FAVOURITE } from "../actions";

const initialMovieState = {
  movies: [],
  favorites: [],
};

export default function movies(state = initialMovieState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };
    case ADD_FAVOURITE:
    return {
      ...state,
      favorites: [action.movie, ...state.favorites]
    };
    default:
      return state;
  }

}
