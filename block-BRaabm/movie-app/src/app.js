import React from "react";
import data from "./data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "all",
    };
  }
  handleChange = (i) => {
    this.setState({
      current: i,
    });
  };
  Movies = (props) => {
    return (
      <>
        <div className="movies">
          <div className="movies-list flex">
            {data.map((movie, i) => {
              return (
                <div className="movie">
                  <div className="hover">
                    <button
                      onClick={() => {
                        this.handleChange(i);
                      }}
                    >
                      More Info
                    </button>
                  </div>
                  <img src={movie.Images[0]} alt={movie.Title}></img>
                  <div className="movie-heading">
                    <h3>{movie.Title}</h3>
                    <span>{movie.Released}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  MovieDetails = (props) => {
    return (
      <div className="movie-details flex">
        <img className="width-30" src={props.Images[0]} alt={props.Title}></img>
        <div className="width-60">
          <h2 className="title">{props.Title}</h2>
          <p className="runtime">{props.Runtime}</p>
          <span className="rating">{props.imdbRating}</span>
          <span className="votes">{props.imdbVotes}</span>
          <p className="language">{props.Language}</p>
          <p className="genre">{props.Genre}</p>
          <p className="desc">{props.Plot}</p>
          <address className="director">{props.Director}</address>
          <p className="actors">{props.Actors}</p>
        </div>
        <button
          onClick={() => {
            this.setState({
              current: "all",
            });
          }}
          className="cross"
        >
          x
        </button>
      </div>
    );
  };
  render() {
    return (
      <div className="main">
        <h1>movies</h1>

        {this.state.current === "all" ? (
          <this.Movies />
        ) : (
          <this.MovieDetails {...data[this.state.current]} />
        )}
      </div>
    );
  }
}

export default App;
