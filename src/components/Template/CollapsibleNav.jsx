import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as DropdownIcon } from "../../icons/dropdown.svg";
import "./Navbar.scss";

export const CollapsibleNav = ({ route, children, parentPath }) => {
  const [isOpen, setOpen] = useState(false);
  const toogleOpen = (e) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  };
  return (
    <div className="navlink-dropdown-container">
      <NavLink
        exact={route.path === "/"}
        className={`navlink ${isOpen && "navlink-active"}`}
        activeClassName="navlink navlink-active"
        onClick={toogleOpen}
        to={route.path}
      >
        <h5>{route.label}</h5>
        <DropdownIcon className={isOpen ? "nav-icon-rotated" : "nav-icon"} />
      </NavLink>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`navlink-dropdown`}
          >
            <span className="navlink-dropdown-close" onClick={toogleOpen} />
            {children.map(({ label, path }) => (
              <NavLink
                key={path}
                className="navlink-dropdown-link"
                activeClassName="navlink-dropdown-link-active"
                to={parentPath + path}
              >
                <h5>{label}</h5>
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
