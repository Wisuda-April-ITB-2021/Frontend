import React from "react";
import { ReactComponent as InstagramIcon } from "../../icons/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../../icons/linkedin.svg";
import { ReactComponent as TwitterIcon } from "../../icons/twitter.svg";
import { ReactComponent as SpotifyIcon } from "../../icons/spotify.svg";
import { ReactComponent as LineIcon } from "../../icons/line.svg";
import { ReactComponent as TiktokIcon } from "../../icons/tiktok.svg";
import "./Footer.scss";

import Logo from "../../images/logo/logo-polos-sm.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-text">
        <div className="footer-wispril">
          <img src={Logo} alt="footer-logo"/>
          <h4>WISPRIL 2021</h4>
        </div>
        <p id="quote">The Light of Hope in Times of Change</p>
        <p id="cr">© Perayaan Wisuda April ITB 2021</p>
      </div>
      <div className="footer-socialmedia">
        <h4>FIND US ON SOCIAL MEDIA</h4>
        <div className="footer-logo">
          <a
            href="https://www.instagram.com/paradewisudaitb/"
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="social-media-icon instagram-icon" />
          </a>
          <a
            href="https://twitter.com/paradewisudaitb"
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="social-media-icon twitter-icon" />
          </a>
          <a
            href="https://line.me/R/ti/p/%40mov0891c"
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LineIcon className="social-media-icon line-icon" />
          </a>
          <a
            href="https://open.spotify.com/user/huto1ycscch4bkj3fukhzssrr?si=49_xyAWdTFGzEPG-R1_-PQ&nd=1"
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SpotifyIcon className="social-media-icon spotify-icon" />
          </a>
          <a
            href="https://www.tiktok.com/@paradewisudaitb"
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiktokIcon className="social-media-icon tiktok-icon" />
          </a>
          <a
            href="http://linkedin.com/company/perayaan-wisuda-april-itb-2021"
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="social-media-icon linkedin-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};
