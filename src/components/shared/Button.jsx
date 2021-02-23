import React from "react";
import "./Button.scss";

export const Button = (props) => {
    return (
        <h5 className="button" {...props}><span className="span">{props.children}</span></h5>
    );
};

export default Button;