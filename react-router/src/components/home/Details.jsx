import React from "react";

const Details = (movie) => {
  console.log(movie.info);
  return (
    <div className="cards">
      <div className="movie-details">
        <h1>Overview</h1>
        <p> {movie.info.overview} </p>
      </div>
    </div>
  );
};
export default Details;
