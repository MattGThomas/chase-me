import React, { Component } from "react";
import { MDBIcon } from "mdbreact";
import CarouselSlide from "./CarouselSlide.js";
import CarouselSelector from "./CarouselSelector.js";
import "./carousel.css";

class CarouselComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curIndex: 0,
    };
  }

  chooseSlide = (index) => {
    this.setState({
      curIndex: index,
    });
  };

  prev = (evt) => {
    evt.preventDefault();
    let index = this.state.curIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }
    --index;

    this.setState({
      curIndex: index,
    });
  };

  next = (evt) => {
    evt.preventDefault();
    let index = this.state.curIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }
    ++index;

    this.setState({
      curIndex: index,
    });
  };
  render() {
    return (
      <div className="carousel-container">
        <div clasName="carousel">
          <MDBIcon
            icon="angle-double-left"
            onClick={this.prev}
            className="carousel__arrow carousel__arrow--left"
            size="3x"
          />
          <ul>
            {this.props.slides.map((slide, index) => (
              <CarouselSlide
                key={index}
                index={index}
                curIndex={this.state.curIndex}
                slide={slide}
              />
            ))}
          </ul>
          <MDBIcon
            icon="angle-double-right"
            onClick={this.next}
            className="carousel__arrow carousel__arrow--right"
            size="3x"
          />
          <ul className="carousel__slide">
            {this.props.slides.map((slide, index) => (
              <CarouselSelector
                key={index}
                index={index}
                curIndex={this.state.curIndex}
                isCur={this.state.curIndex === index}
                onClick={this.chooseSlide}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default CarouselComp;
