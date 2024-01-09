import React from "react";
import "./search.css";
import search from "../assets/images/search.svg";

const Search = ({ placeholder, className }) => {
  return (
    <div className={className}>
      <img src={search} loading="lazy" alt="..." />
      <input
        className={
          className === "main__search" ? "main__search__input" : "search__input"
        }
        type="search"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Search;
