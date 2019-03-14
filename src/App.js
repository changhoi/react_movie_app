import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  state = {};
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "metrix",
            poster:
              "https://movie-phinf.pstatic.net/20111224_282/1324652930159TOMLl_JPEG/movie_image.jpg?type=m665_443_2"
          },
          {
            title: "Old boy",
            poster:
              "https://movie-phinf.pstatic.net/20111222_145/1324537095951YRCQl_JPEG/movie_image.jpg?type=m665_443_2"
          },
          {
            title: "Zelda",
            poster:
              "http://blogfiles.naver.net/MjAxNzExMDRfMjQ1/MDAxNTA5ODA0NTE2ODEy.cr_VQlnDxPYO0gxKKpcpVqosdA90JahwGIytjYCY4Acg.VWLBCH9Vv5evxxsjaA_JQ9BEYBuunlVt_qLF_4bCUEgg.JPEG.ehdrbfb/breath-main.jpg"
          }
        ]
      });
    }, 3000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => (
      <Movie title={movie.title} poster={movie.poster} key={index} />
    ));

    return movies;
  };

  render() {
    console.log("render");
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
