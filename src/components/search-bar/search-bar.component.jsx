import React, { Component } from "react";
import "./search-bar.style.scss";
import { ReactComponent as Arrow } from "../../assets/images/icon-arrow.svg";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form className="search">
          <input
            type="text"
            className="search__box"
            placeholder="192.168.10.210"
          />
          <button className="search__btn">
            <Arrow />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
