import React, { useState, useRef } from "react";
import "./Accordion.scss";
import { motion } from "framer-motion";

const Accordion = (props) => {
  const [isActive, setIsActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsActive(isActive === "" ? "active" : "");
    setHeight(
      isActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setIsOpen((isOpen) => !isOpen);
  };

  const contentVariants = {
    opened: {
      y: -20,
      opacity: 0,
    },
    closed: {
      y: 0,
      opacity: 1,
    },
  };

  const rotateVariants = {
    opened: {
      rotate: 0,
      opacity: 1,
    },
    closed: {
      rotate: 540,
      opacity: 1,
    },
  };

  const [height, setHeight] = useState("0px");

  const content = useRef(null);

  return (
    <div className="accordionSection">
      <motion.button className={`btn ${isActive}`} onClick={toggleAccordion}>
        {props.img && (
          <img src={props.image} alt="" className="accordionImage" />
        )}
        <h4 className="accordionTitle">{props.title}</h4>

        <motion.svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={false}
          variants={rotateVariants}
          animate={isOpen ? "closed" : "opened"}
          className="triangle"
        >
          <path
            d="M10.8154 0C5.29258 0 0.81543 4.47715 0.81543 10C0.81543 15.5228 5.29258 20 10.8154 20C16.3383 20 20.8154 15.5228 20.8154 10C20.8154 4.47715 16.3383 0 10.8154 0ZM10.8154 1.5C15.5099 1.5 19.3154 5.30558 19.3154 10C19.3154 14.6944 15.5099 18.5 10.8154 18.5C6.12101 18.5 2.31543 14.6944 2.31543 10C2.31543 5.30558 6.12101 1.5 10.8154 1.5ZM15.3458 7.96967C15.0529 7.67678 14.578 7.67678 14.2851 7.96967L10.8154 11.4393L7.34576 7.96967C7.05287 7.67678 6.57799 7.67678 6.2851 7.96967C5.99221 8.26256 5.99221 8.73744 6.2851 9.03033L10.2851 13.0303C10.578 13.3232 11.0529 13.3232 11.3458 13.0303L15.3458 9.03033C15.6387 8.73744 15.6387 8.26256 15.3458 7.96967Z"
            fill="#4B85AB"
          />
        </motion.svg>
      </motion.button>
      {/* Accordion Content Here */}
      <motion.div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordionContent"
        initial={false}
        variants={contentVariants}
        animate={isOpen ? "closed" : "opened"}
        transition={{ duration: 0.12 }}
      >
        {props.children}
      </motion.div>
    </div>
  );
};

export default Accordion;
