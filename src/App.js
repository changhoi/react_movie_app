import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Movie from "./Movie";

const movieTitle = ["metrix", "Full metal jacket", "Old Boy", "StarWars"];

const movieImage = [""];

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Movie title={movieTitle[0]} />
        <Movie title={movieTitle[1]} />
        <Movie title={movieTitle[2]} />
        <Movie title={movieTitle[3]} />
      </div>
    );
  }
}

export default App;
