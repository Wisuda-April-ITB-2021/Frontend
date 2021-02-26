import React from "react";
import { motion } from "framer-motion";

import { pageVariants, pageTransition } from "./variants";
import { Footer } from "../../components/Template/Footer";
import { Navbar } from "../../components/Template/Navbar";

import "./Template.scss";

export const Template = ({ children, nofooter }) => {
  return (
    <div className="template">
      <Navbar />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <div className="template-content">{children}</div>
      </motion.div>
      {!nofooter && <Footer />}
    </div>
  );
};
