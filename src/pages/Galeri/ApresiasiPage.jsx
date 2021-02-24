import React from "react";
import { motion } from "framer-motion";
import { pageVariants } from "../Template/variants";
import { Template } from "../Template/Template";
import "./ApresiasiPage.scss";

export const ApresiasiPage = () => {
  return (
    <Template>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        Page Apresiasi
      </motion.div>
    </Template>
  );
};
