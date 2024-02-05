import React from "react";
import "./App.css";
const Search = ({ handleInput, searchResult }) => {
  return (
    <div className="search-input w-100 mt-3 mb-5 ">
      <input
        type="text"
        name="movie"
        className="w-50 p-2 rounded-5 font-weight-bold"
        placeholder="Search Movie..."
        onChange={handleInput}
        onKeyDown={searchResult}
      />
    </div>
  );
};

export default Search;
