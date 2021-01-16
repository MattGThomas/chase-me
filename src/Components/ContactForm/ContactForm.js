import React, { Component } from "react";
import Axios from "axios";
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
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      message: "",
      email: "",
      isSubmitted: false,
    };
  }
  change = (evt) => {
    evt.preventDefault();
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  submit = (evt) => {
    evt.preventDefault();
    const { firstName, lastName, message, email, phoneNumber } = this.state;
    Axios.post("https://chase-me-backend.herokuapp.com/api/request", {
      firstName,
      lastName,
      message,
      email,
      phoneNumber,
    })
      .then((res) => {
        console.log(res);
        return this.setState({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
          isSubmitted: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    let submitMessage;
    const { isSubmitted } = this.state;
    if (isSubmitted) {
      submitMessage = (
        <p>Thank you for your submission, I will reach out to you shortly!</p>
      );
    }
    const { firstName, lastName, email, phoneNumber, message } = this.state;
    return (
      <div className="contact-heading">
        <h2>Contact Me</h2>
        <div>
          <p className="text-center">
            Send me a message, let me know what you are looking for and lets
            bring your dream to life
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
                <MDBCard
                  style={{ padding: "2%", background: "fffff0", width: "100%" }}
                >
                  <MDBCardBody>
                    {submitMessage}
                    <form onSubmit={this.submit}>
                      <MDBRow md="4">
                        <MDBCol>
                          <MDBInput
                            label="First Name"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            type="text"
                            color="black"
                            onChange={this.change}
                            required
                          />
                        </MDBCol>

                        <MDBCol>
                          <MDBInput
                            label="Last Name"
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            type="text"
                            onChange={this.change}
                          />
                        </MDBCol>
                      </MDBRow>

                      <MDBRow md="4">
                        <MDBCol>
                          <MDBInput
                            label="Email"
                            id="email"
                            name="email"
                            value={email}
                            type="email"
                            onChange={this.change}
                            required
                          />
                        </MDBCol>

                        <MDBCol>
                          <MDBInput
                            label="Phone Number"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={phoneNumber}
                            type="tel"
                            onChange={this.change}
                          />
                        </MDBCol>
                        
                      </MDBRow>

                      <MDBInput
                        type="textarea"
                        id="message"
                        name="message"
                        value={message}
                        label="leave us a message"
                        onChange={this.change}
                        required
                      />

                      <MDBBtn outline color="black" type="submit">
                        <MDBIcon
                          icon="paper-plane"
                          style={{ paddingRight: "1%", color: "black" }}
                        />
                        hello
                      </MDBBtn>
                      <input type="hidden" name="form-name" value="contact" />
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
