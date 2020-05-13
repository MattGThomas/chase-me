import React, { Component } from "react";
import {
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCard,
  MDBIcon,
  MDBCardBody,
  MDBContainer,
} from "mdbreact";
import dempseys from "../../images/reg-pics/dempseys.JPG";
// import dog from "https://placedog.net/800/640?id=81";
import "./contactform.css";

class ContactForm extends Component {
  render() {
    return (
      <div className="contact-heading">
        <h2 style={{ color: "#ff9e0d" }}>Contact Me</h2>
        <div>
          <p
            className="text-center"
            style={{
              color: "#ff9e0d",
              // textAlign: "center",
              // border: "1px solid red",
            }}
          >
            <strong>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque{" "}
              <br />
              lectus enim, efficitur ac finibus hendrerit, elementum quis leo.
              <br />
              Proin convallis ornare tortor. Vestibulum aliquet libero sed
              {/* if you're looking for some work video blah blah blah <br />
                or some pictures for graduation, weddings, etc...
                <br /> shoot us a message and we will get right back to you */}
            </strong>
          </p>
        </div>
        <MDBContainer>
          <MDBRow className="contact-form">
            <MDBCol style={{ color: "#ff9e0d" }}>
              <img
                src={dempseys}
                alt="happy couple"
                width="80%"
                className="dempseys-pic"
              />
            </MDBCol>
            <MDBCol>
              <div className="d-flex justify-content-center">
                <MDBCard style={{ padding: "2%", background: "fffff0" }}>
                  <MDBCardBody>
                    <form>
                      {/* <MDBRow> */}
                      <MDBRow md="4">
                        <MDBCol>
                          {/* <div> */}
                          {/* <MDBIcon icon="user-secret" /> */}
                          <MDBInput label="Name" color="black" required />
                          {/* </div> */}
                        </MDBCol>

                        <MDBCol>
                          <MDBInput label="Phone Number" />
                        </MDBCol>
                      </MDBRow>

                      <MDBRow md="4">
                        <MDBCol>
                          <MDBInput label="Email" required />
                        </MDBCol>

                        <MDBCol>
                          <MDBInput label="Last Name" required />
                        </MDBCol>
                      </MDBRow>
                      {/* </MDBRow> */}
                      {/* <textarea /> */}
                      <MDBInput
                        type="textarea"
                        label="leave us a message"
                        required
                      />
                      {/* <MDBInput
              label="Whats the occassion? wedding? graduation?"
              required
            /> */}
                      {/* <MDBInput label="Whats Your Budget" /> */}
                      <MDBBtn outline color="black">
                        <MDBIcon
                          icon="paper-plane"
                          style={{ paddingRight: "1%", color: "black" }}
                        />
                        hello
                      </MDBBtn>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default ContactForm;
