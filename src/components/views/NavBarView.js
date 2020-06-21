import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { NavBarContainer } from "../containers";

const NavBarView = (props) => {
  const { isLoggedIn } = props;
  console.log(isLoggedIn);
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
      <Link to="/foods" className="nav-link">
        Foods
      </Link>
    </Navbar>
  );
};

export default NavBarView;
