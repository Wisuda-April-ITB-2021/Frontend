import React from "react";
import { motion } from "framer-motion";
import { pageVariants } from "../Template/variants";
import { Template } from "../Template/Template";
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <Template>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        HomePage
      </motion.div>
    </Template>
  );
};
