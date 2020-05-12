import React, { Component } from "react";
import { MDBCol, MDBRow, MDBBtn, MDBInput, MDBCard, MDBIcon } from "mdbreact";
import "./contactform.css";

class ContactForm extends Component {
  render() {
    return (
      <div className="contact-heading">
        <p style={{ color: "red" }}>
          <strong>
            if you're looking for some work video blah blah blah <br />
            or some pictures for graduation, weddings, etc...
            <br /> shoot us a message and we will get right back to you
          </strong>
        </p>
        <div className="d-flex justify-content-center">
          <MDBCard style={{ width: "80%", padding: "2%" }}>
            <form>
              {/* <MDBRow> */}
              <MDBRow md="4">
                <MDBCol>
                  <MDBInput label="Name" required />
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
              <MDBInput type="textarea" label="leave us a message" required />
              {/* <MDBInput
              label="Whats the occassion? wedding? graduation?"
              required
            /> */}
              {/* <MDBInput label="Whats Your Budget" /> */}
              <MDBBtn outline>
                <MDBIcon icon="paper-plane" style={{ paddingRight: "1%" }} />
                hello
              </MDBBtn>
            </form>
          </MDBCard>
        </div>
      </div>
    );
  }
}

export default ContactForm;
