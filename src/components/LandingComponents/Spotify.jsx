import React from "react";
import "./Spotify.scss";

export const Spotify = (props) => {
    return(
        <iframe className="spotipai"
            src={props.link}  // spotipai
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="false"
            allow="encrypted-media">
        </iframe>
    );
};