import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { SiLine } from "react-icons/si";
import { SiTiktok } from "react-icons/si";
import "./Footer.scss";

import Logo from "../../images/logo/logo-polos-sm.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-text">
        <div className="footer-wispril">
          <img src={Logo} alt="footer-logo" />
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
            <FaInstagram className="social-media-icon instagram-icon" />
          </a>
          <a
            href="https://twitter.com/paradewisudaitb"
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="social-media-icon twitter-icon" />
          </a>
          <a
            href="https://line.me/R/ti/p/%40mov0891c"
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLine className="social-media-icon line-icon" />
          </a>
          <a
            href="https://open.spotify.com/user/huto1ycscch4bkj3fukhzssrr?si=49_xyAWdTFGzEPG-R1_-PQ&nd=1"
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSpotify className="social-media-icon spotify-icon" />
          </a>
          <a
            href="https://www.tiktok.com/@paradewisudaitb"
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTiktok className="social-media-icon tiktok-icon" />
          </a>
          <a
            href="http://linkedin.com/company/perayaan-wisuda-april-itb-2021"
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-media-icon linkedin-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};
