import "./App.css";
import { Component } from "react";

import HomePage from "./pages/homepage/homepage.component";

class App extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     input: "",
  //     ip: "",
  //     location: "",
  //     timezone: "",
  //     isp: "",
  //     lat: "",
  //     lng: "",
  //   };
  // }

  // handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const resGeo = await fetch(
  //     `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${this.state.input}`
  //   );
  //   const dataGeo = await resGeo.json();
  //   console.log(dataGeo);

  //   this.setState({
  //     ip: dataGeo.ip,
  //     location: dataGeo.location.city,
  //     timezone: dataGeo.location.timezone,
  //     isp: dataGeo.isp,
  //     lat: dataGeo.location.lat,
  //     lng: dataGeo.location.lng,
  //   });
  //   console.log(this.state);
  // };

  // handleChange = (e) => {
  //   e.preventDefault();
  //   const { value } = e.target;

  //   this.setState({ input: value }, () => console.log(this.props));
  //   console.log(this.state);
  // };

  render() {
    return (
      <div className="App">
        <HomePage
        // handleChange={this.handleChange}
        // handleSubmit={this.handleSubmit}
        // data={this.state}
        />
      </div>
    );
  }
}

export default App;
