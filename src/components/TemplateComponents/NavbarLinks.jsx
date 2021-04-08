import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { NavbarRoutes } from "../../routes/routes";
import { NavLink } from "react-router-dom";
import { CollapsibleNav } from "./CollapsibleNav";

export const NavbarLinks = ({ isOpen, isMobile }) => {
  const content = NavbarRoutes.map(
    ({ content: route, isCollapsible, children, parentPath }, idx) =>
      isCollapsible ? (
        <CollapsibleNav
          route={route}
          children={children}
          parentPath={parentPath}
          key={idx}
          isMobile={isMobile}
        />
      ) : (
        <NavLink
          exact={route.path === "/"}
          className="navlink"
          activeClassName="navlink-active"
          key={idx}
          to={route.path}
        >
          <h5>{route.label}</h5>
        </NavLink>
      )
  );

  return (
    <AnimatePresence>
      {!isMobile && (
        <div className="navbar-links" key="1">
          {content}
        </div>
      )}
      {isMobile && isOpen && (
        <motion.div
          key="2"
          initial={{ y: "-100%" }}
          animate={{ opacity: 1, y: "-100px" }} // sama kayak padding-top .navbar-links di media query Navbar.scss
          exit={{ opacity: 0.5, y: "-100%" }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 14,
          }}
          className={`navbar-links`}
        >
          {content}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
