import React from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";

import chase from "../../images/reg-pics/chase.JPG";
import "./about.css";

const About = (props) => {
  return (
    <div className="about-spacing">
      <MDBContainer style={{ fontSize: "1.2rem", color: "#bfbfbf" }}>
        <h2 className="about-header">Meet the Man Behind The Camera</h2>
        <MDBRow className="about-content">
          {/* <h2>Meet the man behind the camera</h2> */}
          {/* <MDBCol> */}
          {/* <img
              src={drone_chase}
              alt="Chase with drone pic"
              width="80%"
              //   height="80%"
              style={{ paddingBottom: "10%" }}
            /> */}
          {/* <div style={{ marginRight: "3%" }}> */}
          <MDBCol>
            <div className="about-pics text-right">
              <img
                src={chase}
                alt=""
                // width="100%"
                height="300px"
                style={{ paddingBottom: "4%" }}
              />
              {/* </div> */}
              {/* <img src="https://placedog.net/800/640?id=3" alt="" width="80%" /> */}
            </div>
          </MDBCol>
          <MDBCol>
            <div className="offers">
              <span className="new-about-header">What I Offer:</span>
              <br />
              <br />
              - Photography – wedding, senior photos, family portraits, etc…
              <br />
              <br />- Videography – events, <strong><a style={{color: 'grey'}} target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UCDRkpkT0F62mWB8Jpn89I-g"drone> footage</a></strong>,
              music videos, sketches and shorts, etc…
              <br />
              <br />
              - Audio – podcasts, commercials, narratives, etc…
              <br />
              <br />
              - Design – posters, logos
              <br />
              <br />
              - Editing – video, audio, and photographs
              <br />
            </div>
          </MDBCol>

          {/* </MDBCol> */}
          <div className="text-left">
            {/* <strong> */}
            <p className="about-para">
              <span className=" new-about-header">Create to Innovate!</span>
              <br />
              <br />
              Chase Me If You Can is where passion and creativity come together
              to make your vision a reality.
              <br />
              <br />
              After pursuing a Bachelor’s in Electronic Media from Wichita State
              University, I discovered that visuals and cinematics were where my
              main interests lie. I’ve been casually making videos for years and
              moved onto more professional videography and audiovisual services
              in 2016. <br />
              <br />
              Since beginning my career, I have completed multiple mass media
              projects and jobs including photo shoots, podcasts, short films,
              music videos, live streams, skits, and more. I recently added a
              drone to my arsenal, which allows me to record from even more
              heights and angles. <br />
              <br />
              These days I am pursuing my Master’s in Multimedia Videography at
              Wichita State, while also teaching Public Speaking there as well.
              However, in my spare time I enjoy a variety of activities including
              working out, anime, watching movies, and capturing candid moments
              with my camera. It’s my own personal interests that drove me to
              start passion projects like{" "}
              <Link to="/hero-101">
                <span style={{ color: "red" }}>HERO 101</span>
              </Link>
              , which would eventually blossom into starting my own business.{" "}
              <br />
              <br />
              Let’s chase and catch the perfect moment together!
            </p>
            {/* </strong> */}
          </div>
        </MDBRow>
        {/* <MDBRow>
          <p>
            Insert pictures of some favorite topics here? banner style, slides
            across screen
          </p>
        </MDBRow> */}
      </MDBContainer>
    </div>
  );
};

export default About;
