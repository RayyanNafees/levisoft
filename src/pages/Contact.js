import React from "react";
import "./login.css";
import Nav from './Nav'

export default function ContactUs() {
  let styles = {
    margin: 20,
    marginTop: 100,
    padding: 20,
    width: 450,
    textAlign:'center'
  };

  let align={textAlign:'center'};

  return (
    <>
      <Nav />
      <center>
        <header style={styles}>
          <h1 style={align}>We'd love to hear from you!</h1>
          <h3 style={align}>Tell us how we can help and we'll get in touch shortly</h3>
          <a href="mailto:admin@domain.com">admin@domain.com</a>
        </header>
      </center>
    </>
  );
}
