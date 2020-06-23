import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import '../styles.css';

const NavBarView = (props) => {
  let { isLoggedIn } = props;
  if (!isLoggedIn) {
    return (
      <Navbar bg="dark" variant="dark">
        <Nav className="ml-auto"/>
          <Link pullRight to="/login">Login</Link>
      </Navbar>
    );
  }
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/home" className="nav-link">
        <button id="navbutton">
        Home
        </button>
      </Link>
      <Link to="/foodEntries" classname="nav-link">
      <button id="navbutton">
      Add food
      </button>
      </Link>
      <Link to="/exerciseEntries" classname="nav-link">
      <button id="navbutton">
        Add exercise
        </button>
      </Link>
    </Navbar>
  );
};

export default NavBarView;
