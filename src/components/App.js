import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";

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
    const { favorites } = this.props.store.getState();

    const index = favorites.indexOf(movie);

    if (index !== -1) {
      return true; // movie exists in favorites list
    } else {
      return false;
    }
  };

  render() {
    console.log("RENDER", this.props.store.getState());
    const { movies } = this.props.store.getState(); // { movies: []. favourites: [] }
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourite</div>
          </div>

          <div className="list">
            {movies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movie-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
