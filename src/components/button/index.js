import React from "react";
import "./style.scss";
const Button = (props) => {
  const { type } = props;
  return (
    <button className={`button button-${type || "primary"} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
