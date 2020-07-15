import React, { Component } from "react";
import theDrone from "../../../images/reg-pics/theDrone.JPG";
import drone2 from "../../../images/reg-pics/drone2.jpeg";
import drone3 from "../../../images/reg-pics/drone3.PNG";
import drone4 from "../../../images/reg-pics/drone4.PNG";
import drone5 from "../../../images/reg-pics/drone5.PNG";
import Picture from "./Picture.js";

import "../gallery.css";
class DroneGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      droneArray: [
        { picture: theDrone },
        { picture: drone2 },
        { picture: drone3 },
        { picture: drone4 },
        { picture: drone5 },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2 style={{ paddingTop: "7%" }} className="gallery-header">
          DRONES
        </h2>
        <div>
          {this.state.droneArray.map((picture, index) => (
            <Picture key={index} index={index} picture={picture} />
          ))}
        </div>
      </div>
    );
  }
}

export default DroneGallery;
