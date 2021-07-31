import "./App.css";
import { Component } from "react";

import HomePage from "./pages/homepage/homepage.component";

const API_KEY = process.env.REACT_APP_GEO_API_KEY;

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      ip: "",
      location: "",
      timezone: "",
      isp: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const resGeo = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${this.state.input}`
    );
    const dataGeo = await resGeo.json();

    this.setState({
      ip: dataGeo.ip,
      location: dataGeo.location.city,
      timezone: dataGeo.location.timezone,
      isp: dataGeo.isp,
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
      <div className="App">
        <HomePage
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          info={this.state}
        />
      </div>
    );
  }
}

export default App;
