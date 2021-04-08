import React from "react";
import "./Youtube.scss";

export const Youtube = (props) => {
    return (
        <iframe
            className='yutup'
            src={props.link}
            height='390vh'
            width='700vw'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='youtube'
        ></iframe>
    );
};