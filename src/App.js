import "./App.css";
import { Component } from "react";

import HomePage from "./pages/homepage/homepage.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
