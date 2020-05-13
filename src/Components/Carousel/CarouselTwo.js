import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class CarouselTwo extends Component {
  render() {
    return (
      <Carousel
        infiniteLoop="true"
        autoPlay="true"
        swipeable="true"
        showThumbs="false"
        // width="80%"
        // showThumbs="false"
        // thumbWidth="20%"
        // height="80%"
      >
        {/* renderThumbs: (children: React.ReactChild[]) => React.ReactChild[] */}
        <div>
          <img
            src="https://placedog.net/800/640?id=81"
            alt=""
            height="250px"
            // width="25%"
          />
        </div>
        <div>
          <img src="https://placedog.net/800/640?id=82" alt="" height="250px" />
        </div>
        <div>
          <img src="https://placedog.net/800/640?id=83" alt="" height="250px" />
        </div>
        <div>
          <img src="https://placedog.net/800/640?id=84" alt="" height="250px" />
        </div>
        <div>
          <img src="https://placedog.net/800/640?id=85" alt="" height="250px" />
        </div>
      </Carousel>
    );
  }
}

export default CarouselTwo;
