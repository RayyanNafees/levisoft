import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

let sameCase = { textTransform: "none" };
let original = { textDecoration: "inherit", color: "inherit" };
let navbar = { display: "flex", justifyContent: "space-between", margin: 30 };

let Sin = () => (
  <Button color="primary" style={sameCase}>
    <Link to="/signin" style={original}>
      Sign in
    </Link>
  </Button>
);

let Sup = () => (
  <Button color="primary" style={sameCase} variant="contained">
    <Link to="/signup" style={original}>
      Sign Up for Free
    </Link>
  </Button>
);

let Contact = () => (
  <Button style={sameCase}>
    <Link to="/contact" style={original}>
      Contact Us
    </Link>
  </Button>
);

export default function Nav() {
  return (
    <nav style={navbar}>
      <div id="logo">whatsmyresp</div>
      <Contact />
      <div id="btns">
        <Sin />
        <Sup />
      </div>
    </nav>
  );
}
