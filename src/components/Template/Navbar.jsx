import React from "react";
import "./Navbar.scss";
import { NavbarRoutes } from "../../routes/routes";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      {NavbarRoutes.map((route) => (
        <NavLink
          exact={route.path === "/"}
          className="navbar-link"
          activeClassName="navbar-link-active"
          key={route.path}
          to={route.path}
        >
          {route.label}
        </NavLink>
      ))}
    </nav>
  );
};
