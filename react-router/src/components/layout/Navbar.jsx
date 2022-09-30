import { Link } from "react-router-dom";
import React, { useState } from "react";
let API_key = "&api_key=76e16922d1a7765f7bb0cea061d13d45";
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
let arr = ["Popular", "Action", "Drama", "Comedy"];

const Navbar = () => {
  const [setUrl] = useState(url);
  const [search, setSearch] = useState();

  const getData = (movieType) => {
    if (movieType === "Popular") {
      url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
    }
    if (movieType === "Action") {
      url =
        base_url +
        "/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc" +
        API_key;
    }

    if (movieType === "Drama") {
      url =
        base_url +
        "/discover/movie?with_genres=18&primary_release_year=2014" +
        API_key;
    }
    if (movieType === "Comedy") {
      url =
        base_url +
        "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" +
        API_key;
    }
    setUrl(url);
  };
  const searchMovie = (evt) => {
    if (evt.key === "Enter") {
      url =
        base_url +
        "search/movie?api_key=76e16922d1a7765f7bb0cea061d13d45&query=" +
        search;
      setUrl(url);
      setSearch(" ");
    }
  };
  return (
    <nav>
      <div className="header">
        <nav>
          <ul>
            {arr.map((value) => {
              return (
                <li>
                  <Link
                    to="/#"
                    name={value}
                    onClick={(e) => {
                      getData(e.target.name);
                    }}
                  >
                    {value}
                  </Link>
                </li>
              );
            })}
          </ul>
          <hr />
        </nav>
        <form>
          <div className="search-btn">
            <input
              type="text"
              placeholder="Enter Movie Name "
              className="inputText"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
              onKeyPress={searchMovie}
            ></input>
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
};
export default Navbar;
