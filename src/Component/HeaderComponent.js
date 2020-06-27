import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink, Button } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <div className="App fixed navshadow">
        <Navbar dark color="danger">
          <NavbarBrand>Student's name</NavbarBrand>

          <Nav className="ml-auto">
            <Button className="btn btn-primary">Logout</Button>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
