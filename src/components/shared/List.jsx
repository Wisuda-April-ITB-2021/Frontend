// List use example:
//
//<List>
//    <ListItem title="Wibu Parah">Katanya sih udah ngabisin 1000 episode anime, trus suka koleksi figure-figure anime idol gitu</ListItem>
//    <ListItem title="Lahir di Bandung, 1 Januari 1998" />
//</List>

import React from "react";
import Linkify from 'react-linkify';
import ReactEmoji from 'react-emoji';
import "./List.scss";

export const List = (props) => {
    return (
        <ul className="list" {...props}>
            {props.children}
        </ul>
    );
};

export const ListItem = (props) => {
    var { title, ...other } = props;
    return (
        <li className="listItem" {...other}>
            <div className="bullet" />
            <div className="listItemWrapper" style={{ "paddingBottom": (props.children) ? "25px" : "10px" }}>
                <h5>{title}</h5>
                <p style={{ marginTop: "8px" }}>{props.children}</p>
            </div>
        </li>
    );
};

export const ListItemPost = (props) => {
    var { title, ...other } = props;
    return (
        <li className="listItemPost" {...other}>
            <hr/>
            <div className="ListItemPostWrapper" style={{ "paddingBottom": (props.children) ? "25px" : "10px" }}>
                <p className="ListItemPostTopic">{title}</p>
                <Linkify><p style={{ marginTop: "8px" }}>{ReactEmoji.emojify(props.children)}</p></Linkify>
            </div>
        </li>
    );
};
