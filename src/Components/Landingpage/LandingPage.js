import React, { Component } from "react";
import { Link } from "react-router-dom";

import { MDBRow, MDBCol, MDBContainer, MDBBtn } from "mdbreact";

import topview from "../../images/reg-pics/topview.jpeg";
import b_raster from "../../images/reg-pics/black raster.png";
import w_raster from "../../images/reg-pics/white raster.png";
import YouTube from "react-youtube";
import Roll from "react-reveal/Roll";
import Fade from "react-reveal/Fade";

import "./landingpage.css";

class LandingPage extends Component {
  render() {
    // object for ReactYoutube component, takes info like width for video
    const opts = {
      width: "100%",
    };
    return (
      <div>
        <div style={{ color: "#f44336" }} className="landing-div">
          <div className="landing-container">
            <img src={topview} alt="" width="100%" />
            <img
              src={w_raster}
              alt=""
              className="landing-header centered"
              width="100%"
            />
          </div>

          <h1 className="landing-header">
            Chase Me If You Can
            <br /> Productions
          </h1>
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
                      'Smoke Something' Music Video
                    </span>
                    <YouTube videoId="98lu__RIiK0" opts={opts} />
                  </div>
                </Roll>
                <Fade left>
                  <div style={{ paddingTop: "17%" }}>
                    <span className="landing-video-text">
                      Mavic Pro (Drone Footage)
                    </span>
                    <YouTube videoId="5ZtVKIydjZI" opts={opts} />
                  </div>
                </Fade>
              </MDBCol>

              <MDBCol>
                <Roll right>
                  <div style={{ paddingTop: "17%" }}>
                    <span className="landing-video-text">
                      Fireworks from Above (Drone Footage)
                    </span>
                    <YouTube videoId="vGfDWqofInY" opts={opts} />
                  </div>
                </Roll>

                <Fade right>
                  <div style={{ paddingTop: "17%" }}>
                    <span className="landing-video-text">AAGB Dynasty</span>
                    <YouTube videoId="uqh6krh-Y8U" opts={opts} />
                  </div>
                </Fade>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <div>
            <div className="landing-about">
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
              <h1 className="landing-header">
                Chase Me If You Can <br />
                Productions
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
