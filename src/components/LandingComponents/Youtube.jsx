import React from "react";
import "./Youtube.scss";

export const Youtube = (props) => {
    return (
        <iframe 
            width="560" 
            height="315" 
            src={props.link}
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen 
            className="youtube">
        </iframe>
    );
};