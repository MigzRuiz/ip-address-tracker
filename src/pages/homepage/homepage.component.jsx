import React, { Component } from "react";
import Map from "../../components/map/map.component";
import OutputBox from "../../components/output-box/output-box.component";
import SearchBar from "../../components/search-bar/search-bar.component";

import "./homepage.style.scss";

const API_KEY = process.env.REACT_APP_GEO_API_KEY;

class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      ip: "",
      location: "",
      timezone: "",
      isp: "",
      lat: "48.864716",
      lng: "2.349",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const resGeo = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${this.state.input}`
    );
    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    this.setState({
      ip: dataGeo.ip,
      location: dataGeo.location.city,
      timezone: dataGeo.location.timezone,
      isp: dataGeo.isp,
      lat: dataGeo.location.lat,
      lng: dataGeo.location.lng,
      center: [dataGeo.location.lat, dataGeo.location.lng],
    });
    console.log(this.state);
  };

  handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;

    this.setState({ input: value }, () => console.log(this.props));
    console.log(this.state);
  };

  render() {
    return (
      <div className="homepage">
        <div className="background">
          <div className="background__img"></div>
          <Map data={this.state}></Map>
        </div>
        <div className="wrapper">
          <h1 className="title"> IP Address Tracker</h1>
          <SearchBar
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <OutputBox data={this.state} />
        </div>
      </div>
    );
  }
}

export default HomePage;
