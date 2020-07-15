import React, { Component } from "react";
import "../gallery.css";
class Picture extends Component {
  render() {
    return (
      <img src={this.props.picture.picture} alt="" className="drone__picture" />
    );
  }
}

export default Picture;
