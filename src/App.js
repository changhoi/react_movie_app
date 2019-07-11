import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  state = {};
  componentDidMount() {
    this._getMovies();
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  };

  _callApi = () => {
    return fetch(
      "https://yts.lt/api/v2/list_movies.json?sort_by=download_count"
    )
      .then(response => response.json())
      .then(json => {
        //console.log(json.data.movies);
        return json.data.movies;
      })
      .catch(err => console.log(err));
  };

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => (
      <Movie
        title={movie.title_english}
        poster={movie.large_cover_image}
        genres={movie.genres}
        synopsis={movie.synopsis}
        key={movie.id}
      />
    ));
    console.log(movies);

    return movies;
  };

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
