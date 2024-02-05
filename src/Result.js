import React from "react";

const Result = ({ result }) => {
  // Base URL for TMDb images
  const basePosterUrl = "https://image.tmdb.org/t/p/";

  // Full poster path
  const fullPosterPath = result.poster_path
    ? `${basePosterUrl}w500${result.poster_path}`
    : "path_to_placeholder_image";

  return (
    <div className="result border border-grey border-4 mb-4 bounce-top">
      <img src={fullPosterPath} alt="" />

      <h5>{result.title}</h5>
      <h6>Rating: {result.vote_average}</h6>
    </div>
  );
};

export default Result;
