import React, { Component } from "react";
import { MDBIcon } from "mdbreact";
import CarouselSlide from "./CarouselSlide.js";
import CarouselSelector from "./CarouselSelector.js";
import series1 from "../../images/reg-pics/series1.JPG";
import series2 from "../../images/reg-pics/series2.JPG";
import series3 from "../../images/reg-pics/series3.JPG";
import series4 from "../../images/reg-pics/series4.JPG";
import series5 from "../../images/reg-pics/series5.JPG";
import series6 from "../../images/reg-pics/series6.JPG";
import series7 from "../../images/reg-pics/series7.JPG";

import "./carousel.css";

class CarouselComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curIndex: 0,
      picturesArray: [
        { picture: series1 },
        { picture: series2 },
        { picture: series3 },
        { picture: series4 },
        { picture: series5 },
        { picture: series6 },
        { picture: series7 },
      ],
      isPaused: true,
    };
  }

  // allows selection on slide to move directly to that picture
  chooseSlide = (index) => {
    this.setState({
      curIndex: index,
    });
  };

  // prev = (evt) => {
  //   evt.preventDefault();
  //   let index = this.state.curIndex;
  //   let slidesLength = this.state.picturesArray.length;
  //   if (index < 1) {
  //     index = slidesLength;
  //   }
  //   --index;
  //   this.setState({
  //     curIndex: index,
  //   });
  // };

  // next = (evt) => {
  //   evt.preventDefault();
  //   let index = this.state.curIndex;
  //   // let { slides } = this.state;
  //   let slidesLength = this.state.picturesArray.length - 1;
  //   if (index === slidesLength) {
  //     index = -1;
  //   }
  //   ++index;
  //   this.setState({
  //     curIndex: index,
  //   });
  // };

  transition = () => {
    if (this.state.curIndex >= 0 && this.state.curIndex < 7) {
      this.setState({ curIndex: this.state.curIndex + 1 });
    }
    if (this.state.curIndex + 1 > 7) {
      this.setState({ curIndex: 0 });
    }
  };

  startTransition = () => {
    this.intervalID = setInterval(this.transition, 750);
    this.setState({
      isPaused: false,
    });
  };
  stopTransition = () => {
    clearInterval(this.intervalID);
    this.setState({
      isPaused: true,
    });
  };

  // showButton = () => {
  //   if (!this.intervalID) {
  //     return <MDBIcon icon="play-circle" size="3x" color="white" />;
  //   } else if (this.intervalID) {
  //     return <MDBIcon icon="stop-circle" size="3x" color="white" />;
  //   }
  // };

  render() {
    let playButtons;
    const { isPaused } = this.state;
    if (isPaused) {
      playButtons = (
        <MDBIcon
          icon="play-circle"
          size="3x"
          className="carousel__play"
          onClick={this.startTransition}
        />
      );
    }
    if (!isPaused) {
      playButtons = (
        <MDBIcon
          icon="stop-circle"
          size="3x"
          className="carousel__play"
          onClick={this.stopTransition}
        />
      );
    }

    return (
      <div className="carousel-container">
        <div clasName="carousel">
          {/* <MDBIcon
            icon="angle-double-left"
            // onClick={this.prev}
            onClick={this.stopTransition}
            className="carousel__arrow carousel__arrow--left"
            size="3x"
          /> */}
          <ul className="carousel__slides">
            {this.state.picturesArray.map((picture, index) => (
              <CarouselSlide
                key={index}
                index={index}
                curIndex={this.state.curIndex}
                picture={picture}
              />
            ))}
          </ul>
          {/* <MDBIcon
            icon="angle-double-right"
            // onClick={this.next}
            onClick={this.startTransition}
            className="carousel__arrow carousel__arrow--right"
            size="3x"
          /> */}
          <ul className="carousel__indicators">
            {this.state.picturesArray.map((picture, index) => (
              <CarouselSelector
                key={index}
                index={index}
                curIndex={this.state.curIndex}
                isCur={this.state.curIndex === index}
                onClick={(e) => this.chooseSlide(index)}
              />
            ))}
          </ul>
          {playButtons}
        </div>
      </div>
    );
  }
}
export default CarouselComp;
