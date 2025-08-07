import React from "react";
import styled from "./SearchBar.module.css";

function SearchBar({ search, setSearch, handleSearch }) {
  return (
    <form onSubmit={handleSearch} className={styled.searchBarContainer}>
      <input
        type="search"
        placeholder="Search for a city.."
        autoComplete="off"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styled.searchInput}
      />

      <button type="submit" className={styled.searchBarButton}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
