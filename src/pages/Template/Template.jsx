import React from "react";
import { motion } from "framer-motion";

import { pageVariants, pageTransition } from "./variants";
import { Footer } from "../../components/TemplateComponents/Footer";
import { Navbar } from "../../components/TemplateComponents/Navbar";

import "./Template.scss";

const Fireflies = () => (
  <div className="firefly-wrap">
    <div className="firefly"></div>
    <div className="firefly"></div>
    <div className="firefly"></div>
    <div className="firefly"></div>
    <div className="firefly"></div>
    <div className="firefly"></div>
    <div className="firefly"></div>
    <div className="firefly"></div>
    <div className="firefly"></div>
    <div className="firefly"></div>
    <div className="firefly"></div>
    <div className="firefly"></div>
    <div className="firefly"></div>
    <div className="firefly"></div>
    <div className="firefly"></div>
  </div>
);

export const Template = ({ children, nofooter, nocontain }) => {
  return (
    <div className="template">
      <Navbar />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <div className={`template${nocontain ? "-header" : "-content"}`}>
          {children}
        </div>
      </motion.div>
      {!nofooter && <Footer />}
      {<Fireflies />}
    </div>
  );
};
