import React from "react";
import "./Button.scss";

export const Button = ({ active, children, onClick, className, icon }) => {
  return (
    <button
      className={`button${active ? " button-active" : ""} ${className || ""}${
        icon ? " button-icon" : ""
      }`}
      onClick={onClick}
    >
      <span className="span">
        <h5>{children}</h5>
      </span>
    </button>
  );
};

export default Button;
