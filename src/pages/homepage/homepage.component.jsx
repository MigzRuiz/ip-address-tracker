import React from "react";
import OutputBox from "../../components/output-box/output-box.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import "./homepage.style.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="background">
      <div className="background__img"></div>
    </div>
    <div className="wrapper">
      <h1 className="title"> IP Address Tracker</h1>
      <SearchBar />
      <OutputBox />
    </div>
  </div>
);

export default HomePage;
