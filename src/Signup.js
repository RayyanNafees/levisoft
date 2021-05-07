import React from "react";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import "./login.css";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { indigo } from "@material-ui/core/colors";
import { Lock, LockOutlined } from "@material-ui/icons";


const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(indigo[500]),
    backgroundColor: indigo[500],
    "&:hover": {
      backgroundColor: indigo[700],
    },
  },
}))(Button);


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

function Nav(){
  return (
    <div>
<span />
<span />

    </div>
  )
}




export default function SignUp() {
  return (
    <center>
      <Form className="login">
        <header>
          <h1>Sign Up</h1>
          <h3>
            Already have an account ? <a href="/signin">Sign in here</a>
          </h3>
        </header>
        <Input tab="@" ph="Email" />
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
  );
}
