import "./App.css";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { MovieList } from "./Component/MovieList";
import { AddMovie } from "./Component/AddMovie";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Filter } from "./Component/Filter";
import StarRatingComponent from "react-star-rating-component";
import { Link, Route, Switch } from "react-router-dom";
const movies = [
  {
    id: uuidv4(),
    movieName: "Gone Girl",
    movieImg: "https://wallpapercave.com/wp/wp3623264.jpg",
    movieRating: 5,
    trailer: "https://www.youtube.com/watch?v=ItEpaXZ6R_M",
  },
  {
    id: uuidv4(),
    movieName: "The invisible Guest",
    movieImg:
      "https://m.media-amazon.com/images/M/MV5BMDk0YzAwYjktMWFiZi00Y2FmLWJmMmMtMzUyZDZmMmU5MjkzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    movieRating: 4,
    trailer: "https://www.youtube.com/watch?v=5hnO461B0Ms",
  },
  {
    id: uuidv4(),
    movieName: "The Revenant",
    movieImg:
      "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    movieRating: 4,
    trailer: "https://www.youtube.com/watch?v=LoebZZ8K5N0",
  },
  {
    id: uuidv4(),
    movieName: "Green Book",
    movieImg:
      "http://img.over-blog-kiwi.com/0/53/58/53/20200106/ob_9900de_91pwxip8fol-ac-sl1500.jpg",
    movieRating: 4,
    trailer: "https://www.youtube.com/watch?v=QkZxoko_HC0",
  },
];
/* <MovieList movies={movieList} /> */
function App() {
  const [movieList, setMovieList] = useState(movies);
  const [searchInput, setsearchInput] = useState("");
  const [star, setStar] = useState(0);

  const getData = (info) => {
    console.log(info);
    setMovieList([...movieList, info]);
  };
  const filterInput = (info) => {
    setsearchInput(info);
    console.log(info);
  };
  const StarInput = (info) => {
    setStar(info);
    console.log(info);
  };

  return (
    <div className="bg">
      <Filter filterInput={filterInput} StarInput={StarInput} />
      <MovieList
        movies={movieList.filter(
          (movie) =>
            movie.movieName
              .toLowerCase()
              .includes(searchInput.trim().toLowerCase()) &&
            movie.movieRating >= star
        )}
      />
      <AddMovie getData={getData} />
    </div>
  );
}
export default App;
