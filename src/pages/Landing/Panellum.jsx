import React from "react";
import { motion } from "framer-motion";
import { pageVariants } from "../Template/variants";
import { Template } from "../Template/Template";
import "./Panellum.scss";

export const Panellum = () => {
  return (
    <Template>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        Panellum
      </motion.div>
    </Template>
  );
};
