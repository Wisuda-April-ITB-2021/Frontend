import React from "react";
import { motion } from "framer-motion";

import { pageVariants, pageTransition } from "./variants";
import { Footer } from "../../components/Template/Footer";
import { Navbar } from "../../components/Template/Navbar";

export const Template = ({ children, nofooter }) => {
  return (
    <>
      <Navbar />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        {children}
      </motion.div>
      {!nofooter && <Footer />}
    </>
  );
};
