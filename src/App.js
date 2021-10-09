import React from "react";
import "./App.css";
import Registration from "./page/registration/Registration.page";
import Signin from "./page/Signin/Signin.page";

class App extends React.Component {
  render() {
    return (
      <div>
        <Registration />
        <Signin />
      </div>
    );
  }
}

export default App;
