import React, { Component } from "react";
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
      <MDBNavbar color="blue" dark expand="md" scrolling fixed="top">
        <MDBNavbarBrand>
          <strong className="white-text">Chase Me If You Can</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggle} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/about">About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Galleries</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">
                    Birthdays / Weddings
                  </MDBDropdownItem>
                  <MDBDropdownItem href="#!">Drong Shots</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Sports</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Graduation</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/contact-us">Contact Us</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>

          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBIcon
                fab
                icon="facebook-square"
                right
                size="2x"
                style={{ color: "black" }}
              />
            </MDBNavItem>
            <MDBNavItem>
              <MDBIcon
                fab
                icon="twitter-square"
                right
                size="2x"
                style={{ color: "black" }}
              />
            </MDBNavItem>
            <MDBNavItem>
              <MDBIcon
                fab
                icon="instagram"
                right
                size="2x"
                style={{ color: "black" }}
              />
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
                  style={{ color: "black" }}
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
