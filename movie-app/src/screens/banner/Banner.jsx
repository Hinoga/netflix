import React, { useEffect, useState } from "react";
import "./banner.css";

import axios from "../../api/request";
import { base_img_url } from "../../api/config";
import resources from "../../api/resources";

const Banner = () => {
  const [movie, setMovies] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const request = await axios.get(resources.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    };
    fetch();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${base_img_url}${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h2 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h2>
      </div>
      <div className="banner--fade"></div>
    </header>
  );
};

export default Banner;
