import React from "react";
import "../App.css";
import StarRatingComponent from "react-star-rating-component";
import { Link, Route, Switch } from "react-router-dom";
export const MovieCard = ({ movie }) => {
  return (
    <article className="MovieCard">
      <img
        style={{
          borderRadius: "10px",
          height: "400px",
          maxHeight: "400px",
          width: "302px",
          maxWidth: "320px",
        }}
        src={movie.movieImg}
      ></img>
      <span>{movie.movieName}</span>
      <div className="starRating">
        <StarRatingComponent
          className="starRatingComp"
          name="movieRating"
          starCount={5}
          value={parseInt(movie.movieRating)}
        />
      </div>
    </article>
  );
};
