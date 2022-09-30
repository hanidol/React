import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Card from "./Card";
import Details from "./Details";

let API_key = "&api_key=76e16922d1a7765f7bb0cea061d13d45";
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;

const Home = () => {
  const [movieData, setData] = useState([]);
  const [url_set] = useState(url);

  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, [url_set]);

  return (
    <div className="container">
      {movieData.length === 0 ? (
        <p className="notfound">Not found</p>
      ) : (
        movieData.map((res, pos) => {
          return <Card info={res} key={pos} />;
        })
      )}
      <Routes>
        <Route path="/Overview" element={<Details />}></Route>
      </Routes>
    </div>
  );
};
export default Home;
