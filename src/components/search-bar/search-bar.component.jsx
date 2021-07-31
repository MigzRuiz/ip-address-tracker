import React from "react";
import "./search-bar.style.scss";
import { ReactComponent as Arrow } from "../../assets/images/icon-arrow.svg";

const SearchBar = ({ handleChange, handleSubmit }) => {
  return (
    <div>
      <form className="search" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          className="search__box"
          placeholder="Enter IP Address"
          required
        />
        <button className="search__btn">
          <Arrow />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
