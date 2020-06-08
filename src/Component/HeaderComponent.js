import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink, Button } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <div className="App fixed navshadow">
        <Navbar dark color="danger">
          <NavbarBrand>Your Name</NavbarBrand>
          <Nav className="mr-auto">
            <NavItem>
              <NavLink>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Aboutus</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto">
            <Button className="btn btn-primary">Login</Button>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
