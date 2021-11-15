import React from "react";
import { MovieCard } from "./MovieCard";

export const MovieList = ({ movies }) => {
  return (
    <div className="mList">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
