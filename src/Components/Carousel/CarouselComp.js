import React, { Component } from "react";
import { MDBIcon } from "mdbreact";
import CarouselSlide from "./CarouselSlide.js";
import CarouselSelector from "./CarouselSelector.js";
import series1 from "../../images/reg-pics/series1.JPG";
import series2 from "../../images/reg-pics/series2.JPG";
import "./carousel.css";

class CarouselComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curIndex: 0,
      picturesArray: [
        { picture: series1 },
        { picture: series2 },
        {
          content:
            "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
          author: "Bane",
          source: "facebook",
        },
        {
          content:
            "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
          author: "Ra's Al Ghul",
          source: "Snapchat",
        },
        {
          content:
            "Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
          author: "Joker",
          source: "facebook",
        },
      ],
    };
  }

  // allows selection on slide to move directly to that picture
  chooseSlide = (index) => {
    this.setState({
      curIndex: index,
    });
  };

  prev = (evt) => {
    evt.preventDefault();
    let index = this.state.curIndex;

    let slidesLength = this.state.picturesArray.length;

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
    let { slides } = this.state;
    let slidesLength = this.state.picturesArray.length - 1;

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
      // <div>
      //   {this.state.picturesArray.map((picture, index) => (
      //     <CarouselSlide
      //       key={index}
      //       curIndex={this.state.curIndex}
      //       picture={picture}
      //     />
      //   ))}
      // </div>
      <div className="carousel-container">
        <div clasName="carousel">
          <MDBIcon
            icon="angle-double-left"
            onClick={this.prev}
            className="carousel__arrow carousel__arrow--left"
            size="3x"
          />
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
          <MDBIcon
            icon="angle-double-right"
            onClick={this.next}
            className="carousel__arrow carousel__arrow--right"
            size="3x"
          />
          <ul className="carousel__indicators">
            {this.state.picturesArray.map((picture, index) => (
              <CarouselSelector
                key={index}
                index={index}
                curIndex={this.state.curIndex}
                isCur={this.state.curIndex == index}
                onClick={(e) => this.chooseSlide(index)}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default CarouselComp;
// class CarouselComp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       curIndex: 0,
//       slides: [{ picture: series1 }, { picture: series2 }],
//     };
//   }

//   chooseSlide = (index) => {
//     this.setState({
//       curIndex: index,
//     });
//   };

//   prev = (evt) => {
//     evt.preventDefault();
//     let index = this.state.curIndex;
//     let { slides } = this.state;
//     let slidesLength = this.state.slides.length;

//     if (index < 1) {
//       index = slidesLength;
//     }
//     --index;

//     this.setState({
//       curIndex: index,
//     });
//   };

//   next = (evt) => {
//     evt.preventDefault();
//     let index = this.state.curIndex;
//     let { slides } = this.state;
//     let slidesLength = this.state.slides.length - 1;

//     if (index === slidesLength) {
//       index = -1;
//     }
//     ++index;

//     this.setState({
//       curIndex: index,
//     });
//   };
//   render() {
//     return (
//       <div className="carousel-container">
//         <div clasName="carousel">
//           <MDBIcon
//             icon="angle-double-left"
//             onClick={this.prev}
//             className="carousel__arrow carousel__arrow--left"
//             size="3x"
//           />
//           <ul>
//             {this.state.slides.map((slide, index) => (
//               <CarouselSlide
//                 key={index}
//                 index={index}
//                 curIndex={this.state.curIndex}
//                 slide={slide}
//               />
//             ))}
//           </ul>
//           <MDBIcon
//             icon="angle-double-right"
//             onClick={this.next}
//             className="carousel__arrow carousel__arrow--right"
//             size="3x"
//           />
//           <ul className="carousel__slide">
//             {this.state.slides.map((slide, index) => (
//               <CarouselSelector
//                 key={index}
//                 index={index}
//                 curIndex={this.state.curIndex}
//                 isCur={this.state.curIndex === index}
//                 onClick={this.chooseSlide}
//               />
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// export default CarouselComp;
