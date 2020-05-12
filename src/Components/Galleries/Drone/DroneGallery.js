import React, { Component } from "react";
import droneBackground from "../../../images/drone-pics/Drone_Reel_1.mpg";
class DroneGallery extends Component {
  //   state = {
  //     videoBackground: "",
  //   };
  render() {
    return (
      <video loop autoPlay>
        <source src={droneBackground} type="video/mp4" />
      </video>
    );
  }
}

export default DroneGallery;
