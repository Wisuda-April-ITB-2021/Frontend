import React from "react";
import { motion } from "framer-motion";
import { pageVariants } from "../Template/variants";
import { Template } from "../Template/Template";
import "./GaleriWisudawan.scss";

export const GaleriWisudawan = () => {
  return (
    <Template>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        Page GaleriWisudawan
      </motion.div>
    </Template>
  );
};
