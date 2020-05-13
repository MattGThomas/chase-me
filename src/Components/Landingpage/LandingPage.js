import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import CarouselComp from "../Carousel/CarouselComp";
// import logo from "../../images/reg-pics/IMG_3070.PNG";
// import CarouselTwo from "../Carousel/CarouselTwo";
import ReactPlayer from "react-player";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import dempseys from "../../images/reg-pics/dempseys.JPG";
import chase from "../../images/drone-pics/chase.JPG";
import "./landingpage.css";
// import { MDBInput } from "mdbreact";

// const slideData = [
//   {
//     content: (
//       <img src="https://placedog.net/800/640?id=81" alt="" height="300px" />
//     ),
//   },
//   {
//     content: (
//       <img src="https://placedog.net/800/640?id=82" alt="" height="300px" />
//     ),
//   },
//   {
//     content: (
//       <img src="https://placedog.net/800/640?id=83" alt="" height="300px" />
//     ),
//   },
//   {
//     content: (
//       <img src="https://placedog.net/800/640?id=84" alt="" height="300px" />
//     ),
//   },
//   {
//     content: (
//       <img src="https://placedog.net/800/640?id=85" alt="" height="300px" />
//     ),
//   },
// ];
class LandingPage extends Component {
  render() {
    return (
      <div>
        <div style={{ color: "#dc3545" }} className="landing-div">
          <h1 className="landing-header">Chase Me If You Can Productions</h1>
          <p className="landing-subtext">Let's Bring Your Vision To Life</p>
          <MDBContainer>
            <MDBRow className="landing-videos">
              <MDBCol>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=98lu__RIiK0"
                  width="100%"
                />
                <span className="landing-video-text">
                  lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum
                </span>
              </MDBCol>

              <MDBCol>
                <span className="landing-video-text">
                  lorem ipsum, lorem ipsum, lorem ipsum
                </span>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=5ZtVKIydjZI"
                  width="100%"
                />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <img src={chase} alt="" width="50%" />
              <img src={dempseys} alt="" width="50%" />
            </MDBRow>
          </MDBContainer>
          {/* <img src={logo} alt="" /> */}
        </div>
      </div>
    );
  }
}

export default LandingPage;
