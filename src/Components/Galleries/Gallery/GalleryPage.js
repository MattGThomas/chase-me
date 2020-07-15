import React, { Component } from "react";

import CarouselComp from "../../Carousel/CarouselComp.js";
import "../gallery.css";
class GalleryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideData: [],
    };
  }
  render() {
    return (
      <div>
        <h2 className="gallery-header">Welcome to my gallery</h2>

        <CarouselComp />
      </div>
    );
  }
}
export default GalleryPage;
