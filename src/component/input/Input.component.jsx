import React, { useState } from "react";
import "./Input.styles.css";

const Input = (data) => {
  const [name, setName] = useState("");

  return (
    <input
      className="input-component"
      onChange={(event) => setName(event.target.value)}
      {...data}
      required
    />
  );
};

export default Input;
