import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import "./navbar.css";
// import logo from "../../images/reg-pics/IMG_3070.PNG";

class Navbar extends Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <MDBNavbar color="red" light expand="md" scrolling fixed="top">
        <MDBNavbarBrand>
          {/* <img src={logo} height="25px" width="25px" alt="logo" /> */}
          {/* <p> */}
          <div>
            <strong className="black-text">Chase Me If You Can</strong>
          </div>
          {/* </p> */}
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggle} color="red" />
        <MDBCollapse
          id="navbarCollapse3"
          isOpen={this.state.isOpen}
          navbar
          color="red"
        >
          <MDBNavbarNav left>
            {/* <div className="nav-items"> */}
            <MDBNavItem active>
              <MDBNavLink
                to="/"
                // style={{ color: "#808080" }}
                className="nav-items"
              >
                <strong>Home</strong>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                to="/about"
                style={{ color: "black" }}
                className="nav-items"
              >
                About
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2 nav-items" style={{ color: "black" }}>
                    My Work
                  </span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <NavLink to="/hero-101">
                    <MDBDropdownItem>Hero 101</MDBDropdownItem>
                  </NavLink>
                  <NavLink to="/gallery-page">
                    <MDBDropdownItem>Gallery</MDBDropdownItem>
                  </NavLink>
                  <MDBDropdownItem href="#!">Drone</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                to="/contact-us"
                style={{ color: "black" }}
                className="nav-items"
              >
                Contact
              </MDBNavLink>
            </MDBNavItem>
            {/* </div> */}
          </MDBNavbarNav>

          <MDBNavbarNav right>
            <MDBNavItem>
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
                  style={{ color: "#bfbfbf" }}
                />
              </a>
            </MDBNavItem>
            <MDBNavItem>
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
            </MDBNavItem>
            <MDBNavItem>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/chaseboykins/"
              >
                <MDBIcon
                  fab
                  icon="instagram"
                  right
                  size="2x"
                  style={{ color: "#bfbfbf" }}
                />
              </a>
            </MDBNavItem>
            <MDBNavItem>
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
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;
