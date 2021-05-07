import React from "react";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import { Lock, AlternateEmailOutlined as Email } from "@material-ui/icons";
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

export default function SignIn() {
  return (
    <>
      <Nav />
      <center>
        <Form className="login">
          <header>
            <h1>Sign In</h1>
            <h3>
              Don't have an account ? <Link to="/signup">Sign up here</Link>
            </h3>
          </header>
          <Input tab={<Email />} ph="Your email" />
          <Input tab={<Lock />} ph="Password" />
          <ColorButton
            variant="contained"
            color="primary"
            style={{ width: "100%", textTransform: "none" }}
          >
            Sign In
          </ColorButton>
          <p style={{ marginTop: 15 }}>
            By clicking this button, you agree to our
            <br />
            <Link to="/privacy">Privacy Policy</Link> &{" "}
            <Link to="/terms">Terms of Use</Link>
          </p>
        </Form>
      </center>
    </>
  );
}
