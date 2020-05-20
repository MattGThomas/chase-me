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
import YouTube from "react-youtube";
import Roll from "react-reveal/Roll";
import Fade from "react-reveal/Fade";
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
    // object for ReactYoutube component, takes info like width for video
    const opts = {
      width: "100%",
    };
    return (
      <div>
        <div style={{ color: "#f44336" }} className="landing-div">
          <h1 className="landing-header">Chase Me If You Can Productions</h1>
          <p className="landing-subtext">
            Let's Bring Your Vision To Life
            <br />A one stop shop for all your Videography, Photography, Drone
            Footage & editing needs
          </p>
          <MDBContainer>
            <MDBRow className="landing-videos">
              <MDBCol>
                <Roll left>
                  <div>
                    <span className="landing-video-text">
                      lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum
                    </span>
                    <YouTube videoId="98lu__RIiK0" opts={opts} />
                    {/* <ReactPlayer
                      url="https://www.youtube.com/watch?v=98lu__RIiK0"
                      width="100%"
                    /> */}
                  </div>
                </Roll>
                <Fade left>
                  <div style={{ paddingTop: "17%" }}>
                    <span className="landing-video-text">
                      lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum
                    </span>
                    <YouTube videoId="2a7Q6yc8x_w" opts={opts} />
                    {/* <ReactPlayer
                      url="https://www.youtube.com/watch?v=2a7Q6yc8x_w"
                      width="100%"
                    /> */}
                  </div>
                </Fade>
              </MDBCol>

              <MDBCol>
                <Roll right>
                  <div style={{ paddingTop: "17%" }}>
                    <span className="landing-video-text">
                      lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum
                    </span>
                    <YouTube videoId="mbzu3kcq1A8" opts={opts} />
                    {/* <ReactPlayer
                      url="https://www.youtube.com/watch?v=mbzu3kcq1A8"
                      width="100%"
                    /> */}
                  </div>
                </Roll>

                <Fade right>
                  <div style={{ paddingTop: "17%" }}>
                    <span className="landing-video-text">
                      lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum
                    </span>
                    <YouTube videoId="uPTjSSNRTQk" opts={opts} />
                    {/* <ReactPlayer
                      url="https://www.youtube.com/watch?v=uPTjSSNRTQk"
                      width="100%"
                    /> */}
                  </div>
                </Fade>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="landing-photo-reel">
            {/* <MDBRow> */}
            <span>
              Videography, Photography, Drone footage, I specialize in it all
            </span>
            {/* <div className="landing-photos">
              <div className="picture-box">
                <div className="picture picture-box-inner">
                  <div className="picture-box-front">
                    <img src={chase} alt="" width="100%" height="275px" />
                  </div>
                  <div className="picture-box-back">
                    <h2>lorem Videography</h2>
                    <p>hello Videography</p>
                  </div>
                </div>
              </div>

              <div className="picture-box">
                <div className="picture picture-box-inner">
                  <div className="picture-box-front">
                    <img src={dempseys} alt="" width="100%" height="275px" />
                  </div>
                  <div className="picture-box-back">
                    <h2>lorem Videography</h2>
                    <p>hello Videography</p>
                  </div>
                </div>
              </div>

              <div className="picture-box">
                <div className="picture picture-box-inner">
                  <div className="picture-box-front">
                    <img src={baseball} alt="" width="100%" height="275px" />
                  </div>
                  <div className="picture-box-back">
                    <h2>lorem Videography</h2>
                    <p>hello Videography</p>
                  </div>
                </div>
              </div>

              <div className="picture-box">
                <div className="picture picture-box-inner">
                  <div className="picture-box-front">
                    <img src={party} alt="" width="100%" height="275px" />
                  </div>
                  <div className="picture-box-back">
                    <h2>lorem Videography</h2>
                    <p>hello Videography</p>
                  </div>
                </div>
              </div>
              
            </div> */}
          </div>

          {/* <Link to="/about"> */}
          <div>
            <div className="landing-about text-right">
              <h3>insert something to point to about page</h3>
              <MDBContainer>
                <MDBRow className="d-flex">
                  <div>
                    <MDBCol className="">
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
