import React, { Component } from "react";
import "./Signin.styles.css";

import Label from "../../component/label/Label.component";
import Input from "../../component/input/Input.component";
import Button from "../../component/button/Button.component";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <div style={{ border: "1px solid #ccc" }} className="signin-page">
        <h1>Sign In</h1>
        <p>Please fill in this form to Sign in into your account.</p>
        <Label htmlFor="email" value="Email" />
        <Input type="email" placeholder="Enter Email" name="email" />
        <Label htmlFor="email" value="Password" />
        <Input type="password" placeholder="Enter Password" name="password" />
        <div className="remember-me">
          <Input type="checkbox" name="remember-me" />
          <Label htmlFor="remember-me" value="Remember me" />
        </div>
        <Button className="signinbtn" value="Sign In" /> <br />
      </div>
    );
  }
}

export default Signin;
