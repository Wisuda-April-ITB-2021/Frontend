import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as DropdownIcon } from "../../icons/dropdown.svg";
import "./Navbar.scss";

export const CollapsibleNav = ({ route, children, parentPath, isMobile }) => {
  const ref = useRef();
  const [isOpen, setOpen] = useState(isMobile);
  const [height, setHeight] = useState("100px"); // ini hasil coba-coba, jangan ditiru
  const toogleOpen = (e) => {
    e.preventDefault();
    setOpen((prev) => !prev);
    isMobile &&
      setHeight(() => {
        let scrollHeight = ref.current.scrollHeight;
        let elmtHeight = scrollHeight + 12;
        elmtHeight = elmtHeight.toString() + "px";
        setHeight(isOpen ? "0px" : elmtHeight);
      });
  };

  const content = (
    <>
      <span className="navlink-dropdown-close" onClick={toogleOpen} />
      {children.map(({ label, path }) => (
        <NavLink
          key={path}
          className={`navlink-dropdown-link ${
            !isOpen && "navlink-dropdown-link-closed"
          }`}
          activeClassName="navlink-dropdown-link-active"
          to={parentPath + path}
        >
          <h5>{label}</h5>
        </NavLink>
      ))}
    </>
  );

  return (
    <div className="navlink-dropdown-container">
      <NavLink
        exact={route.path === "/"}
        className={`navlink ${isOpen && "navlink-open"}`}
        activeClassName="navlink navlink-active"
        onClick={toogleOpen}
        to={route.path}
      >
        <h5>{route.label}</h5>
        <DropdownIcon className={isOpen ? "nav-icon-rotated" : "nav-icon"} />
      </NavLink>
      {isMobile ? (
        <div
          className={`navlink-dropdown navlink-dropdown-mobile`}
          ref={ref}
          style={{ height: height }}
        >
          {content}
        </div>
      ) : (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { delay: 0 } }}
              className={`navlink-dropdown`}
              transition={{
                type: "spring",
              }}
            >
              {content}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};
