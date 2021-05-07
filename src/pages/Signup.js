import React from "react";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import {
  Lock,
  LockOutlined,
  AlternateEmailOutlined as Email,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

import { ColorButton } from "./FancyButtons";
import Nav from "./Nav";
import "./login.css";


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

export default function SignUp() {
  return (
    <>
      <Nav />
      <center>
        <Form className="login">
          <header>
            <h1>Sign Up</h1>
            <h3>
              Already have an account ? <Link to="/signin">Sign in here</Link>
            </h3>
          </header>
          <Input tab={<Email />} ph="Email" />
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
            <Link to="/privacy">Privacy Policy</Link> &
            <Link to="/terms">Terms of Use</Link>
          </p>
        </Form>
      </center>
    </>
  );
}
