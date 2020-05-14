import React, { Component } from "react";
import { Link } from "react-router-dom";
// import CarouselComp from "../Carousel/CarouselComp";
// import logo from "../../images/reg-pics/IMG_3070.PNG";
// import CarouselTwo from "../Carousel/CarouselTwo";
import ReactPlayer from "react-player";
import { MDBRow, MDBCol, MDBContainer, MDBBtn } from "mdbreact";
import dempseys from "../../images/reg-pics/dempseys.JPG";
import chase from "../../images/drone-pics/chase.JPG";
import baseball from "../../images/reg-pics/baseball.JPG";
import party from "../../images/reg-pics/party.JPG";
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
        <div style={{ color: "#f44336" }} className="landing-div">
          <h1 className="landing-header">Chase Me If You Can Productions</h1>
          <p className="landing-subtext">
            Let's Bring Your Vision To Life
            <br />A one stop shop for all your Videography, Photography, and
            Drone Footage & editing needs
          </p>
          <MDBContainer>
            <MDBRow className="landing-videos">
              <MDBCol>
                <div>
                  <span className="landing-video-text">
                    lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum
                  </span>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=98lu__RIiK0"
                    width="100%"
                  />
                </div>

                <div style={{ paddingTop: "17%" }}>
                  <span className="landing-video-text">
                    lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum
                  </span>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=2a7Q6yc8x_w"
                    width="100%"
                  />
                </div>
              </MDBCol>

              <MDBCol>
                <div style={{ paddingTop: "17%" }}>
                  <span className="landing-video-text">
                    lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum
                  </span>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=mbzu3kcq1A8"
                    width="100%"
                  />
                </div>

                <div style={{ paddingTop: "17%" }}>
                  <span className="landing-video-text">
                    lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum
                  </span>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=uPTjSSNRTQk"
                    width="100%"
                  />
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="landing-photo-reel">
            {/* <MDBRow> */}
            <span>
              Videography, Photography, Drone footage, I specialize in it all
            </span>
            <div style={{ minWidth: "100vw" }}>
              <img src={chase} alt="" width="25%" height="275px" />
              <img src={dempseys} alt="" width="25%" height="275px" />
              <img src={baseball} alt="" width="25%" height="275px" />
              <img src={party} alt="" width="25%" height="275px" />
            </div>
          </div>

          {/* <Link to="/about"> */}
          <div>
            <div className="landing-about text-right">
              <h3>insert something to point to about page</h3>
              <MDBContainer>
                <MDBRow>
                  <div>
                    <MDBCol className="d-flex">
                      <Link to="/about">
                        <MDBBtn outline color="red">
                          The Difference
                        </MDBBtn>
                      </Link>
                      <Link to="/contact-us">
                        <MDBBtn outline color="red">
                          Contact Me
                        </MDBBtn>
                      </Link>
                    </MDBCol>
                  </div>

                  <MDBCol className="text-right">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque
                      <br />
                      scelerisque augue pharetra eros elementum, et accumsan
                      nisi
                      <br />
                      ultricies. Sed quis dui velit.
                      <br /> Integer posuere efficitur ipsum ut convallis. Sed
                      finibus mauris libero,
                      <br /> eget imperdiet lacus bibendum eget. Vestibulum
                      <br /> turpis urna, imperdiet a consequat in, luctus non
                      odio.
                    </span>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </div>
          </div>
          {/* </Link> */}
          {/* </MDBRow> */}

          {/* <img src={logo} alt="" /> */}
        </div>
      </div>
    );
  }
}

export default LandingPage;
