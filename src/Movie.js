import React, { Component } from "react";
import "./Movie.css";

class Movie extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <MoviePoster />
        <h1>{this.props.title}</h1>;
      </div>
    );
  }
}

class MoviePoster extends Component {
  render() {
    return (
      <img src="https://scontent.ficn6-1.fna.fbcdn.net/v/t1.0-9/20430132_1352389891525050_3591124631438117403_n.jpg?_nc_cat=103&_nc_ht=scontent.ficn6-1.fna&oh=103b4026e2f983dba98a2f66d425a506&oe=5D2105F3" />
    );
  }
}

export default Movie;
