import React from "react";
import classnames from "classnames/bind";
import styles from "./NavBar.scss";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import {Link} from "react-router-dom";

let navBarStyle = classnames.bind(styles);

class NavBar extends React.Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <div>
        <Navbar
          className={navBarStyle("navbarMain")}
          color="light"
          light
          expand="md"
        >
          <NavbarBrand href="/">YASH</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/register">Registration</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/view-availability">View Availability</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/rooms">View Rooms</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/add-room">Add Room</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/bookings">Bookings</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/location">Location</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  User
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/user-profile">User Profile</Link>
                  </DropdownItem>
                  <DropdownItem>Logout</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Settings</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
