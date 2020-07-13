import React, { Component } from "react";

import CarouselComp from "../Carousel/CarouselComp.js";
class DronePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideData: [],
    };
  }
  render() {
    return (
      <div style={{ color: "white" }}>
        <h2>hello</h2>
        <p>nope</p>

        <CarouselComp />
      </div>
    );
  }
}
export default DronePage;
