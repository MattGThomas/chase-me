import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import drone_chase from "../../images/drone-pics/chase.JPG";
import "./about.css";

const About = (props) => {
  return (
    <div className="about-spacing">
      <MDBContainer style={{ color: "black", fontSize: "1.2rem" }}>
        <MDBRow className="about-content">
          <MDBCol>
            <img
              src={drone_chase}
              alt="Chase with drone pic"
              width="80%"
              //   height="80%"
            />
          </MDBCol>
          <MDBCol className="text-left">
            <strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                lectus enim, efficitur ac finibus hendrerit, elementum quis leo.
                Proin convallis ornare tortor. Vestibulum aliquet libero sed
                lectus iaculis, eget venenatis ligula laoreet. Donec commodo dui
                id sagittis hendrerit. Quisque turpis ex, pretium nec elementum
                non, cursus sed massa. Cras ac ex vel sapien vestibulum mollis.
                <br />
                <br />
                Integer in sagittis sapien. Fusce erat ante, finibus nec elit
                vitae, venenatis blandit lacus. Proin vulputate augue congue
                commodo elementum. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec tincidunt dolor
                a ex vehicula, sit amet ultricies eros varius. Sed felis eros,
                sodales vel pharetra in, auctor quis leo.
                <br />
                <br />
                Mauris faucibus id lacus eu pellentesque. Etiam mattis lorem vel
                accumsan vehicula. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Vivamus ullamcorper ex vel velit scelerisque
                tempor. Integer gravida tempus odio id rutrum. Etiam ullamcorper
                velit ac porta placerat. Suspendisse sagittis et enim semper
                tincidunt. Nullam ante ex, consectetur ornare ipsum id, faucibus
                elementum dui. Proin accumsan lacinia ligula ut auctor.
                Suspendisse in nibh rhoncus, ultrices velit et, lobortis lectus.
              </p>
            </strong>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <h2>
            Insert pictures of some favorite topics here? banner style, slides
            across screen
          </h2>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default About;
