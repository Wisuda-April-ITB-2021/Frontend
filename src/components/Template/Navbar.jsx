import React, { useState } from "react";
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
  return testExp.test(navigator.userAgent);
};

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const isMobile = checkIsMobile();
  const toogleOpen = () => setOpen((prev) => !prev);
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={Logo} alt="navbar-logo" />
        <h4>WISPRIL 2021</h4>
      </Link>
      <div className="navbar-button" onClick={toogleOpen}>
        <div className="navbar-line" />
      </div>
      {(isOpen || !isMobile) && <NavbarLinks />}
    </nav>
  );
};
