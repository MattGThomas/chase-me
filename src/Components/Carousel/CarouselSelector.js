import React, { Component } from "react";
import "./carousel.css";
import { MDBIcon } from "mdbreact";
class CarouselSelector extends Component {
  render() {
    return (
      <li>
        <MDBIcon
          icon="minus"
          className={
            this.props.index === this.props.curIndex
              ? "carousel__indicator carousel__indicator--active"
              : "carousel__indicator"
          }
          onClick={this.props.chooseSlide}
        />
      </li>
    );
  }
}

export default CarouselSelector;
