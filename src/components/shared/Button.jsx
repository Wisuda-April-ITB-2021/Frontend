import React from "react";
import "./Button.scss";

export const Button = (props) => {
    return (
        <div className="button" {...props}><span className="span">{props.children}</span></div>
    );
};

export default Button;