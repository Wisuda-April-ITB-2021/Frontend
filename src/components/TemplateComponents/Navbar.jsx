import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

import Logo from "../../images/logo/logo-polos-sm.png";
import { NavbarLinks } from "./NavbarLinks";

const checkIsMobile = () => {
  const testExp = new RegExp(
    "Android|webOS|iPhone|iPad|" +
      "BlackBerry|Windows Phone|" +
      "Opera Mini|IEMobile|Mobile",
    "i"
  );
  const smallWindow = window.innerWidth < 700;
  return testExp.test(navigator.userAgent) || smallWindow;
};

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(checkIsMobile());
  useEffect(() => {
    function handleResize() {
      setIsMobile(checkIsMobile());
      setOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const toogleOpen = () => setOpen((prev) => !prev);
  return (
    <nav className="navbar">
      <div
        className="navbar-close-overlay"
        style={{ display: isOpen ? "block" : "none" }}
        onClick={toogleOpen}
      />
      <Link to="/" className="navbar-logo">
        <img src={Logo} alt="navbar-logo" />
        <h4>WISPRIL 2021</h4>
      </Link>
      <NavbarLinks isOpen={isOpen} isMobile={isMobile} />
      <div className="navbar-background" />
      <div className="navbar-button" onClick={toogleOpen}>
        <div className={`navbar-line ${isOpen && "navbar-line-active"}`} />
      </div>
    </nav>
  );
};
