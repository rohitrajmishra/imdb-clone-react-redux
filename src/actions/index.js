// Actions types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';

// Action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies: movies
  }
}

export function addFavourite(movie) {
  return {
    type: ADD_TO_FAVOURITES,
    movie: movie
  }
}
