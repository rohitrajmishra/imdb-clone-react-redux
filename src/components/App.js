import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourites } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("UPDATED");
      // NOTE: For testing the logic we are forceUpdate, otherwise don't use it in normal scenarios
      this.forceUpdate();
    });
    // make api call
    // dispatch action
    store.dispatch(addMovies(data));

    console.log("STATE: ", store.getState());
  }

  isMovieFavourite = (movie) => {
    const moviesState = this.props.store.getState().moviesState;
    const { favourites } = moviesState;

    const index = favourites.indexOf(movie);

    if (index !== -1) {
      return true; // movie exists in favourites list
    } else {
      return false;
    }
  };

  onChangeTab = (val) => {
    const { store } = this.props;
    store.dispatch(setShowFavourites(val));
  };

  render() {
    console.log("RENDER", this.props.store.getState());
    // state representation -> { moviesState: {}. searchState: {} }
    const moviesState = this.props.store.getState().moviesState;
    const { movies, favourites, showFavourites } = moviesState;

    // Select between movies or favourites to display based on showFavourites flag
    const displayMovies = showFavourites ? favourites : movies;

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favourite
            </div>
          </div>

          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movie-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? (
            <div className="no-movies">No movies to display!</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
