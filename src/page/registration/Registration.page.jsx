import React from "react";
import "./Registration.styles.css";
import Label from "../../component/label/Label.component";
import Input from "../../component/input/Input.component";
import Button from "../../component/button/Button.component";

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      repassword: "",
    };
  }

  render() {
    return (
      <div style={{ border: "1px solid #ccc" }} className="register-page">
        <h1>Registration</h1>
        <p>Please fill in this form to create an account.</p>
        <Label htmlFor="name" value="Name" />
        <Input
          onChange={this.onChange}
          type="text"
          placeholder="Enter Name"
          name="name"
        />
        <Label htmlFor="email" value="Email" />
        <Input type="email" placeholder="Enter Email" name="email" />
        <Label htmlFor="email" value="Password" />

        <Input
          onChange={this.onChange}
          type="password"
          placeholder="Enter Password"
          name="password"
        />
        <Label htmlFor="email" value="Re-enter Password" />
        <Input
          onChange={this.onChange}
          type="password"
          placeholder="Re-Enter Password"
          name="password"
        />
        <div className="remember-me">
          <Input type="checkbox" name="remember" />
          <Label htmlFor="email" value="Remember me" />
        </div>
        <p>
          By creating an account you to agree to our{" "}
          <a
            href="https://drive.google.com/file/d/10w3kjGTsEoKCZzlfvbx04uTcyYxJELVW/view"
            style={{ color: "dodgerblue" }}
          >
            Terms & Conditition
          </a>
        </p>
        <div className="clearfix">
          <Button className="registerbtn" value="Register" /> <br />
        </div>
      </div>
    );
  }
}

export default Registration;
