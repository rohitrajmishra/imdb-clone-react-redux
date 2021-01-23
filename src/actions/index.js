// {
//   type: "ADD_MOVIES"
// }

// Actions types
export const ADD_MOVIES = 'ADD_MOVIES';

// Action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies: movies
  }
}
