import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./row.css";

import axios from "../../api/request";
import { base_img_url } from "../../api/config";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    };
    fetch();
  }, [fetchUrl]);

  const handleOnClick = (movie) => {
    if (trailerUrl) return setTrailerUrl("");
    console.log(movie?.title || movie?.name || movie?.original_name || "");
    movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleOnClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterlarge"}`}
            src={`${base_img_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && (
        <YouTube
          videoId={trailerUrl}
          opts={{ height: "500", width: "100%", playerVars: { autoplay: 1 } }}
        />
      )}
    </div>
  );
};

export default Row;
