import React from "react";
import "./Button.styles.css";

const Button = (data) => {
  return <button {...data}>{data.value}</button>;
};

export default Button;
