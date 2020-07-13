import React, { Component } from "react";
import "./carousel.css";

class CarouselSlide extends Component {
  render() {
    return (
      <li
        className={
          this.props.index === this.props.curIndex
            ? "carousel__slide carousel__slide--active"
            : "carousel__slide"
        }
      >
        <p className="carousel-slide__content">{this.props.picture.content}</p>

        <p>
          <img src={this.props.picture.picture} width="80%" />
          <strong>{this.props.picture.author}</strong>,{" "}
          <small>{this.props.picture.source}</small>
        </p>
      </li>
    );
  }
}

export default CarouselSlide;
