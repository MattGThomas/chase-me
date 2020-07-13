import React from "react";
import ReactPlayer from "react-player";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";

import "./hero.css";
function Hero() {
  return (
    <div style={{ color: " #bfbfbf", paddingTop: "7%" }}>
      <h2 className="hero-header">Hero 101!</h2>
      <p className="hero-subtext">Take a look at the Hero 101 series!</p>
      <MDBContainer>
        {/* <MDBContainer style={{ backgroundImage: `url(${logo})`, color: "black" }}> */}
        <MDBRow className="hero-row" style={{ paddingTop: "3%" }}>
          <MDBCol style={{ width: "100%" }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ssTwn05BSLo&t=38s"
              width="100%"
            />
          </MDBCol>
          <MDBCol md="4">
            <p>Hero 101: Ep. 7</p>
            <p>Things heat up in the Villains Association!</p>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <div
            style={{
              background: "#212121",
              height: "225px",
              width: "100%",
              color: "white",
            }}
          />
        </MDBRow>
        <MDBRow className="hero-row">
          <MDBCol>
            <span>Hero 101: Ep. 6</span>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=jcEbAwHOJKY"
              width="100%"
            />
          </MDBCol>
          <MDBCol>
            <span>Hero 101: Ep. 5</span>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Og3FZ1dTMy4"
              width="100%"
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <div
            style={{
              background: "#212121",
              height: "225px",
              width: "100%",
              color: "white",
            }}
          />
        </MDBRow>
        <MDBRow className="hero-row">
          <MDBCol>
            <span>Hero 101: Ep. 4</span>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=-DCn4FNxDdo"
              width="100%"
            />
          </MDBCol>
          <MDBCol>
            <span>Hero 101: Ep. 3</span>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Fg2gwx9dmUM"
              width="100%"
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <div
            style={{
              background: "#212121",
              height: "225px",
              width: "100%",
              color: "white",
            }}
          />
        </MDBRow>
        <MDBRow className="hero-row">
          <MDBCol>
            <span>Hero 101: Ep. 2</span>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=An33_loIqjs"
              width="100%"
            />
          </MDBCol>
          <MDBCol>
            <span>Hero 101: Ep. 1</span>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=XbqzVNOkNuo&t=17s"
              width="100%"
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Hero;
