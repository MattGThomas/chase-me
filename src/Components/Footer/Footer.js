import React from "react";
import { MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter
      color="#0A0A0A"
      style={{ paddingTop: "3%", paddingBottom: "3%" }}
    >
      <MDBContainer fluid className="text-center">
        <MDBRow style={{ justifyContent: "space-between", padding: "0 15%" }}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://m.facebook.com/CMIYCProd/"
          >
            <MDBIcon
              fab
              icon="facebook-square"
              right
              size="2x"
              style={{ color: "red" }}
            />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/ChasertheEraser"
          >
            <MDBIcon
              fab
              icon="twitter-square"
              right
              size="2x"
              style={{ color: "#bfbfbf" }}
            />
          </a>
          <MDBIcon
            fab
            icon="instagram"
            right
            size="2x"
            style={{ color: "red" }}
          />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UCDRkpkT0F62mWB8Jpn89I-g"
          >
            <MDBIcon
              fab
              icon="youtube-square"
              right
              size="2x"
              style={{ color: "#bfbfbf" }}
            />
          </a>
          {/* <MDBCol md="6">
            <h5 className="title">Footer Content</h5>

          </MDBCol> */}
        </MDBRow>
      </MDBContainer>
      {/* <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <span>Chase Me If You Can Productions</span>
        </MDBContainer>
      </div> */}
    </MDBFooter>
  );
};

export default Footer;
