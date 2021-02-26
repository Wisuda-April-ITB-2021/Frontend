import React from "react";
import { NavbarRoutes } from "../../routes/routes";
import { NavLink } from "react-router-dom";
import { CollapsibleNav } from "./CollapsibleNav";

export const NavbarLinks = () => {
  return (
    <div className={`navbar-links`}>
      {NavbarRoutes.map(
        ({ content: route, isCollapsible, children, parentPath }) =>
          isCollapsible ? (
            <CollapsibleNav
              route={route}
              children={children}
              parentPath={parentPath}
              key={route.path}
            />
          ) : (
            <NavLink
              exact={route.path === "/"}
              className="navlink"
              activeClassName="navlink-active"
              key={route.path}
              to={route.path}
            >
              <h5>{route.label}</h5>
            </NavLink>
          )
      )}
    </div>
  );
};
