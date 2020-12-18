import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Header from "./component/Header";
import HeroList from "./component/HeroList";

const App = () => {
  const [comics, setComics] = useState([]);
  const [search, setSearch] = useState("");

  const getHero = async () => {
    const response = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/characters/?api_key=ddff1b591123ce4889c6d47c2438131ee46e71b5&format=json"
    );
    setComics(response.data.results);
  };

  useEffect(() => {
    getHero();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  let filteredHero = comics.filter((comic) => {
    return comic.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="App">
      <Header />
      <input
        className="input"
        type="search"
        placeholder="filter hero"
        onChange={handleChange}
      />
      <HeroList filteredHero={filteredHero} />
    </div>
  );
};

export default App;
