import React, { Component } from "react";
import OutputBox from "../../components/output-box/output-box.component";
import SearchBar from "../../components/search-bar/search-bar.component";

import "./homepage.style.scss";

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="background">
          <div className="background__img"></div>
          <div className="wrapper">
            <h1 className="title"> IP Address Tracker</h1>
            <SearchBar
              handleChange={this.props.handleChange}
              handleSubmit={this.props.handleSubmit}
            />
            <OutputBox info={this.props.info} />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
