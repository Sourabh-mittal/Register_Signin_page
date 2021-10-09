import React from "react";

const label = (data) => {
  return <label {...data}>{data.value}</label>;
};

export default label;
