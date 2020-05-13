import React, { Component } from "react";
// import { Link } from "react-router-dom";
import CarouselComp from "../Carousel/CarouselComp";

import "./landingpage.css";
import { MDBInput } from "mdbreact";

const slideData = [
  {
    content: (
      <img src="https://placedog.net/800/640?id=81" alt="" height="300px" />
    ),
  },
  {
    content: (
      <img src="https://placedog.net/800/640?id=82" alt="" height="300px" />
    ),
  },
  {
    content: (
      <img src="https://placedog.net/800/640?id=83" alt="" height="300px" />
    ),
  },
  {
    content: (
      <img src="https://placedog.net/800/640?id=84" alt="" height="300px" />
    ),
  },
  {
    content: (
      <img src="https://placedog.net/800/640?id=85" alt="" height="300px" />
    ),
  },
];
class LandingPage extends Component {
  render() {
    return (
      <div>
        <CarouselComp slides={slideData} />
        {/* <img src="https://placedog.net/800/640?id=81" /> */}
        {/* <h1 style={{ color: "black", paddingTop: "25%" }}>
          Chase Me if You Can
        </h1>
        <MDBInput label="hello" /> */}
      </div>
    );
  }
}

export default LandingPage;
