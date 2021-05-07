import React from "react";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import "./login.css";

import Button from "@material-ui/core/Button";
import { Lock, LockOutlined, AlternateEmailOutlined as Email } from "@material-ui/icons";

import {ColorButton, SignUp} from './FancyButtons'

function Input({ tab, ph }) {
  return (
    <Form.Group>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">{tab}</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder={ph}
          aria-label={ph}
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </Form.Group>
  );
}

function Nav() {
  return (
    <nav>
      <span />
      <div id="logo">whatsmyresp</div>
      <div id="contact">Contact Us</div>
      <div id="btns">
        <Button color="primary">Sign In</Button>
        <Button color="primary" variant="contained">Sign Up for Free</Button>
      </div>
      <span />
    </nav>
  );
}

export default function Sign() {
  return (
    <>
      <Nav />
      <center>
        <Form className="login">
          <header>
            <h1>Sign Up</h1>
            <h3>
              Already have an account ? <a href="/signin">Sign in here</a>
            </h3>
          </header>
          <Input tab={<Email/>} ph="Email" />
          <Input tab={<LockOutlined />} ph="Password" />
          <Input tab={<Lock />} ph="Password Confirmation" />

          <ColorButton
            variant="contained"
            color="primary"
            style={{ width: "100%" }}
          >
            Submit
          </ColorButton>
          <p style={{ marginTop: 15 }}>
            By clicking this button, you agree to our
            <br />
            <a href="/privacy">Privacy Policy</a> &{" "}
            <a href="/terms">Terms of Use</a>
          </p>
        </Form>
      </center>
    </>
  );
}
