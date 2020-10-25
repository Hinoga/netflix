import React from "react";
import "./App.css";

import Row from "./screens/row/Row";
import Banner from "./screens/banner/Banner";
import Nav from "./screens/nav/Nav";

import requests from "./api/resources";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      {/* <Row title="Action" fetchUrl={requests.fetchActionMovies} /> */}
      {/* <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  );
};

export default App;
