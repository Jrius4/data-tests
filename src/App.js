import React, { Component } from "react";
import CostomLayout from "./components/layoutAlpha";
import BadgezC from "./components/containers/badgezC";
import Contentstext from "./components/containers/Contentstext";
import BacTopp from "./components/B2top";

class App extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <BadgezC />
        <CostomLayout>
          <Contentstext />
        </CostomLayout>
        <BacTopp />
      </div>
    );
  }
}

export default App;
